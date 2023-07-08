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
    </>
  )
}

export default TryFree
