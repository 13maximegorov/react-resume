import cn from '../../utils/cn'
import Section from '../Section/Section'
import SectionTitle from '../SectionTitle/SectionTitle'
import Grid from '../Grid/Grid'
import './Certificate.css'

const certificate = cn('certificate')

const Certificate = () => {
  const certificateItems = [
    {id: 1, title: 'Международная Академия Менеджмента и Технологий INTAMT', location: 'Германия, Дюссельдорф | 2019', description: 'Профессионально-техническое образование - опыт Германии.'},
    {id: 2, title: 'IBB Institut für Berufliche Bildung AG (Институт профессионального образования)', location: 'Германия, Дюссельдорф | 2019', description: 'Веб-дизайн.'},
    {id: 3, title: 'Региональный этап чемпионата профессионального мастерства WorldSkills Russia', location: 'Россия, Республика Башкортостан, Уфа | 2018', description: '2 место в компетенции "Веб-дизайн и разработка".'},
    {id: 4, title: 'Национльный этап чемпионата профессионального мастерства Абилимпикс', location: 'Россия, Москва | 2018', description: '3 место в компетенции "Разработка программного обеспечения".'},
    {id: 5, title: 'Национльный этап чемпионата профессионального мастерства Абилимпикс', location: 'Россия, Москва | 2017', description: '1 место в компетенции "Веб-дизайн".'},
  ]

  return (
    <Section className={certificate()} id="certificates">
      <SectionTitle>Сертификаты и дипломы</SectionTitle>

      <Grid className={certificate('container')}>
        {certificateItems.map(item =>
          <Grid className={certificate('content')} key={item.id}>
            <h3 className={certificate('title')}>{item.title}</h3>
            <span className={certificate('location')}>{item.location}</span>
            <p className={certificate('description')}>{item.description}</p>
          </Grid>
        )}
      </Grid>
    </Section>
  )
}

export default Certificate
