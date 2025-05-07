import { useSelector } from 'react-redux'

import { Typography } from 'antd'
import cx from 'classnames'
import { useRouter } from 'next/router'
import { NumericFormat } from 'react-number-format'

const { Title } = Typography

const ProductItem = ({ product }) => {
  const router = useRouter()
  const locale = useSelector((state) => state.user.locale)

  const onNagivate = () => {
    router.push(`/products/${product?.id.split('Product/')?.[1]}`)
  }

  return (
    <div
      className={cx(
        'bg-white flex items-center relative border-solid border-[0.3px] border-gray-200 rounded-[8px] ml-[30px] lg:w-[510px]',
      )}
    >
      <img
        className={cx(
          'h-[100px] aspect-square border-solid border-0 border-r border-gray-200 p-[15px]',
          product.title.includes('リボン') ? 'object-contain' : 'object-cover',
        )}
        cursor-pointer
        src={product.title.includes('リボン') ? 'images/ribbon.png' : 'images/gift.png'}
        onClick={onNagivate}
      />
      <div className='px-[15px] flex-1'>
        <Title
          level={3}
          className='font-medium text-left text-[14px] leading-[22px] lg:text-[16px] lg:leading-[24px] text-black two-line mb-[10px] cursor-pointer min-h-[48px]'
          onClick={onNagivate}
        >
          {product?.title}
        </Title>
        <div className='flex items-center justify-between'>
          <NumericFormat
            className='text-[14px] leading-[22px] lg:text-[16px] lg:leading-[24px] text-[#9C8C6A] font-medium mb-0'
            displayType='text'
            value={Math.round(product?.price.amount)}
            prefix='¥ '
            thousandSeparator=','
            decimalScale={3}
          />
          <p className='text-[12px] leading-[20px] lg:text-[16px] lg:leading-[24px] text-[#0000008c] font-medium mb-0'>
            {locale['cart.tax_included']}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
