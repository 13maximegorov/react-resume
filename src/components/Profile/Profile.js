import cn from '../../utils/cn'
import Section from '../Section/Section'
import SectionTitle from '../SectionTitle/SectionTitle'
import './Profile.css'

const profile = cn('profile')

const Profile = () => {
  return (
    <Section className={profile()} id="profile">
      <SectionTitle>Профиль</SectionTitle>

      <p className={profile('description')}>
        Я являюсь Frontend и Backend разработчиком, или кратко - Fullstack. Мной были разработаны различные проекты - от обычных сайтов до корпоративных веб-приложений. Опыт разработки, как в одиночку, так и в команде. Также являюсь членом Национальной сборной Российской Федерации Абилимпикс в компетенции "Веб-дизайн".
      </p>
    </Section>
  )
}

export default Profile
