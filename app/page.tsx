import Image from 'next/image'
import Header from './components/header/header'
import Teaser from './components/teaser/teaser'
import Card from './components/card/card'
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
        }}
      />

      <div className={s.content}>
        <div className={s.faqContainer}>
          <div className={s.faq_title}>Часто задаваемые вопросы</div>
          <Accordion items={faqItems} />
        </div>

        <Card />

        <Teaser />
      </div>
    </div>
  )
}
