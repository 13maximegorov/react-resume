import cn from '../../utils/cn'
import Section from '../Section/Section'
import SectionTitle from '../SectionTitle/SectionTitle'
import Grid from '../Grid/Grid'
import './Skills.css'

const skills = cn('skills')

const Skills = () => {
  return (
    <Section className={skills()} id="skills">
      <SectionTitle>Навыки</SectionTitle>

      <Grid className={skills('content')}>
        <ul className={skills('data')}>
          <li className={skills('name')}>
            <span className={skills('circle')}></span>HTML
          </li>
          <li className={skills('name')}>
            <span className={skills('circle')}></span>CSS
          </li>
          <li className={skills('name')}>
            <span className={skills('circle')}></span>JavaScript
          </li>
          <li className={skills('name')}>
            <span className={skills('circle')}></span>TypeScript
          </li>
          <li className={skills('name')}>
            <span className={skills('circle')}></span>Webpack
          </li>
          <li className={skills('name')}>
            <span className={skills('circle')}></span>React
          </li>
          <li className={skills('name')}>
            <span className={skills('circle')}></span>Angular
          </li>
          <li className={skills('name')}>
            <span className={skills('circle')}></span>Vue
          </li>
        </ul>

        <ul className={skills('data')}>
          <li className={skills('name')}>
            <span className={skills('circle')}></span>Node.js
          </li>
          <li className={skills('name')}>
            <span className={skills('circle')}></span>Express
          </li>
          <li className={skills('name')}>
            <span className={skills('circle')}></span>Nest.js
          </li>
          <li className={skills('name')}>
            <span className={skills('circle')}></span>Python
          </li>
          <li className={skills('name')}>
            <span className={skills('circle')}></span>Django
          </li>
          <li className={skills('name')}>
            <span className={skills('circle')}></span>PostgreSQL
          </li>
          <li className={skills('name')}>
            <span className={skills('circle')}></span>MongoDB
          </li>
          <li className={skills('name')}>
            <span className={skills('circle')}></span>Git
          </li>
        </ul>
      </Grid>
    </Section>
  )
}

export default Skills
