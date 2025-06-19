import React from 'react'

import { useSelector } from 'react-redux'

import BaseAnimation from 'components/common/BaseAnimation/BaseAnimation'
import BannerCollection from 'components/BannerCollection'
const Img1 = 'images/highgrova_1.png'
const Img10 = 'images/highgrova_10.png'
const Img11 = 'images/highgrova_11.png'
const Img12 = 'images/highgrova_12.png'
const ImgHorizontalDivide = 'images/horizontal-divide.png'
const Img15 = 'images/2.webp'
const Img2 = 'images/highgrova_2.png'
const Img3 = 'images/highgrova_3.png'
const Img4 = 'images/highgrova_4.png'
const Img5 = 'images/highgrova_5.png'
const Img6 = 'images/highgrova_6.png'
const Img7 = 'images/highgrova_7.png'
const Img8 = 'images/highgrova_8.png'
const Img9 = 'images/highgrova_9.png'
const Img13 = 'images/highgrove_17.png'

const getCollectionInMenu = (menus, collectionTitle) => {
  const collection = (menus || [])
    .map((item) => item.childs)
    .flat()
    .find((item) => item.title === collectionTitle)

  return collection
}

const HighgroveSelection = () => {
  const menus = useSelector((state) => state.menus.menus)

  const collection = getCollectionInMenu(menus, 'Highgrove Selection')
  return (
    <BaseAnimation className='bg-white font-["Roboto"] '>
      <div className='text-center pt-[44px] pb-[24px] '>
        <p className='text-black text-[52px] font-medium leading-[46px] max-md:text-[20px] max-md:leading-[28px] font-["Spectral"]'>
          Highgrove Selection
        </p>
        <p className='mt-2 max-md:mt-0 text-[26px] leading-[28px] max-md:text-[14px] max-md:leading-[22px] font-semibold text-[#000000]'>
          ハイグローブセレクション
        </p>
      </div>

      <div className='max-sm:hidden'>
        <div className='flex justify-center'>
          <img src={Img1} className='w-full h-auto ' />
        </div>
      </div>
      <div className='sm:hidden'>
        <div className='flex justify-center'>
          <img src={Img2} className='w-full  h-auto' />
        </div>
      </div>

      <div className='w-[90%] max-md:w-fit mx-auto max-md:mx-4 '>
        <div className='text-center font-bold font-["A_OTF_A1_Mincho_Std"] pt-[43px] text-[21px] leading-[28px] text-[#3D3D3D] max-md:text-[16px] max-md:leading-[24px] max-md:text-[#000000D9]'>
          <p>
            比類<span>なき人々からイメー</span>ジが生まれた
            <span>、</span>
            <span>美しい</span>品の数々は
          </p>
          <p>
            日常の中に喜びの光が灯<span>っているように</span>心を込めた贈<span>り物</span>
            <span>と</span>
            <span>してぴったりです。</span>
          </p>
        </div>

        <div className='max-sm:hidden my-8'>
          <div className='flex justify-center'>
            <img src={Img3} className='w-full max-w-[278px] h-auto ' />
          </div>
        </div>
        <div className='sm:hidden  mt-6 mb-8'>
          <div className='flex justify-center'>
            <img src={Img4} className='w-full max-w-[231px] h-auto' />
          </div>
        </div>

        <div className='max-sm:hidden flex justify-center items-center mx-auto h-[40px] w-full max-w-[1076px]  bg-[#436143]  text-[26px] leading-[32px]  text-white  font-semibold'>
          <p>ハイグローブセレクション</p>
        </div>
        <div className='sm:hidden flex justify-center items-center text-[20px] leading-[28px] w-[343px] mx-auto h-[44px] bg-[#436143]  text-white font-semibold'>
          <p>ハイグローブセレクション</p>
        </div>

        {/*  */}
        <div className='w-full max-w-[1058px] mx-auto text-center mt-8 font-medium text-[18px] leading-[22px] text-[#514F4E] max-md:text-[14px] max-md:leading-[22px] max-md:text-[#000000D9]  flex flex-col gap-3 justify-center '>
          <p className='tracking-wider'>
            ハイグローブ商品や各種イベント、ハイグローブ・ガーデンツアーによる収益は、
          </p>
          <p>
            2018 年にチャールズ III
            国王殿下によって設立されたキングズ財団(旧プリンス財団)に全て寄付されます。
          </p>
          <p className='tracking-wider'>
            キングズ財団の活動は、国王チャールズ三世の「調和」の哲学にインスパイアされたもので、
          </p>
          <p className='tracking-widest'>
            私たち自身と自然界のバランス、秩序、関係を理解することで、
          </p>
          <p className='tracking-tigh'>より持続可能な未来を創造することができるというものです。</p>
          <p className='tracking-tigh'>
            キングズ・ファウンデーションは、今日世界が直面している課題に対して、
          </p>
          <p className='tracking-[-1px]'>
            ホリスティックな解決策を提供し、生活やコミュニティーづくりに持続可能なアプローチを支援しています。
          </p>
          <p>皆様から購入して頂く事で、大きな違いとなる足跡、貢献が生まれます。</p>
          <p>皆様の支援に心から深く感謝致します。</p>
          <p className='flex justify-center gap-10 max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-0  '>
            <a
              className='text-[#514F4E] max-md:text-[#000000D9]'
              href='https://www.kings-foundation.org/'
            >
              www.kings-foundation.org
            </a>
            <a
              className='text-[#514F4E] max-md:text-[#000000D9]'
              href='https://www.highgrovegardens.com/'
            >
              www.highgrovegardens.com
            </a>
          </p>
        </div>

        <div className='max-sm:hidden mt-10 mb-8'>
          <div className='flex justify-center'>
            <img src={Img5} className='w-1/2 max-w-[538px] h-[352px] max:md:h-auto ' />
            <img src={Img6} className='w-1/2 max-w-[538px] h-[352px] max:md:h-auto ' />
          </div>
        </div>
        <div className='sm:hidden  mt-6 mb-8'>
          <div className=' flex justify-center'>
            <img src={Img7} className='w-full max-w-[343px] h-auto' />
          </div>
        </div>

        <div className='my-8'>
          <div className='  mb-6 max-md:mb-4 text-[21px] leading-[28px] max-md:text-[16px] max-md:leading-[24px] text-[#3D3D3D] text-center font-["A_OTF_A1_Mincho_Std"] font-bold'>
            <p className='tracking-tighter max-md:tracking-wide'>
              ホスピタリティーのためだけに作られた名酒と、プレステージ・キュヴェとして選ばれた土地で育ち
            </p>
            <p className='max-md:tracking-[-1px] tracking-normal '>
              厳選された有機栽培の葡萄による特別なときにふさわしいワインとシャンパンを提供しています。
            </p>
          </div>

          <div className='flex flex-col gap-3 text-[18px] leading-[22px] text-[#514F4E] max-md:text-[14px] max-md:leading-[22px] max-md:text-[#000000D9] font-medium text-center'>
            <p className='tracking-tight'>
              ハイグローブのワインやシャンパンが正式に独占輸入・販売の許可をされているのは海外では日本のみです。
            </p>
            <p className='tracking-tight'>ただし、日本全国でのボトル販売は許可されておらず、</p>
            <p>
              味わう事が出来るのは、サービスのクオリティが認められた店舗のみという限定商品です。
            </p>
            <p>プリンス財団の心や活動を理解して頂ける方たちにご提供し味わって頂くという、</p>
            <p>とても特殊で特別なメッセージを持っています。この事から特別に許可した、</p>
            <p>
              レストラン、各種イベント、ウェディングでのウエルカムドリンクなどでの、ご提供となります。
            </p>
            <p>シグニチャー・ギンザのカフェでは、常時お楽しみいただけます。</p>
            <p>アフタヌーンティーに合わせたり、カクテルのご用意もございます。</p>
          </div>
        </div>

        <div className='max-sm:hidden mt-8 mb-[33px]'>
          <div className='flex justify-center'>
            <img src={Img8} className='w-1/2 max-w-[538px] h-[352px] max:md:h-auto  ' />
            <img src={Img9} className='w-1/2 max-w-[538px] h-[352px] max:md:h-auto ' />
          </div>
        </div>
        <div className='sm:hidden  mt-6 mb-8'>
          <div className=' flex justify-center'>
            <img src={Img10} className='w-full max-w-[343px] h-auto' />
          </div>
        </div>

        <div className='flex flex-col gap-3 mb-8 text-center text-[18px] leading-[22px] max-md:text-[14px] max-md:leading-[22px] max-md:text-[#000000D9] text-[#514F4E] font-medium '>
          <p className='tracking-normal max-md:tracking-[-2px]'>
            EC サイト、及び店舗ではウィスキーの販売を行っています。
          </p>
          <p>
            チャールズ III 国王殿下の即位記念や誕生日記念のお祝いのために特別に作られたものであり、
          </p>
          <p>選ばれたライフスタイルを彩る品々とともに、限定数のみの販売となっています。</p>
          <p>
            お手に入れること自体が稀少な機会であり、特別な方への贈り物としても素晴らしい体験となるでしょう。
          </p>
        </div>

        <div className='max-sm:hidden mt-8 mb-[33px]'>
          <div className='flex justify-center'>
            <img src={Img11} className='w-1/2 max-w-[538px] h-[352px] max:md:h-auto ' />
            <img src={Img12} className='w-1/2 max-w-[538px] h-[352px] max:md:h-auto ' />
          </div>
        </div>
        <div className='sm:hidden  mt-6 mb-8 max-md:mb-[29px]'>
          <div className=' flex justify-center'>
            <img src={Img13} className='w-full max-w-[343px] h-auto' />
          </div>
        </div>

        <div className='flex justify-center py-[24px] overflow-x-hidden '>
          <img
            src={ImgHorizontalDivide}
            alt=''
            className='object-cover object-center  max-w-[1076px] w-[1076px] mx-auto max-md:w-[100%] h-[32px]'
          />
        </div>
        <BannerCollection
          className='pb-10'
          title='購入ページ'
          image={Img15}
          description='ハイグローブセレクション'
          collectionId={collection?.id}
        />
      </div>
    </BaseAnimation>
  )
}

export default HighgroveSelection
