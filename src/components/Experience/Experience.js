import cn from '../../utils/cn'
import Section from '../Section/Section'
import SectionTitle from '../SectionTitle/SectionTitle'
import Grid from '../Grid/Grid'
import './Experience.css'

const experience = cn('experience')

const Experience = () => {
  const experienceItems = [
    {title: 'Оператор технической поддержки', company: 'C 2017 по 2019 | Уфимский колледж радиоэлектроники, телекоммуникаций и безопасности', description: 'Первичная помощь по установке, настройке, устранению неисправностей и сбоев оборудования и ПО по заявкам пользователей, перенаправление заявок на линии технической поддержки.'},
    {title: 'Техник', company: 'C 2019 по 2020 | Отдел системно-технического обеспечения и защиты информации БашГУ', description: 'Обслуживание, обеспечение работы и управление ресурсами сети передачи данных университета, включая: технические средства доступа к Интернет, включая беспроводные системы; каналы передачи данных и доступа к Интернет. Монтаж сетей передачи данных. Решение технических вопросов доступа к сети передачи данных. Локализация и устранение сбоев в работе сети. Обеспечение работоспособности сетевого оборудования. Контроль соблюдения правил эксплуатации сети передачи данных и сетевого оборудования университета.'},
    {title: 'Программист', company: 'C 2020 по 2021 | Отдел развития информационных технологий БашГУ', description: 'Разработка и развитие концепции информатизации университета. Разработка корпоративного программного обеспечения. Повышение эффективности деятельности университета посредством оптимизации информационных технологий и внедрения новых информационных технологий. Разработка регламентирующей документации по эксплуатации программного обеспечения и оборудования. Составление требований и технических заданий на реализацию ИТ-проектов. Повышение уровня компьютерной грамотности сотрудников, студентов университета и сторонних слушателей.'},
  ]

  return (
    <Section className={experience()} id="experience">
      <SectionTitle>Опыт работы</SectionTitle>

      <Grid className={experience('container')}>
        {experienceItems.map((item, index) =>
          <div className={experience('content')} key={index}>
            <div className={experience('time')}>
              <span className={experience('rounder')}></span>
              {experienceItems.length - 1 === index
                ? null
                : <span className={experience('line')}></span>
              }
            </div>

            <Grid className={experience('data')}>
              <h3 className={experience('title')}>{item.title}</h3>
              <span className={experience('company')}>{item.company}</span>
              <p className={experience('discription')}>{item.description}</p>
            </Grid>
          </div>
        )}
      </Grid>
    </Section>
  )
}

export default Experience
