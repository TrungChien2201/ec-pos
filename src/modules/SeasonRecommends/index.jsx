import { useRef, useState } from 'react'

import cx from 'classnames'
import { useTranslation } from 'react-i18next'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useSelector } from 'react-redux'

import useSeason from 'hooks/useSeason'
import useWindowSize from 'hooks/useWindowSize'
import IconArrowLeftSlide from 'resourse/svg/IconArrowLeftSlide'
import IconArrowRightSlide from 'resourse/svg/IconArrowRightSlide'

import { BASE_URL } from 'common/constant'
import VideoModal from 'components/modals/VideoModal'
import { useRouter } from 'next/router'

const ConditionRender = () => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const { width } = useWindowSize()
  const router = useRouter()
  const { seasons } = useSeason()
  const { t } = useTranslation()
  const locale = useSelector((state) => state.user.locale)
  const [isShowVideo, setIsShowVideo] = useState(false)
  const [linkVideo, setLinkVideo] = useState('')

  if (seasons?.length === 0) return null

  const onClickSeason = (link) => {
    try {
      if (link) {
        const url = new URL(link)
        if (url.host === window.location.host) {
          setIsShowVideo(false)
          setLinkVideo('')
          router.push(url.pathname.replace(BASE_URL, '') + url.search)
        } else {
          if (url.host.includes('www.youtube.com')) {
            window.open(link, '_blank')
          } else {
            setIsShowVideo(true)
            setLinkVideo(link)
          }
        }
      } else {
        setIsShowVideo(false)
      }
    } catch (error) {
      setIsShowVideo(false)
      console.log('Season recommend', error)
    }
  }

  const handleCloseVideoModal = () => {
    setLinkVideo('')
    setIsShowVideo(false)
  }

  if (seasons.length === 1) {
    return (
      <div
        className='flex justify-center items-center w-full max-w-[1072px] max-h-[378px] bg-cover bg-center flex-col cursor-pointer'
        onClick={() => onClickSeason(seasons[0]?.link)}
      >
        <img
          crossOrigin='anonymous'
          src={seasons[0].image_url}
          alt='banner'
          className={cx(
            'flex-1-auto w-full min-h-[142px] rounded-[6px]',
            seasons[0].description && 'rounded-b-none',
          )}
        />
        {seasons[0].description && (
          <div
            className='flex flex-col justify-center items-center flex-1-auto w-full min-h-[40px] pt-2 px-3 border-[1px] border-t-0 border-solid border-[#ABABAB] text-base xl:text-2xl text-[#514F4E] text-ellipsis text-center rounded-lg rounded-t-none font-spectral font-semibold'
            dangerouslySetInnerHTML={{ __html: seasons[0].description }}
          />
        )}
      </div>
    )
  }

  if (seasons.length === 2 && width > 767) {
    const classNm = (idx) => {
      if (idx === 0) {
        return 'w-auto md:!w-2/3'
      }
      return 'w-[250px] md:w-1/3'
    }
    return (
      <div className='flex items-start gap-6 w-full'>
        {seasons.map((item, idx) => (
          <div
            className={`flex items-center justify-center self-stretch ${classNm(
              idx,
            )} bg-cover bg-center flex-col cursor-pointer`}
            onClick={() => onClickSeason(item.link)}
            key={idx + item.link}
          >
            <img
              crossOrigin='anonymous'
              src={item.image_url}
              alt='banner'
              className={cx('w-full h-[280px] rounded-lg', item.description && 'rounded-b-none')}
            />
            {item.description && (
              <div
                className='flex flex-col justify-center items-center flex-1-auto w-full min-h-[40px] pt-2 px-3 border-[1px] border-t-0 border-solid border-[#ABABAB] text-base xl:text-2xl text-[#514F4E] text-ellipsis text-center rounded-lg rounded-t-none font-spectral font-semibold'
                dangerouslySetInnerHTML={{ __html: t(`season.description${idx + 1}`) }}
              />
            )}
          </div>
        ))}
      </div>
    )
  }
  const NextArrow = (props) => {
    const { onClick } = props
    return (
      <div
        onClick={onClick}
        ref={nextRef}
        className='md:w-[50px] w-8 h-8 md:h-[50px] bg-black/25 hover:bg-white group rounded-full overflow-hidden flex items-center justify-center absolute top-[50%] cursor-pointer right-4 md:right-12 -translate-y-1/2 z-10	'
      >
        <IconArrowRightSlide className='stroke-white group-hover:stroke-[#1E1E1E] w-5 h-5 md:w-7 md:h-7' />
      </div>
    )
  }
  const PreArrow = (props) => {
    const { onClick } = props
    return (
      <div
        onClick={onClick}
        ref={prevRef}
        className='absolute w-8 h-8 md:w-[50px] md:h-[50px] group rounded-full overflow-hidden flex items-center justify-center top-[50%] bg-black/25 hover:bg-white cursor-pointer left-4 md:left-16 -translate-y-1/2 z-10	'
      >
        <IconArrowLeftSlide className='stroke-white group-hover:stroke-[#1E1E1E] w-5 h-5 md:w-7 md:h-7' />
      </div>
    )
  }
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PreArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          centerMode: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          initialSlide: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  }

  return (
    <div className='overflow-hidden'>
      <VideoModal open={isShowVideo} handleCancel={handleCloseVideoModal} linkVideo={linkVideo} />
      <Slider {...settings}>
        {seasons?.map((item, index) => {
          return (
            <div
              key={item.id}
              className='relative px-[6px] flex flex-col h-full overflow-hidden no-select bg-cover bg-center rounded-[6px] cursor-pointer'
              onClick={() => onClickSeason(item.link)}
            >
              <div className='flex flex-col'>
                <img
                  crossOrigin='anonymous'
                  src={item.image_url}
                  alt='banner'
                  className='w-full h-full rounded-t-[6px]'
                />
              </div>
              {item.description && (
                <div
                  className='flex flex-col justify-center items-center flex-1-auto w-full min-h-[40px] pt-2 px-3 border-[1px] border-t-0 border-solid border-[#ABABAB] text-base xl:text-2xl text-[#514F4E] text-ellipsis text-center rounded-lg rounded-t-none font-spectral font-semibold'
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              )}
            </div>
          )
        })}
      </Slider>
    </div>
  )
}

const SeasonRecommends = () => {
  const locale = useSelector((state) => state.user.locale)
  return (
    <section className='rounded-t-3xl md:rounded-none relative z-1 bg-[#ffffff] pt-8 md:pt-14 max-[640px]:mt-[-1rem]'>
      <div className='w-full container container--home mx-auto'>
        <div className='text-center'>
          <p className='font-light lg:text-[38px] lg:leading-[46px] text-[#514F4E] text-[20px] leading-[28px] md:text-[28px] md:leading-[32px]'>
            {locale['season.title']}
          </p>
          <p className='text-[18px] leading-[28px] text-[#514F4E] max-[640px]:leading-[12px] max-[640px]:text-[14px] font-semibold'>
            {locale['season.description']}
          </p>
        </div>
        <div className='h-full mt-4 md:mt-8'>
          <ConditionRender />
        </div>
      </div>
    </section>
  )
}

export default SeasonRecommends
