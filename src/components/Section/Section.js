import cn from '../../utils/cn'
import {classnames} from '@bem-react/classnames'
import PropTypes from 'prop-types'
import './Section.css'

const section = cn('section')

const Section = ({children, className, id}) => {
  return <div className={classnames(section(), className)} id={id}>{children}</div>
}

Section.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default Section
