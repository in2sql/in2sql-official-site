import Image from 'next/image'
import Header from './components/header/header'
import Teaser from './components/teaser/teaser'
import Accordion from './components/accordion/accordion'
import s from './page.module.scss'

const headerData = {
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

export default function Home() {
  return (
    <div className={s.page}>
      <Header
        title={headerData.title}
        renderText={() => (
          <>
            {headerData.text.map((item) => (
              <div key={item}>{item}</div>
            ))}
          </>
        )}
        style={{
          background: 'black',
          paddingBottom: '3rem',
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

        <div className={s.faqContainer}>
          <div className={s.faq_title}>Часто задаваемые вопросы</div>
          <Accordion items={faqItems} />
        </div>

        <Teaser />
      </div>
    </div>
  )
}
