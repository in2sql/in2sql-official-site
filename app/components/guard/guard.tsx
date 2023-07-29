import Image from 'next/image'

import s from './guard.module.scss'

export default function Guard({
  width,
  style = {},
}: {
  width?: string | number
  style?: Record<string, string | number>
}) {
  return (
    <div className={s.guard}>
      <div className={s.guardComponent} style={{ width: `${width}`, ...style }}>
        <Image
          src="/images/icon-guard.svg"
          alt="guard"
          width={24}
          height={24}
        />
        <div>Мы гарантируем безопасность и сохранность ваших данных</div>
      </div>
      <div className={s.bottomText}>
        Оставляя свои контактные данные, вы разрешаете нам обратиться к вам за
        обратной
        <br /> связью по нашему продукту.
      </div>
    </div>
  )
}
