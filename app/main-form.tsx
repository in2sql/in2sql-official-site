'use client'

import { useForm } from 'react-hook-form'
import s from './main-form.module.scss'
import Guard from './components/guard/guard'
import clsx from 'clsx'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const MainForm = () => {
  const { handleSubmit, register } = useForm({
    defaultValues: {
      mobile: '+7(',
      email: '',
    },
  })

  const [submitData, setSubmitData] = useState({})

  const onSubmit = (data: { mobile: string; email: string }) => {
    console.log({ submitedData: data })
    setSubmitData(data)
  }

  return (
    <form className={s.mainForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.title}>
        {!Object.keys(submitData).length ? (
          <>
            Узнай силу автоматизации баз <br /> данных
          </>
        ) : (
          'Спасибо за регистрацию!'
        )}
      </div>

      {!Object.keys(submitData).length ? (
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
              inputMode="numeric"
              autoComplete="cc-number"
              {...register('mobile', { required: true })}
              name="mobile"
              id="mobile"
            />
          </div>

          <div className={s.input}>
            <label>Электронная почта</label>
            <input type="email" {...register('email', { required: true })} />
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
            onClick={() => setSubmitData({})}
          />
          <div>
            Используйте
            <b> blin4ik@yundex.com </b>в качестве ключа для лицензии. Плагин
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
