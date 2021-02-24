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
    {id: 1, icon: Airplane, title: 'Путешествие'},
    {id: 2, icon: Hockey, title: 'Хоккей'},
    {id: 3, icon: Skier, title: 'Горные лыжи'},
    {id: 4, icon: Fitness, title: 'Фитнес'},
  ]

  return (
    <Section className={interests()} id="interests">
      <SectionTitle>Интересы</SectionTitle>

      <Grid className={interests('container')}>
        {interestsItems.map(item =>
          <div className={interests('content')} key={item.key}>
            <img src={item.icon} alt="icon" className={interests('icon')}/>
            <span className={interests('name')}>{item.title}</span>
          </div>
        )}
      </Grid>
    </Section>
  )
}

export default Interests
