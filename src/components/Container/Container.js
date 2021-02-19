import cn from '../../utils/cn'
import {classnames} from '@bem-react/classnames'
import PropTypes from 'prop-types'
import './Container.css'

const container = cn('container')

const Container = ({children, className}) => {
  return <div className={classnames(container(), className)}>{children}</div>
}

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default Container
