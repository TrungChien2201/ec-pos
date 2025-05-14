import React, { useEffect, useState } from 'react'

import cx from 'classnames'

import IconArrowLeft from 'resourse/svg/IconArrowLeft'
import IconArrowRight from 'resourse/svg/IconArrowRight'
import IconClose from 'resourse/svg/IconClose'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

const ModalGallery = ({ images, onClose, currentImage, currentPosition }) => {
  const [slideIndex, setSlideIndex] = useState(currentPosition)

  const [image, setImage] = useState(currentImage)

  useEffect(() => {
    setSlideIndex(currentPosition)
    return () => {
      setSlideIndex(0)
    }
  }, [currentPosition])

  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    gap: 20,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,
    arrows: false,
    nextArrow: <IconArrowRight />,
    prevArrow: <IconArrowLeft />,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3.8,
          arrows: true,
        },
      },
    ],
  }

  const handlePrev = async () => {
    if (slideIndex === 1) {
      return
    }
    await setImage(images?.[slideIndex]?.src)
    await setSlideIndex(slideIndex - 1)
  }

  const handleNext = async () => {
    if (slideIndex === images.length) {
      return
    }
    await setImage(images?.[slideIndex]?.src)
    await setSlideIndex(slideIndex + 1)
  }

  return (
    <div className='fixed flex flex-col items-center justify-center z-10 w-screen h-screen top-0 left-0 right-0 bottom-0 bg-black modal-gallery'>
      <IconClose className='absolute right-[15px] top-[15px] cursor-pointer' onClick={onClose} />
      <div className='relative mx-auto text-center my-[30px]'>
        <div>
          <IconArrowLeft
            className={cx('prev-btn-slider mr-[50px]', { disable: slideIndex === 1 })}
            onClick={handlePrev}
          />
          <img
            className='w-[500px] aspect-square max-w-[100%] max object-cover'
            src={images?.[slideIndex - 1]?.src}
            alt='product image'
          />
          <IconArrowRight
            className={cx('prev-btn-slider ml-[50px]', {
              disable: slideIndex === images.length,
            })}
            onClick={handleNext}
          />
        </div>
        <span className='absolute bottom-[10px] right-[10px] bg-[#00000040] px-[15px] py-[5px] text-white rounded-[20px] lg:right-[110px]'>
          {`${slideIndex} / ${images?.length}`}
        </span>
      </div>

      <div className='w-[450px] max-w-[100%] mx-auto relative'>
        <Slider {...settings}>
          {images?.map((item, index) => (
            <img
              className={cx(
                'aspect-square image-thumbnail w-[100px] h-[100px] object-cover cursor-pointer',
                {
                  active: slideIndex - 1 === index,
                },
              )}
              key={index}
              src={item.src}
              onClick={() => {
                setImage(item.src)
                setSlideIndex(index + 1)
              }}
            />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default ModalGallery
