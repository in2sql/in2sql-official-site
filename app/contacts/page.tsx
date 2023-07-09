import Teaser from '../components/teaser/teaser'
import Image from 'next/image'

import s from './contacts.module.scss'

const Contacts = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.subTitle}>Контактные данные</div>

      <div className={s.main}>
        <div className={s.row1}>
          <div className={s.left}>
            <div>
              <span style={{ color: '#004077' }}>Тел: </span>+7 (915) 777-00-12
            </div>
            <br />
            <div>
              <span style={{ color: '#004077' }}>Почта: </span>
              dom-rsk2014@yandex.ru
            </div>
            <br /> 141310, Московская область, г. Сергиев Посад,ул. Осипенко д.
            6<br /> оф. Реквизиты Строительная компания ООО «РСК»
            <br />
            <br /> ИНН 3301032210
            <br /> ОГРН 1143339000485
            <Image
              src="/images/map.svg"
              alt="google map"
              style={{
                marginTop: '30px',
              }}
              width={482}
              height={420}
            />
          </div>
          <form className={s.right}>
            <div className={s.inputComponent}>
              <label>Электронная почта</label>
              <input />
            </div>
            <div className={s.inputComponent}>
              <label>ФИО</label>
              <input />
            </div>
            <div className={s.textAreaComponent}>
              <label>Обращение</label>
              <textarea rows={5}></textarea>
            </div>
            <button type="submit">Отправить</button>

            <div className={s.guardComponent}>
              <Image
                src="/images/icon-guard.svg"
                alt="guard"
                width={24}
                height={24}
              />
              <div>Мы гарантируем безопасность и сохранность ваших данных</div>
            </div>

            <div className={s.bottomText}>
              Оставляя свои контактные данные, вы разрешаете нам обратиться к
              вам за обратной связью по нашему продукту.
            </div>
          </form>
        </div>
        <div className={s.row2}>
          <Teaser />
        </div>
      </div>
    </div>
  )
}

export default Contacts
