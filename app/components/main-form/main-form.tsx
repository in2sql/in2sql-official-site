'use client'

import { useForm } from 'react-hook-form'
import s from './main-form.module.scss'
import Guard from '../guard/guard'
import clsx from 'clsx'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { errorsMessages } from '@/app/constants'

type SubmitData = {
  mobile: string
  email: string
}

const schema = yup
  .object({
    mobile: yup.string().required(),
    email: yup.string().required(),
  })
  .required()

const MainForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const initialState: SubmitData = {
    mobile: '',
    email: '',
  }
  const [submitData, setSubmitData] = useState<SubmitData>(initialState)

  const onSubmit = (data: SubmitData) => {
    console.log({ submitedData: data })
    setSubmitData(data)
  }

  return (
    <form className={s.mainForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.title}>
        {!submitData.email.length ? (
          <>
            Узнай силу автоматизации баз <br /> данных
          </>
        ) : (
          'Спасибо за регистрацию!'
        )}
      </div>

      {!submitData.email.length ? (
        <>
          <div className={s.steps}>
            <div className={s.circles}>
              <div className={s.circle}>1</div>
              <div className={s.line} />
              <div className={s.circle}>2</div>
              <div className={s.line} />
              <div className={s.circle}>3</div>
            </div>

            <div className={s.labels}>
              <div className={s.label}>
                Успешное
                <br />
                использование
              </div>
              <div
                className={s.label}
                style={{
                  transform: 'translateX(-17px)',
                }}
              >
                Бесплатный
                <br />
                доступ
              </div>
              <div className={s.label}>Анкета</div>
            </div>
          </div>

          <div className={s.input}>
            <label htmlFor="mobile">Мобильный телефон</label>
            <input
              placeholder="+7(905) - 634 - 44 - 67"
              type="tel"
              {...register('mobile')}
            />
            <p style={{ color: 'red' }}>
              {errors.mobile?.message && errorsMessages.mobile}
            </p>
          </div>

          <div className={s.input}>
            <label>Электронная почта</label>
            <input type="email" {...register('email')} />
            <p style={{ color: 'red' }}>
              {errors.email?.message && errorsMessages.email}
            </p>
          </div>

          <div className={s.controlls}>
            <button type="submit" className={clsx(s.button, s.outline)}>
              Получить <br /> лицензию 30 дней
            </button>
            <div className={clsx(s.button)}>
              <Link href={'/try-free'}>
                Получить <br /> лицензию на 1 год
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <Image
            src="/images/checkmark.png"
            alt="icon telegram"
            width={100}
            height={100}
            priority
            onClick={(e) => {
              setSubmitData(initialState)
              reset()
            }}
          />
          <div>
            Используйте
            <b> {submitData.email} </b>в качестве ключа для лицензии. Плагин
            можно скачать тут.
          </div>
        </>
      )}

      <Guard
        style={{
          width: '100%',
        }}
      />
    </form>
  )
}

export default MainForm
