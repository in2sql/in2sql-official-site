'use client'

import { useForm } from 'react-hook-form'
import Guard from '../components/guard/guard'
import Jumbotron from '../components/jumbotron/jumbotron'
import s from './try-free.module.scss'
import { useState } from 'react'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { errorsMessages, phoneRegExp } from '@/app/constants'
import { DecoratedPhoneInput } from '../components/hook-form-fields'

type SubmitData = {
  name: string
  mobile: string
  email: string
  company: string
  job: string
}

const initialState: SubmitData = {
  name: '',
  mobile: '',
  email: '',
  company: '',
  job: '',
}

const schema = yup
  .object({
    mobile: yup.string().matches(phoneRegExp).required(),
    email: yup.string().required(),
    name: yup.string().required(),
    company: yup.string().required(),
    job: yup.string().required(),
  })
  .required()

const TryFree = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(schema),
  })

  const [submitData, setSubmitData] = useState<SubmitData>(initialState)

  const onSubmit = (data: SubmitData) => {
    console.log({ data })
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
    <>
      <div className={s.header}>
        <Jumbotron
          title="Заполни анкету и получи 1 год лицензии"
          renderText={() =>
            'Нам нужны эти данные для анализа и улучшения нашего продукта.'
          }
        />
      </div>
      <div className={s.wrapper}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={s.inputComponent}>
            <label>Ваше имя</label>
            <input type="text" {...register('name')} />
            {renderErrorMessage('name')}
          </div>
          <div className={s.inputComponent}>
            <label>Мобильный телефон</label>

            <DecoratedPhoneInput
              // @ts-ignore-next-line
              control={control}
              name="mobile"
            />
            {renderErrorMessage('mobile')}
          </div>
          <div className={s.inputComponent}>
            <label>Электронная почта</label>
            <input type="email" {...register('email')} />
            {renderErrorMessage('email')}
          </div>
          <div className={s.inputComponent}>
            <label>Название организации</label>
            <input type="text" {...register('company')} />
            {renderErrorMessage('company')}
          </div>
          <div className={s.inputComponent}>
            <label>Ваша должность</label>
            <input type="text" {...register('job')} />
            {renderErrorMessage('job')}
          </div>

          <button type="submit">Получить лицензию на 1 год</button>

          <Guard width="80%" />
        </form>
      </div>
    </>
  )
}

export default TryFree
