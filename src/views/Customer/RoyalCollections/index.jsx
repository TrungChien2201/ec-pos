import { useSelector } from 'react-redux'

import BaseAnimation from 'components/common/BaseAnimation/BaseAnimation'
import useResponsive from 'hooks/useResponsive'
import { useRouter } from 'next/router'

const RoyalCollection = () => {
  const router = useRouter()
  const { isMobile } = useResponsive()
  const menus = useSelector((state) => state.menus.menus)
  const menuCollection = menus.find((menu) => menu.title === 'Royal Collection')

  const collection = menuCollection?.childs?.length
    ? menuCollection?.childs.find((doc) => !!doc.id)
    : null
  return (
    <BaseAnimation>
      <div className='w-full p-[20px] flex flex-col items-center justify-center text-center bg-white py-10'>
        <p className='text-basic text-[38px] leading-[46px] max-md:text-[20px] max-md:leading-[28px] font-spectral'>
          Royal Collection
        </p>
        <p className='text-basic text-[20px] leading-[28px] max-md:text-[14px] max-md:leading-[22px] mb-10'>
          ロイヤルコレクション
        </p>

        <p className='text-basic text-[40px] leading-[46px] max-md:text-[20px] max-md:leading-[28px] font-spectral'>
          Buckingham Palace Royal Collection
        </p>
        <p className='text-basic text-[20px] leading-[28px] max-md:text-[14px] max-md:leading-[22px]'>
          バッキンガム・パレス・ロイヤルコレクション
        </p>
      </div>

      <div className='bg-[white]'>
        <div className='flex justify-center w-full lg:mb-6'>
          <img
            src={isMobile ? 'images/image-90.svg' : 'images/image-83.svg'}
            className='w-full h-auto max-w-[296px] lg:max-w-[372px]'
          />
        </div>

        <div className='w-full p-[20px] flex flex-col items-center justify-center text-center bg-[white]'>
          <p className='text-basic text-[38px] leading-[46px] max-md:text-[20px] max-md:leading-[28px] mb-6 font-spectral'>
            ROYAL GIFTS
          </p>
          <p className='text-basic text-[24px] leading-[28px] max-md:text-[14px] max-md:leading-[22px] mt-[10px] mb-4 opacity-[85%]'>
            英国王室の素晴らしさを映したラグジュアリーな贈り物で、あなたの愛する人が最高 <br />
            の笑顔と幸福に包まれることを祈って公式の品々をセレクトしています。
          </p>

          <p className='text-basic w-full h-auto text-[16px] leading-[32px] max-md:text-[14px] opacity-85 text-center max-w-[941px]'>
            バッキンガム・パレスブランドの陶器は１２世紀ごろから始まったといわれる、イギリスの陶器産業の里ストーク＝オン＝トレントの伝統的な技術で作られています。
            <br />
            繊細なデザインはロイヤルコレクションに属するオリジナルの作品からインスピレーションを受けて、新たなロイヤルの世界が生み出されています。
            <br />
            マグカップでホットミルクやコーヒーを淹れて、朝食や夕食後にカップ&ソーサーと本場英国の紅茶で伝統的な英国のティータイムを贅沢に楽しみましょう。
            <br />
            あなただけのロイヤルティーパーティーが華やかにはじまります。
          </p>
        </div>
      </div>

      <div className='flex justify-center px-[20px] bg-[white] pb-4'>
        <img src='images/image-72.svg' className='w-full lg:w-[unset] h-auto' />
      </div>

      <div className='flex justify-center px-[20px] bg-[white]'>
        <img src='images/image-77.svg' className='w-full lg:w-[unset] h-auto' />
      </div>

      <div className='w-full h-auto flex justify-center pt-[30px] pb-[50px] bg-[white]'>
        <div className='w-full lg:w-[578px] px-[20px] xl:px-[unset]'>
          <img src='images/image-73.svg' className='w-full' />
          <div className='mt-[15px] w-full flex justify-center items-center'>
            <div
              className='rounded-lg w-full lg:w-[360px] text-white text-[16px] leading-[45px] text-center bg-light-yellow h-[45px] cursor-pointer'
              onClick={() => {
                router.push(`/products?collectionId=${collection?.id}`)
              }}
            >
              Buy online 購入ページ
            </div>
          </div>
        </div>
      </div>
    </BaseAnimation>
  )
}

export default RoyalCollection
