'use client'
import { Roboto } from 'next/font/google'
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
import clsx from 'clsx'
import Team from '../components/team/team'

type SubmitData = {
  name: string
  email: string
  appeal: string
}

const inter = Roboto({ subsets: ['cyrillic'], weight: '400' })

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

      <div className={`${s.main} ${clsx(inter.className)}`}>
        <div className={s.row1}>
          <div className={s.left}>
            <div>
              <span style={{ color: '#004077' }}>Тел: </span>+7 (903) 157-64-42
            </div>
            <br />
            <div>
              <span style={{ color: '#004077' }}>Почта: </span>
              er@exceldb.pro
            </div>
            <br /> 142181, Московская область, город Подольск, деревня Бережки,
            тер. Каскад Парк, д. 43, оф. 3
            <br />
            <br /> ИНН 5074066799
            <br /> ОГРН 1205000100997
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d9066.216032739287!2d37.58841528653955!3d55.38323906719255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zMTQyMTgxLCDQnNC-0YHQutC-0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0LPQvtGA0L7QtCDQn9C-0LTQvtC70YzRgdC6LCDQtNC10YDQtdCy0L3RjyDQkdC10YDQtdC20LrQuCwg0YLQtdGALiDQmtCw0YHQutCw0LQg0J_QsNGA0LosINC0LiA0Mywg0LrQsi4gMw!5e0!3m2!1sru!2sru!4v1691763637528!5m2!1sru!2sru"
              width="375"
              height="420"
              style={{ border: '0' }}
              loading="lazy"
            ></iframe>
          </div>
          <div className={s.teamContainer}>
            <Team />
          </div>
        </div>
        <div className={s.row2}>
          <Teaser />
        </div>
      </div>
    </div>
  )
}

export default Contacts
