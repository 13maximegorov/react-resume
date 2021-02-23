import cn from '../../utils/cn'
import Section from '../Section/Section'
import SectionTitle from '../SectionTitle/SectionTitle'
import Grid from '../Grid/Grid'
import './Education.css'

const education = cn('education')

const Education = () => {
  const educationItems = [
    {id: 1, title: 'Информационная безопасность телекоммуникационных систем', studies: 'Уфимский колледж радиоэлектроники, телекоммуникаций и безопасности', year: '2015 - 2019'},
    {id: 2, title: 'Прикладная инфоматика (Цифровые технологии и защита информации)', studies: 'Уфимский государственный нефтяной технический университет', year: '2019 - 2024'},
  ]

  return (
    <Section className={education()} id="education">
      <SectionTitle>Образование</SectionTitle>

      <Grid className={education('container')}>
        {educationItems.map((item, index) =>
          <div className={education('content')} key={item.id}>
            <div className={education('time')}>
              <span className={education('rounder')}></span>
              {educationItems.length - 1 === index
                ? null
                : <span className={education('line')}></span>
              }
            </div>

            <Grid className={education('data')}>
              <h3 className={education('title')}>{item.title}</h3>
              <span className={education('studies')}>{item.studies}</span>
              <span className={education('year')}>{item.year}</span>
            </Grid>
          </div>
        )}
      </Grid>
    </Section>
  )
}

export default Education