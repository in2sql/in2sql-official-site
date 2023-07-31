'use client'

import Image from 'next/image'
import Teaser from '../components/teaser/teaser'

import Guard from '../components/guard/guard'
import s from './contacts.module.scss'

import { errorsMessages } from '@/app/constants'
import { yupResolver } from '@hookform/resolvers/yup'
import { BaseSyntheticEvent, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { sendToGoogleSheet } from '../handle-form'

type SubmitData = {
  name: string
  email: string
  appeal: string
}

const initialState: SubmitData = {
  name: '',
  email: '',
  appeal: '',
}

const schema = yup
  .object({
    email: yup.string().required(),
    name: yup.string().required(),
    appeal: yup.string().required(),
  })
  .required()

const Contacts = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const [submitData, setSubmitData] = useState<SubmitData>(initialState)

  const onSubmit = (data: SubmitData, e?: BaseSyntheticEvent) => {
    sendToGoogleSheet(e)
    setSubmitData(data)
    reset()
  }

  console.log({ submitData })

  const renderErrorMessage = (field: keyof SubmitData) => (
    <p style={{ color: 'red', fontSize: '0.75rem' }}>
      {errors[field]?.message && errorsMessages[field]}
    </p>
  )

  return (
    <div className={s.wrapper}>
      <div className={s.title}>Контактные данные</div>

      <div className={s.main}>
        <div className={s.row1}>
          <div className={s.left}>
            <div>
              <span style={{ color: '#004077' }}>Тел: </span>+7 (915) 777-00-12
            </div>
            <br />
            <div>
              <span style={{ color: '#004077' }}>Почта: </span>
              dom-rsk2014@yandex.ru
            </div>
            <br /> 141310, Московская область, г. Сергиев Посад,ул. Осипенко д.
            6<br /> оф. Реквизиты Строительная компания ООО «РСК»
            <br />
            <br /> ИНН 3301032210
            <br /> ОГРН 1143339000485
            <Image
              src="/images/map.svg"
              alt="google map"
              style={{
                marginTop: '30px',
              }}
              width={482}
              height={420}
            />
          </div>
          <form className={s.contactsForm} onSubmit={handleSubmit(onSubmit)}>
            <div className={s.inputComponent}>
              <label>Электронная почта</label>
              <input type="email" {...register('email')} />
              {renderErrorMessage('email')}
            </div>
            <div className={s.inputComponent}>
              <label>Ваше имя</label>
              <input type="text" {...register('name')} />
              {renderErrorMessage('name')}
            </div>
            <div className={s.textAreaComponent}>
              <label>Обращение</label>
              <textarea rows={5} {...register('appeal')}></textarea>
              {renderErrorMessage('appeal')}
            </div>
            <button type="submit">Отправить</button>

            <Guard width="100%" />
          </form>
        </div>
        <div className={s.row2}>
          <Teaser />
        </div>
      </div>
    </div>
  )
}

export default Contacts
