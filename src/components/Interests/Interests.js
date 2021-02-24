import cn from '../../utils/cn'
import Section from '../Section/Section'
import SectionTitle from '../SectionTitle/SectionTitle'
import Grid from '../Grid/Grid'
import Airplane from '../../images/emoji/airplane.png'
import Hockey from '../../images/emoji/hockey.png'
import Skier from '../../images/emoji/skier.png'
import Fitness from '../../images/emoji/fitness.png'
import './Interests.css'

const interests = cn('interests')

const Interests = () => {
  const interestsItems = [
    {icon: Airplane, title: 'Путешествие'},
    {icon: Hockey, title: 'Хоккей'},
    {icon: Skier, title: 'Горные лыжи'},
    {icon: Fitness, title: 'Фитнес'},
  ]

  return (
    <Section className={interests()} id="interests">
      <SectionTitle>Интересы</SectionTitle>

      <Grid className={interests('container')}>
        {interestsItems.map((item, index) =>
          <div className={interests('content')} key={index}>
            <img src={item.icon} alt="icon" className={interests('icon')}/>
            <span className={interests('name')}>{item.title}</span>
          </div>
        )}
      </Grid>
    </Section>
  )
}

export default Interests
