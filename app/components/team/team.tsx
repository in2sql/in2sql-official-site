import Image from 'next/image'

import s from './team.module.scss'

const teamMembers = [
  {
    img: '/images/team/erasyuk.png',
    name: 'Расюк Евгений',
    role: 'Фаундер',
    bio: 'Стаж - 25 лет в управленческом консалтинге',
  },
  {
    img: '/images/team/logachev.png',
    name: 'Дмитрий Логачёв',
    role: 'Фаундер / Руководитель продаж',
    bio: 'Стаж - 15 лет',
  },
  {
    img: '/images/team/mishenina.png',
    name: 'Надежда Мишенина',
    role: 'Ведущий владелец продукта',
    bio: 'Стаж - 15 лет',
  },
  {
    img: '/images/team/trasyuk.png',
    name: 'Татьяна Расюк',
    role: 'Администратор проекта',
    bio: 'Стаж - 15 лет',
  },
  {
    img: '/images/team/tarasenko.png',
    name: 'Кирилл Тарасенко',
    role: 'Тестировщик',
    bio: 'Стаж - 2 года',
  },
  {
    img: '/images/team/kovalev.png',
    name: 'Виталий Ковалев',
    role: 'Программист С#',
    bio: 'Стаж - 15 лет',
  },
  {
    img: '/images/team/anderson.png',
    name: 'Дмитрий Андерсон',
    role: 'Программист JavaScript',
    bio: 'Стаж - 11 лет',
  },
  {
    img: '/images/team/komarov.jpeg',
    name: 'Сергей Комаров',
    role: 'Программист JavaScript',
    bio: 'Стаж - 13 лет',
  },
]

export default function Team() {
  return (
    <>
      <h2 className={s.header}>Наша команда:</h2>
      {teamMembers.map((elem, i) => (
        <div className={s.teamRow} key={i}>
          <Image
            src={elem.img}
            alt={`img ${i}`}
            width={75}
            height={75}
            priority
          />
          <div>
            <p>{elem.name}</p>
            <p>{elem.role}</p>
            <p>{elem.bio}</p>
          </div>
        </div>
      ))}
    </>
  )
}
