import cn from '../../utils/cn'
import {classnames} from '@bem-react/classnames'
import Section from '../Section/Section'
import SectionTitle from '../SectionTitle/SectionTitle'
import Grid from '../Grid/Grid'
import './Social.css'

const social = cn('social')

const Social = () => {
  const socialItems = [
    {href: 'https://www.instagram.com/13maximegorov/', icon: 'instagram', title: 'Instagram (@13maximegorov)'},
    {href: 'https://t.me/maximegorov13', icon: 'telegram', title: 'Telegram (@maximegorov13)'},
    {href: 'https://github.com/13maximegorov', icon: 'github', title: 'GitHub (13maximegorov)'},
  ]

  return (
    <Section className={social()} id="social">
      <SectionTitle>Социальные сети</SectionTitle>

      <Grid className={social('container')}>
        {socialItems.map((item, index) =>
          <a href={item.href} target="_blank" className={social('link')} key={index}>
            <i className={classnames('bx', `bxl-${item.icon}`, social('icon'))}></i>{item.title}
          </a>
        )}
      </Grid>
    </Section>
  )
}

export default Social
