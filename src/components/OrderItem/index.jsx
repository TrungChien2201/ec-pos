import { useSelector } from 'react-redux'

import { formatDate } from 'utils'

const OrderItem = ({ item }) => {
  const locale = useSelector((state) => state.user.locale)
  const renderItems = item?.transaction_items?.map((order, index) => (
    <div key={index} className='rounded-lg border-solid border-[#EDEDED] flex items-center'>
      <div className='w-[110px] h-[102px] flex items-center justify-center flex-shrink-0 border-[#EDEDED]'>
        <img className='object-cover w-[70px] h-auto' src={order.image_url} />
      </div>
      <div className='w-[1px] h-[102px] bg-[#EDEDED]' />
      <div className='p-2 flex-grow space-y-1.5'>
        <h5 className='text-body-14-22 md:text-body-20-28 font-medium text-black'>{order.title}</h5>
        <div className='flex justify-between items-center'>
          <span className='text-body-14-22 md:text-body-16-24 font-medium text-[#9C8C6A]'>
            ¥{order.price}
          </span>
          {/* <span className='text-body-14-22 font-medium text-[#4E4E4E]'>
            600{t('user_profile.order.soldAmount')}
          </span> */}
        </div>
        <h6 className='text-body-12-20 md:text-body-14-22 text-[#4E4E4E]'>
          {locale['user_profile.order.amount']}: {order.quantity}{' '}
          <span className='font-medium text-body-14-22 md:text-body-16-24'>
            ¥{order.price * order.quantity}
          </span>
        </h6>
      </div>
    </div>
  ))
  return (
    <div className='p-7 pt-4 w-full rounded-lg bg-white'>
      <h4 className='text-body-14-22 md:text-body-16-24 font-medium text-black/55'>
        {locale['user_profile.order.orderDate']}: {formatDate(item.created_at)}
      </h4>
      <div className='mt-2 space-y-3'>{renderItems}</div>
      <div className='flex flex-col md:flex-row mt-3 gap-x-4 items-end gap-4 md:justify-end md:items-center'>
        <div className='grid grid-cols-2'>
          <span className='text-body-14-22 text-[#666666]'>
            {locale['user_profile.order.earnedPoint']}:{' '}
          </span>
          <div className='flex items-center gap-x-1 justify-end'>
            <img src='images/icon-coin.png' className='w-4 h-4 ' alt='coin' />
            <span className=' text-[#666666] text-body-14-22'>{item.point} </span>
          </div>
          <span className='text-body-16-24 font-medium text-[#666666]/85'>
            {locale['user_profile.order.total']}:{' '}
          </span>
          <span className=' text-[#9C8C6A] font-medium text-right text-body-20-28'>
            ¥{item.total}
          </span>
        </div>
        {/* <button
          type='button'
          className='px-4 cursor-pointer py-2 border-none rounded-lg border bg-[#9C8C6A]'
        >
          <span className='text-white  text-body-16-24'>{t('user_profile.order.Reorder')}</span>
        </button> */}
      </div>
    </div>
  )
}

export default OrderItem
