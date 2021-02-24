import cn from '../../utils/cn'
import Section from '../Section/Section'
import SectionTitle from '../SectionTitle/SectionTitle'
import './Languages.css'

const languages = cn('languages')

const Languages = () => {
  return (
    <Section className={languages()} id="languages">
      <SectionTitle>Владение языками</SectionTitle>

      <div className={languages('container')}>
        <ul className={languages('content')}>
          <li className={languages('name')}>
            <span className={languages('circle')}></span> Русский
          </li>
          <li className={languages('name')}>
            <span className={languages('circle')}></span> Базовый Английский
          </li>
        </ul>
      </div>
    </Section>
  )
}

export default Languages
