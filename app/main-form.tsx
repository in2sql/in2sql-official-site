'use client'

import { useForm } from 'react-hook-form'
import s from './main-form.module.scss'
import Guard from './components/guard/guard'
import clsx from 'clsx'

const MainForm = () => {
  const { handleSubmit, register } = useForm({
    defaultValues: {
      mobile: '',
      email: '',
    },
  })
  const onSubmit = (data) => console.log({ submitedData: data })

  return (
    <form className={s.mainForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={s.title}>
        Узнай силу автоматизации баз <br /> данных
      </div>

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
        <input {...register('email', { required: true })} />
      </div>

      <div className={s.controlls}>
        <div className={clsx(s.button, s.outline)}>
          Получить <br /> лицензию 30 дней
        </div>
        <div className={clsx(s.button)}>
          Получить <br /> лицензию на 1 год
        </div>
      </div>

      <Guard
        style={{
          width: '100%',
        }}
      />
    </form>
  )
}

export default MainForm
