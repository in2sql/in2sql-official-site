import Guard from '../components/guard/guard'
import Header from '../components/header/header'
import s from './try-free.module.scss'

const TryFree = () => {
  return (
    <>
      <Header
        title="Заполни анкету и получи 1 год лицензии"
        renderText={() =>
          'Нам нужны эти данные для анализа и улучшения нашего продукта.'
        }
        classNames={[s.header]}
      />
      <div className={s.wrapper}>
        <form>
          <div className={s.inputComponent}>
            <label>Электронная почта</label>
            <input />
          </div>
          <div className={s.inputComponent}>
            <label>Мобильный телефон</label>
            <div style={{ display: 'flex' }}>
              <span className={s.mobile}>{'+7 ('}</span>
              <input />
            </div>
          </div>
          <div className={s.inputComponent}>
            <label>Электронная почта</label>
            <input />
          </div>
          <div className={s.inputComponent}>
            <label>Название организации</label>
            <input />
          </div>
          <div className={s.inputComponent}>
            <label>Ваша должность</label>
            <input />
          </div>

          <button>Получить лицензию на 1 год</button>
          <Guard width={982} />
        </form>
      </div>
    </>
  )
}

export default TryFree
