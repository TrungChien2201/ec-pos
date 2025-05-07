import { Typography } from 'antd'
import cx from 'classnames'

import SlickSlider from 'components/SlickSlider'

import ProductItemSlider from './ProductItemSlider'

const { Title } = Typography

const RecommendForYou = ({ className, productRecommends, title, isShowDesription = true }) => {
  return (
    <div
      className={cx(
        'w-full mt-6 lg:mt-10 py-[16px] lg:py-[36px] bg-white px-[8px] md:px-[30px] lg:px-0',
        [className],
      )}
    >
      <div className='lg:container lg:mx-auto'>
        <div className='pb-[24px] lg:pb-[32px] lg:flex lg:items-center lg:gap-[8px]'>
          <Title level={3} className='mb-0 text-black font-medium text-[20px] leading-[28px]'>
            {title || 'Recommended Products For You'}
          </Title>
          {isShowDesription && (
            <p className='mb-0 text-[#0000008c] font-medium text-[14px] leading-[22px] lg:text-[20px] lg:leading-[28px]'>
              あなたにおすすめ
            </p>
          )}
        </div>
        <div className='px-[5px] lg:p-0'>
          {productRecommends && (
            <SlickSlider>
              {productRecommends.map((product) => (
                <ProductItemSlider product={product} />
              ))}
            </SlickSlider>
          )}
        </div>
      </div>
    </div>
  )
}

export default RecommendForYou
