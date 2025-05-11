import React, { useEffect, useState } from 'react'

import Slider from 'react-slick'

import IconArrowLeft from 'resourse/svg/IconArrowLeft'
import IconArrowRight from 'resourse/svg/IconArrowRight'

import styles from './styles.module.scss'
// These global styles need to be imported in _app.js
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

const SlickSlider = ({ children }) => {
  const [slideIndex, setSlideIndex] = useState(0)

  useEffect(() => {
    return () => {
      setSlideIndex(0)
    }
  }, [])

  const renderArrows = () => {
    return (
      <div className='slider-arrow'>
        <span className='arrow-btn prev' onClick={() => this.slider.slickPrev()}>
          <IconArrowLeft />
        </span>
        <span className='arrow-btn next' onClick={() => this.slider.slickNext()}>
          <IconArrowRight />
        </span>
      </div>
    )
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    gap: 20,
    slidesToShow: 6.1,
    slidesToScroll: 1,
    centerMode: false,
    nextArrow: <IconArrowRight />,
    prevArrow: <IconArrowLeft />,
    beforeChange: (current, next) => setSlideIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6.1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4.1,
        },
      },
      {
        gap: 10,
        breakpoint: 480,
        settings: {
          slidesToShow: 1.8,
        },
      },
    ],
  }

  return (
    <div>
      {renderArrows}
      <Slider {...settings}>{children}</Slider>
    </div>
  )
}

export default SlickSlider
