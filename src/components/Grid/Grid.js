import cn from '../../utils/cn'
import {classnames} from '@bem-react/classnames'
import PropTypes from 'prop-types'
import './Grid.css'

const grid = cn('grid')

const Grid = ({children, className}) => {
  return <div className={classnames(className, grid())}>{children}</div>
}

Grid.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default Grid
