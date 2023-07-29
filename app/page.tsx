import Image from 'next/image'
import Jumbotron from './components/jumbotron/jumbotron'
import Teaser from './components/teaser/teaser'
import Accordion from './components/accordion/accordion'
import s from './page.module.scss'
import MainForm from './components/main-form/main-form'
import Card from './components/card/card'
import clsx from 'clsx'

const jumbotronData = {
  title: 'Excel перестал быть просто таблицей',
  text: [
    'Инструмент анализа данных',
    'Управление справочниками',
    'Сбор регуляторной отчетности',
    'CPM/EPM приложение',
  ],
}

const barItems = [
  {
    id: 1,
    title: 'Ресурсы',
    text: 'Уменьшение потребности в IT услугах для бизнеса',
  },
  {
    id: 2,
    title: 'Скорость',
    text: 'Ускорение процессов консолидации данных',
  },
  {
    id: 3,
    title: 'BI',
    text: 'Элементы self service BI',
  },
  {
    id: 4,
    title: 'Безопасность',
    text: 'Повышение прозрачности',
  },
]

const faqItems = [
  {
    id: 1,
    title: 'Как начать работать с in2sql?',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, quas omnis odio accusamus libero blanditiis ex nulla nihil consectetur nemo necessitatibus quo delectus fugiat, tempora rerum asperiores, harum non molestias modi eligendi eius magnam nesciunt laborum perspiciatis. Nesciunt, debitis sit. Et velit quas iste blanditiis, animi numquam perferendis temporibus amet libero molestias similique, ut nisi porro unde a magnam sit nesciunt itaque! Iure ut provident cumque fugiat mollitia. Dolores harum debitis quia consequatur incidunt soluta vitae ab? Pariatur et quae vel mollitia! Saepe nostrum, hic consequatur minima voluptatem reiciendis repellat? Non sequi officia maiores nulla eaque possimus minus eum inventore!',
  },
  {
    id: 2,
    title: 'Нужны ли мне навыки программирования дла работы с in2sql?',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, quas omnis odio accusamus libero blanditiis ex nulla nihil consectetur nemo necessitatibus quo delectus fugiat, tempora rerum asperiores, harum non molestias modi eligendi eius magnam nesciunt laborum perspiciatis. Nesciunt, debitis sit. Et velit quas iste blanditiis, animi numquam perferendis temporibus amet libero molestias similique, ut nisi porro unde a magnam sit nesciunt itaque! Iure ut provident cumque fugiat mollitia. Dolores harum debitis quia consequatur incidunt soluta vitae ab? Pariatur et quae vel mollitia! Saepe nostrum, hic consequatur minima voluptatem reiciendis repellat? Non sequi officia maiores nulla eaque possimus minus eum inventore!',
  },
  {
    id: 3,
    title: 'С чем можно интегрировать in2sql?',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, quas omnis odio accusamus libero blanditiis ex nulla nihil consectetur nemo necessitatibus quo delectus fugiat, tempora rerum asperiores, harum non molestias modi eligendi eius magnam nesciunt laborum perspiciatis. Nesciunt, debitis sit. Et velit quas iste blanditiis, animi numquam perferendis temporibus amet libero molestias similique, ut nisi porro unde a magnam sit nesciunt itaque! Iure ut provident cumque fugiat mollitia. Dolores harum debitis quia consequatur incidunt soluta vitae ab? Pariatur et quae vel mollitia! Saepe nostrum, hic consequatur minima voluptatem reiciendis repellat? Non sequi officia maiores nulla eaque possimus minus eum inventore!',
  },
]

const whatIsIn2sql = {
  title: 'Что такое in2sql?',
  cards: [
    {
      id: 0,
      title: 'Plugin для Excel',
      description:
        'Установщик, который расширяет программный код Excel или web приложение которое интегрируется в Excel.',
      img: {
        path: '/images/developer.png',
        size: {
          w: 96,
          h: 96,
        },
      },
    },
    {
      id: 1,
      title: 'Простое совместное использование',
      description:
        'Упрощение совместной обработки данных для бизнес пользователей data. Финансисты, Маркетинг и Комплаенс будут иметь удобный доступ к данным.',
      img: {
        path: '/images/code.png',
        size: {
          w: 96,
          h: 96,
        },
      },
    },
    {
      id: 2,
      title: 'Сокращение инструментов для редактирования данных',
      description: 'Избавим вас от MDM, FDQM, CPM, и ETL процессов.',
      img: {
        path: '/images/web.png',
        size: {
          w: 96,
          h: 96,
        },
      },
    },
    {
      id: 3,
      title: 'Технологичное решение',
      description: `Плагины в Excel (Р7/Мой Офис/OpenOffice ) для интеграции c базами данных и серверами приложений (C#/JavaScript).
Собственный сервер приложений (Python/Pandas/PySpark) для процессинга расчетов.`,
      img: {
        path: '/images/settings.png',
        size: {
          w: 96,
          h: 96,
        },
      },
    },
  ],
}

export default function Home() {
  return (
    <div className={s.page}>
      <Jumbotron
        title={jumbotronData.title}
        renderText={() => (
          <>
            {jumbotronData.text.map((item) => (
              <div key={item}>{item}</div>
            ))}
          </>
        )}
        style={{
          backgroundColor: 'black',
          paddingBottom: '6rem',
        }}
      />

      <div className={s.content}>
        <div className={s.bars}>
          {barItems.map((bar) => (
            <div key={bar.id} className={s.bar}>
              <div className={s.bar_title}>{bar.title}</div>
              <div className={s.bar_text}>{bar.text}</div>
            </div>
          ))}
        </div>

        <div className={clsx(s.section, s.whatIs)}>
          <div className={s.whatIs_title}>{whatIsIn2sql.title}</div>
          <div className={s.whatIs_cards}>
            {whatIsIn2sql.cards.map((card) => (
              <Card
                key={card.id}
                title={card.title}
                description={card.description}
                image={card.img}
              />
            ))}
          </div>
        </div>

        <div className={s.section}>
          <MainForm />
        </div>

        <div className={clsx(s.section, s.faq_container)}>
          <div className={s.faq_title}>Часто задаваемые вопросы</div>
          {/* <Accordion items={faqItems} /> */}
        </div>

        <div className={s.section}>{/* <Teaser /> */}</div>
      </div>
    </div>
  )
}
