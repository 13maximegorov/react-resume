import cn from '../../utils/cn'
import {classnames} from '@bem-react/classnames'
import PropTypes from 'prop-types'
import './SectionTitle.css'

const sectionTitle = cn('section-title')

const SectionTitle = ({children, className, tag}) => {
  const Tag = `${tag}`
  return <Tag className={classnames(sectionTitle(), className)}>{children}</Tag>
}

SectionTitle.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  tag: PropTypes.string
}

SectionTitle.defaultProps = {
  tag: 'h2'
}

export default SectionTitle
