
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'

import { initWarning } from 'store/warning'

import { WARNING_AGE, WARNING_AGE_VAL } from 'common/constant'
import dynamic from 'next/dynamic';

const Button = dynamic(() => import('antd').then((mod) => mod.Button), { ssr: false });

const ModalWarningAge = ({ linkRedriect }) => {
  const router = useRouter()
  const dispatch = useDispatch()

  const onConfirm = () => {
    localStorage.setItem(WARNING_AGE, WARNING_AGE_VAL.ENOUGH)
    dispatch(
      initWarning({
        showModal: false,
        linkRedriect: '',
      }),
    )
    router.push(linkRedriect)
  }

  const onCancel = () => {
    dispatch(
      initWarning({
        showModal: false,
        linkRedriect: '',
      }),
    )
  }

  return (
    <div className='fixed top-0 right-0 left-0 bottom-0 flex items-center justify-center bg-[#00000091] z-[9999999]'>
      <div className='w-[95%] px-[16px] py-[32px] bg-[#AFA570D9] lg:max-w-[647px] rounded-[16px] lg:p-[50px] border border-solid border-gray-light-8'>
        <div className='text-center text-white mb-[23px]'>
          <p className='text-[14px] leading-[28px] mb-[8px] lg:text-[24px]'>
            このショップでは酒類を取り扱っています。 <br />
            20歳未満の者の飲酒は法律で禁止されています。
          </p>
          <p className='text-[14px] leading-[28px] mb-0 lg:text-[24px] lg:px-[15px]'>
            Drinking alcohol for those under 20 years of <br />
            age is prohibited by law.
          </p>
        </div>
        <div className='text-center text-white mb-[23px] lg:mb-[46px]'>
          <p className='text-[16px] leading-[28px] mb-[8px] lg:text-[30px] lg:leading-[40px] font-medium'>
            20歳以上ですか？
          </p>
          <p className='text-[12px] leading-[28px] mb-0 lg:text-[24px]'>
            Are you over 20 years old?
          </p>
        </div>
        <div className='flex items-center gap-[10px]'>
          <Button
            className='w-1/2 px-[15px] py-[6px] h-[44px] bg-transparent text-white border-[#fff] lg:h-[71px] text-base lg:text-[24px] font-medium'
            onClick={onConfirm}
          >
            YES はい
          </Button>
          <Button
            className='w-1/2 px-[15px] py-[6px] h-[44px] bg-transparent text-white border-[#fff] lg:h-[71px] text-base lg:text-[24px] font-medium'
            onClick={onCancel}
          >
            NO いいえ
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ModalWarningAge
