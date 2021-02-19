import cn from '../../utils/cn'
import {classnames} from '@bem-react/classnames'

const container = cn('container')

const Container = ({children, className}) => {
  return <div className={classnames(container(), className)}>{children}</div>
}

export default Container
