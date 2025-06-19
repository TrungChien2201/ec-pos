import React from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import BannerCollection from 'components/BannerCollection'

const Img1 = 'images/bucking-ham/baner.png'
const Img2 = 'images/bucking-ham/baner-mb.png'
const Img3 = 'images/bucking-ham/logo.png'
const Img4 = 'images/bucking-ham/logo-mb.png'
const Img5 = 'images/bucking-ham/section1.png'
const Img6 = 'images/bucking-ham/section1-mb.png'
const Img7 = 'images/bucking-ham/section2.png'
const Img8 = 'images/bucking-ham/section2-mb.png'
const Img9 = 'images/bucking-ham/section3.png'
const Img10 = 'images/bucking-ham/section3-mb.png'
const Img11 = 'images/bucking-ham/1.webp'
const ImgHorizontalDivide = 'images/horizontal-divide.png'

const BuckinghamSelection = () => {
  const { t } = useTranslation()
  const menus = useSelector((state) => state.menus.menus)
  const menuCollection = menus.find((menu) => menu.title === 'Royal Collection')

  const collection = menuCollection?.childs?.length
    ? menuCollection?.childs.find((doc) => !!doc.id)
    : null
  return (
    <div className='bg-white'>
      <div className='container mx-auto text-center font-roboto pt-[44px] max-md:pt-[40px]'>
        <h1 className='font-["Spectral"] text-[#000] text-[52px] leading-[52px]  font-normal max-md:text-[20px] max-md:leading-[20px] '>
          Buckingham Palace Royal Collection
        </h1>
        <p className='mt-[12px] max-md:mt-[4px] text-[#000000] text-[26px] leading-[30px] font-semibold max-md:text-[14px] max-md:leading-[22px]'>
          バッキンガム・パレス・ロイヤルコレクション
        </p>
      </div>

      <div className='max-sm:hidden mt-[24px]'>
        <div className='flex justify-center'>
          <img src={Img1} className='w-full h-auto ' />
        </div>
      </div>
      <div className='sm:hidden mt-[24px]'>
        <div className='flex justify-center'>
          <img src={Img2} className='w-full  h-auto' />
        </div>
      </div>

      <div className='container mx-auto font-roboto text-center'>
        <div className='mt-[28px] max-md:mt-[20px] text-[#575757] font-bold text-[20px] leading-[36px]  max-md:text-[16px] max-md:leading-[24px] '>
          <p>英国王室の素晴らしさを映したラグジュアリーな贈り物で、あなたの愛する人が</p>
          <p>最高の笑顔と幸福に包まれることを祈って、公式の品々をセレクトしています。</p>
        </div>

        <div className='max-sm:hidden mt-[24px]'>
          <div className='flex justify-center'>
            <img src={Img3} className='w-[308px] h-[211px] ' />
          </div>
        </div>
        <div className='sm:hidden mt-[32px]'>
          <div className='flex justify-center'>
            <img src={Img4} className='w-[200px] h-[137px]' />
          </div>
        </div>

        <div className='mt-[10px] h-[40px]  bg-[#AB292F] w-full max-w-[1076px] mx-auto flex justify-center items-center'>
          <p className='text-[26px] leading-[36px] max-md:text-[14px] max-md:leading-[36px] font-semibold text-white'>
            バッキンガム・パレス・ロイヤルコレクション
          </p>
        </div>

        <div className='mt-[24px] tracking-[1px] max-md:mt-[20px] text-[18px] leading-[30px] font-medium text-[#575757]  max-md:text-[14px] max-md:leading-[22px] max-md:text-[#575757D9] max-md:font-normal'>
          <p>バッキンガム・パレス・ロイヤルコレクションからお届けする品々は、</p>
          <p>全てロイヤルコレクショントラストが制作しています。</p>
          <p>ロイヤルコレクショントラストとは、世界最大で貴重なアートコレクションの１つである</p>
          <p>英国王室にまつわるコレクションの管理を行っています。</p>
          <p>100 万点以上の品物が収蔵されており、過去 500 年にわたるその時代の王と王妃の</p>
          <p>個人的な好みを記録したユニークで貴重なコレクションです。</p>
          <p>
            有名な絵画、図面、多くの芸術作品に加えて、すべての王宮のほぼすべての内容が含まれています。
          </p>
          <p>
            公的資金の補助を受けずに実施され、この活動はロイヤルコレクション製品の販売利益などにより成り立っています。
          </p>
          <p>活動の幅は展示会や学習プログラムから出版物や小売製品と広く</p>
          <p>
            ロイヤルコレクションと宮殿の活動がすべての人に評価され、楽しんでいただけるようにすることを目指しています。
          </p>
        </div>

        <div className='max-sm:hidden mt-[28px]'>
          <div className='flex justify-center'>
            <img src={Img5} className='max-w-[1076px] w-full  ' />
          </div>
        </div>
        <div className='sm:hidden mt-[32px]'>
          <div className='flex justify-center'>
            <img src={Img6} className='min-w-[343px] w-full' />
          </div>
        </div>

        <div className='mt-[28px] max-md:mt-[20px] tracking-[1px] text-[18px] leading-[30px] font-medium text-[#575757]  max-md:text-[14px] max-md:leading-[22px] max-md:text-[#575757D9] max-md:font-normal'>
          <p>バッキンガム・パレスブランドの陶器は、１２世紀ごろから始まったといわれる</p>
          <p>イギリスの陶器産業の里、ストーク＝オン＝トレントの伝統的な技術で作られています。</p>
          <p>
            繊細なデザインはロイヤルコレクションに属するオリジナルの作品からインスピレーションを受けて、
          </p>
          <p>新たなロイヤルの世界が生み出されています。</p>
          <p>
            マグカップでホットミルクやコーヒーを淹れて、朝食や夕食後にカップ &
            ソーサーと本場英国の紅茶で
          </p>
          <p>伝統的な英国のティータイムを贅沢に楽しみましょう。</p>
          <p>あなただけのロイヤルティーパーティーが華やかにはじまります。 </p>
        </div>

        <div className='max-sm:hidden mt-[24px]'>
          <div className='flex justify-center'>
            <img src={Img7} className='max-w-[1076px] w-full  ' />
          </div>
        </div>
        <div className='sm:hidden mt-[32px]'>
          <div className='flex justify-center'>
            <img src={Img8} className='min-w-[343px] w-full' />
          </div>
        </div>

        <div className='mt-[24px] max-md:mt-[20px] text-[18px] leading-[30px] font-medium text-[#575757]  max-md:text-[14px] max-md:leading-[22px] max-md:text-[#575757D9] '>
          <p>シグニチャー・ギンザのカフェではロイヤル・コレクションのカップ & ソーサーと紅茶で</p>
          <p className='mt-1'>アフタヌーンティーが楽しめます。</p>
          <p className='mt-1'>
            大変好評をいただいており、限定数のみとなっておりますのでご予約の上、ご来店ください。
          </p>
          <p className='max-md:mt-5 mt-1'>
            ご予約はこちら→
            <a
              href='https://lit.link/en/signatureginza'
              className='max-md:text-[12px] max-md:leading-[30px] text-[#575757]'
            >
              lit.link/signatureginza
            </a>
          </p>
          <p className='mt-[30px]'>
            さらに、バッキンガム・パレス・ジンを使ったジントニックやカクテルをご提供しています。
          </p>
        </div>

        <div className='max-sm:hidden mt-[24px]'>
          <div className='flex justify-center'>
            <img src={Img9} className='max-w-[1076px] w-full  ' />
          </div>
        </div>
        <div className='sm:hidden mt-[32px]'>
          <div className='flex justify-center'>
            <img src={Img10} className='min-w-[343px] w-full' />
          </div>
        </div>

        <div className='mt-[12px] max-md:mt-[24px]'>
          <h2 className='text-[32px] leading-[38px] font-medium text-[#575757] max-md:text-[24px] max-md:leading-[28px]'>
            “バッキンガム・パレス・ジン”
          </h2>

          <div className='mt-[12px] tracking-[1px] text-[18px] leading-[30px] text-[#575757] font-medium max-md:text-[14px] max-md:leading-[22px]'>
            <p>
              私たちが、その美しい佇まいとストーリーに感動し、バッキンガムの品々を手にとるようになった
            </p>
            <p>象徴とも言える作品・・・バッキンガム・パレス・ジン。</p>
            <p>英国ロンドン、エリザベス女王陛下の邸宅の、美しい庭園よりインスピレーションを受け</p>
            <p>バッキンガム宮殿のためだけに、心躍るドライ・ジンが造られました。</p>
          </div>

          <div className='mt-[20px] text-[12px] tracking-[1px] leading-[20px] font-medium text-[#575757]'>
            <p>
              英国王室の公式商品です。2020
              年当初、英国の国内のみで限定品として販売され、発売当初は瞬く間に売り切れました。
            </p>
            <p>
              海外販売としては日本が初めて許可されました。大量生産はされておリませんので、輸入数量も限られています。品切れの際はご了承ください。
            </p>
            <p className='text-[18px] leading-[30px] font-medium text-[#ED2129] max-md:text-[14px] max-md:leading-[22px]'>
              2024年7月より、特別に日本へ向けてのみ増産が決定されました。独占販売中です。
            </p>
          </div>

          <div className='flex justify-center pt-[36px] max-md:pt-[30px] pb-[24px] overflow-x-hidden'>
            <img
              src={ImgHorizontalDivide}
              alt=''
              className='object-cover object-center max-w-[1076px] h-[45px] max-md:h-[32px]'
            />
          </div>
          <BannerCollection
            className='pb-10'
            title='購入ページ'
            image={Img11}
            description={t('buckingham.description')}
            collectionId={collection?.id}
          />
        </div>
      </div>
    </div>
  )
}

export default BuckinghamSelection
