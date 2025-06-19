import { Layout } from 'antd'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import useSeason from 'hooks/useSeason'

import { APP_MEDIA_URL } from 'common/constant'

// Use string path for the image
const DefaultBG = 'images/bg-homepage-1.png'

import Topbar from '../Topbar/Topbar'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const { Header } = Layout

const HomeHeader = ({ setIsOpenSideBar, isHomePage }) => {
  const { loading, banners } = useSeason()

  const handleClickToBanner = () => {
    window.open(
      'https://inline.app/booking/-NaZib6nlNaBQQUg90NR:inline-live-3/-NaZibJ37pXzzBECLweJ?language=ja',
      '_blank',
    )
  }

  return (
    <Header className='p-0 shadow bg-primary h-auto z-0'>
      <div className='h-full w-full relative'>
        <Swiper
          loop
          autoplay={{
            delay: 5000,
          }}
          modules={[Autoplay]}
          key={loading}
        >
          {banners?.length > 0
            ? banners.map((item) => (
                <SwiperSlide key={item.id}>
                  <img
                    crossOrigin='anonymous'
                    alt='wine'
                    src={APP_MEDIA_URL + item.image_url}
                    className='w-full h-auto cursor-pointer'
                    onClick={handleClickToBanner}
                  />
                </SwiperSlide>
              ))
            : !loading && (
                <SwiperSlide>
                  <img
                    alt='wine'
                    src={DefaultBG}
                    className='w-full h-auto cursor-pointer'
                    onClick={handleClickToBanner}
                  />
                </SwiperSlide>
              )}
        </Swiper>
        <div className='absolute top-0 left-0 w-full z-10'>
          <Topbar setIsOpenSideBar={setIsOpenSideBar} isHomePage={isHomePage} txtColor='white' />
        </div>
      </div>
    </Header>
  )
}

export default HomeHeader
