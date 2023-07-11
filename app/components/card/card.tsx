'use client'
import styles from './card.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Card = () => {
  return (
    <div className={styles.main}>
      <h2 className={styles.title}>Что такое in2sql?</h2>
      <section className={styles.sector}>
        <div className={styles.block}>
          <div className={styles.inline}>
            <h2 className={styles.headers}>Plugin для Excel</h2>
            <Image
              src="/images/card-developer.png"
              alt="developer"
              width={96}
              height={100}
              priority
            />
          </div>
          <p>
            Установщик, который расширяет программный код Excel или web
            приложение которое интегрируется в Excel.
          </p>
        </div>
        <div className={styles.block}>
          <div className={styles.inline}>
            <h2 className={styles.headers}>Простое совместное пользование</h2>
            <Image
              src="/images/card-piece-of-code.png"
              alt="piece of code"
              width={96}
              height={89}
              priority
            />
          </div>
          <p>
            Упрощение совместной обработки данных для бизнес пользователей data.
            Финансисты, Маркетинг и Комплаенс будут иметь удобный доступ к
            данным.
          </p>
        </div>
        <div className={styles.block}>
          <div className={styles.inline}>
            <h2 className={styles.headers}>
              Сокращение инструментов для редактирования данных
            </h2>
            <Image
              src="/images/card-web-statistic.png"
              alt="piece of code"
              width={96}
              height={96}
              priority
            />
          </div>
          <p>Избавим вас от MDM, FDQM, CPM, и ETL процессов.</p>
        </div>
        <div className={styles.block}>
          <div className={styles.inline}>
            <h2 className={styles.headers}>Технологичное решение</h2>
            <Image
              src="/images/card-data-base.png"
              alt="data-base"
              width={96}
              height={96}
              priority
            />
          </div>
          <p>
            Плагины в Excel (Р7/Мой Офис/OpenOffice ) для интеграции c базами
            данных и серверами приложений (C#/JavaScript). Собственный сервер
            приложений (Python/Pandas/PySpark) для процессинга расчетов.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Card
