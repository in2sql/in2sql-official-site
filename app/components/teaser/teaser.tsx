import clsx from 'clsx'
import s from './teaser.module.scss'
import Image from 'next/image'
import Button from '../button/button'

const cards = [
  {
    id: 1,
    title: '30 дней',
    label: 'Создавай свои отчёты',
  },
  {
    id: 2,
    title: '0 ₽',
    label: 'акция до декабря 2023',
  },
  {
    id: 3,
    title: '',
    label: '',
  },
]

const Teaser = () => {
  const renderCard = ({
    card,
  }: {
    card: { id: number; title: string; label: string }
  }) => (
    <div className={s.card} key={card.id}>
      <div className={s.card_title}>{card.title}</div>
      <div className={s.card_label}>{card.label}</div>
    </div>
  )

  return (
    <div className={clsx(s.teaser)}>
      <div className={s.imageContainer}>
        <Image
          src="/images/teaser.svg"
          alt="Teaser"
          width={244}
          height={204}
          priority
        />
      </div>

      <div className={s.content}>
        <div className={s.header}>
          <div className={s.header_wrapper}>
            <div className={s.header_title}>
              <span>Попробуй in2sql прямо сейчас</span>
            </div>
            <div className={s.header_label}>
              Клиент для интеграции excel c внешними источниками данных.
            </div>
          </div>
          <div className={s.smallImageContainer}>
            <Image
              src="/images/teaser.svg"
              alt="Teaser"
              width={86}
              height={72}
              priority
            />
          </div>
        </div>
        <div className={s.cards}>
          {cards.map((card) => renderCard({ card }))}
        </div>

        <Button
          outline
          style={{
            border: '1px solid #B6BCC3',
            color: '#000',
          }}
        >
          Попробовать бесплатно
        </Button>
      </div>
    </div>
  )
}

export default Teaser
