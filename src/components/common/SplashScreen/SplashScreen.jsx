import { useEffect } from 'react'

import { m } from 'framer-motion'

import * as CONSTANT from 'common/constant'

const SplashScreen = (props) => {
  const { duration, logo, setIsAnimationDone } = props

  useEffect(() => {
    const animationTimer = setTimeout(() => {
      setIsAnimationDone(true)
    }, CONSTANT.LANDING_ANIMATION_DURATION * 1000)

    return () => clearTimeout(animationTimer)
  }, [setIsAnimationDone])

  return (
    <m.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: [0, 1], scale: 1 }}
      transition={{
        duration,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <img
        src={logo}
        alt='ロゴ'
        className='mx-auto rounded max-w-full'
        style={{ maxHeight: '150px' }}
      />
    </m.div>
  )
}

export default SplashScreen
