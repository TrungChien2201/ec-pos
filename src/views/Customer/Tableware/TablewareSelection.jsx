import React from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

// Use string paths for images
const ImgHorizontalDivide = 'images/horizontal-divide.png'
const Img9 = 'images/table-ware/1.webp'
const Img2 = 'images/table-ware/baner-mb.png'
const Img1 = 'images/table-ware/baner.png'
const Img4 = 'images/table-ware/logo-mb.png'
const Img3 = 'images/table-ware/logo.png'
const Img6 = 'images/table-ware/section1-mb.png'
const Img5 = 'images/table-ware/section1.png'

const getCollectionInMenu = (menus, collectionTitle) => {
  const collection = (menus || [])
    .map((item) => item.childs)
    .flat()
    .find((item) => item.title === collectionTitle)

  return collection
}

const TablewareSelection = () => {
  const menus = useSelector((state) => state.menus.menus)
  const collection = getCollectionInMenu(menus, `Signature's Original Tableware`)
  const router = useRouter()

  return (
    <div className='bg-white text-center pb-[36px] max-md:pb-[29px]'>
      <div className='container mx-auto text-center font-roboto pt-[44px] max-md:pt-[40px]'>
        <h1 className='font-["Spectral"] text-[#000] text-[52px] leading-[46px]  font-normal max-md:text-[20px] max-md:leading-[20px] '>
          Signature’s Original Tableware{' '}
        </h1>
        <p className='mt-[12px] max-md:mt-[4px] text-[#000000] text-[26px] leading-[30px] font-semibold max-md:text-[14px] max-md:leading-[22px]'>
          シグニチャー・オリジナルのテーブルウエア
        </p>
      </div>

      <div className='max-sm:hidden mt-[24px]'>
        <div className='flex justify-center'>
          <img src={Img1} className='w-full h-auto ' />
        </div>
      </div>
      <div className='sm:hidden mt-[24px]'>
        <div className='flex justify-center'>
          <img src={Img2} className='w-full  h-[200px] object-fit object-cover' />
        </div>
      </div>

      <div className='max-md:px-4'>
        <div className='mt-[28px] text-[#58595B] text-[20px] leading-[36px] max-md:text-[16px] max-md:leading-[28px] font-bold '>
          <p>
            並ぶもののない価値ある品を、
            <br className='hidden max-md:block' />
            あなたとあなたの大切な方へ
          </p>
          <p>シグニチャーのテーブルウエアでテーブルセッティングも未来も生まれ変わる</p>
        </div>

        <div className='max-sm:hidden mt-[20px]'>
          <div className='flex justify-center '>
            <img src={Img3} className='w-[303px] h-[216px] p-4' />
          </div>
        </div>
        <div className='sm:hidden mt-[32px]'>
          <div className='flex justify-center'>
            <img src={Img4} className='w-[200px] h-[143px] p-4 ' />
          </div>
        </div>
      </div>

      <div className='mt-[12px] h-[40px]  bg-[#231F20] w-full max-md:w-[343px] max-w-[1076px] mx-auto flex justify-center items-center'>
        <p className='text-[26px] leading-[36px] max-md:text-[14px] max-md:leading-[22px] font-semibold text-white'>
          シグニチャー・オリジナルのテーブルウエア
        </p>
      </div>

      <p className='mt-[24px] max-md:mt-[20px] text-[26px] leading-[31px] font-semibold text-[#231F20] max-md:text-[16px] max-md:leading-[22px]'>
        エッグシェルグラスについて
      </p>

      <div className='max-md:px-4'>
        <div className='tracking-[1px]  mt-[24px] max-md:mt-[20px] text-[#6D6E71] text-[18px] leading-[30px] font-normal  max-md:text-[14px] max-md:leading-[22px] max-md:text-[#575757D9] '>
          <p>江戸時代から明治にかけて、一つ、家一軒分もの価値で取引された </p>
          <p>
            「卵殻手（らんかくで）」と呼ばれる有田磁器がありました。西洋の貴族から「エッグシェル」と呼ばれ絶賛されておりました。
          </p>
          <p>時代に翻弄され 100 年前に途絶えてしまったその技術を、いま、</p>
          <p>由緒ある陶工たちが独自の製法で復活させ脚光を浴びています。</p>
          <p>
            このオリジナルグラスは「卵殻手シリーズ」の中でも精緻を極めた最高品質「EN-YO（婉容）」を使用し、
          </p>
          <p>光が透ける薄さ 1 ミリ以下、飲み物そのものの美しい彩の変化を楽しむとともに、</p>
          <p>
            「繭」を表現したふんわりとしたしつらいは、柔らかな手触りはもちろん、口当たりの良さが至福の時を刻みます。
          </p>
          <p>柄（ステム）の部分にはゴールドとプラチナを使用し、</p>
          <p>素材制作過程が比べるもののない最高級のラグジュアリー磁器に仕上げています。</p>
          <p>グラフダイヤモンドをそのグランドデザインから支えてきたアン・マリー・グラフに</p>
          <p>「このような素晴らしいものは絶対に途絶えさせてはいけない」と言わしめた、</p>
          <p>まごうことなき銘品です。</p>
        </div>

        <div className='max-sm:hidden mt-[36px]'>
          <img src={Img5} className='w-full max-w-[1076px] ' alt='' />
        </div>

        <div className='sm:hidden mt-[32px]'>
          <img src={Img6} className='w-full max-w-[343px] ' alt='' />
        </div>
      </div>

      <div className='flex justify-center pt-[36px] max-md:pt-[30px] pb-[24px] overflow-x-hidden'>
        <img
          src={ImgHorizontalDivide}
          alt=''
          className='object-cover object-center max-w-[1076px] h-[45px] max-md:h-[32px] '
        />
      </div>

      <p className='text-center font-["Spectral"] text-[32px] max-md:text-[24px] font-medium leading-[27px] text-[#514f4e]  '>
        購入ページ
      </p>

      <div
        onClick={() => {
          router.push(`/products?collectionId=${collection?.id}`)
        }}
        className='mx-auto mt-[8px]  overflow-hidden flex flex-col justify-between items-center  cursor-pointer h-[174px] w-[433px] max-md:w-[343px] max-md:h-[140px] rounded-[4px] bg-cover border-[1px] border-solid border-[#ABABAB]'
      >
        <img src={Img9} alt='' className='w-full h-[145px]' />
        <p className=' leading-[22px] max-md:leading-[22px]  text-[14px] text-[#514f4e] max-md:text-[12px]  font-semibold '>
          シグニチャー・オリジナルのテーブルウエア
        </p>
      </div>
    </div>
  )
}

export default TablewareSelection
