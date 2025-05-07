import { m } from 'framer-motion'

const BaseV = {
  hidden: {
    opacity: 1,
  },
  enter: {
    opacity: 1,
  },
  exit: {
    opacity: 1,
  },
}

const BaseAnimation = (props) => {
  const { children, className, style } = props

  return (
    <m.div
      initial='hidden'
      animate='enter'
      exit='exit'
      variants={BaseV}
      transition={{ type: 'linear' }}
      className={className}
      style={style}
    >
      {children}
    </m.div>
  )
}

export default BaseAnimation
