import { useSelector } from 'react-redux'
const Banner = ({ currentCollection, infoCollection }) => {
  const locale = useSelector((state) => state.user.locale)
  const { title } = currentCollection || {}
  const COLLECTION = {
    'HAL CAVIAR': {
      subTitle: 'ハルキャビア',
      bg: '#D6EAD0',
    },
    'Buckingham Palace Royal Collection': {
      subTitle: 'バッキンガム・パレス・ロイヤル・コレクション',
      imgStyle: { padding: '28px 0' },
      bg: '#AB292F',
      color: '#fff',
      height: 'h-[241px]',
    },
    'Premium Wine Range': {
      subTitle: 'プレミアムレンジ',
      bg: '#FDF3CC',
    },
    'Icon Wine Range': {
      subTitle: 'アイコンレンジ',
      bg: '#ECDEF5',
    },
    'Van Biljon Cinq Wines': {
      subTitle: 'ヴァン・ビルジョン・サンク',
      imgStyle: { padding: '28px 0' },
      bg: '#FFFFFF',
    },
    "Japan's Craftpeopleship Tableware": {
      subTitle: '和紙皿',
    },
    'Luxury Wine Range': {
      subTitle: 'ラグジュアリーレンジ',
    },
    'Bhutan Premium 7 Matsutake': {
      subTitle: 'ブータン・プレミアム 7 松茸',
      bg: '#D6EAD0',
    },
    'NOVA Caviar': {
      subTitle: locale['nova_caviar.description'],
      bg: '#A8A9AD',
      imgStyle: { height: 'auto' },
    },
    'Highgrove Selection': {
      subTitle: 'ハイグローブセレクション',
      color: '#FFFFFF',
      bg: '#50734F',
      imgStyle: { width: '261px', height: 'auto' },
    },
    Sweets: {
      subTitle: 'スイーツ',
      bg: '#CFB8D9',
      color: '#FFFFFF',
    },
    'Rosey’s Mark': {
      subTitle: 'ロージーズ・マーク',
      bg: '#476261',
      color: '#FFFFFF',
    },
    "Signature's Original Tableware": {
      subTitle: 'シグニチャー・オリジナルのテーブルウエア',
      bg: '#231F20',
      color: '#FFFFFF',
    },
    Delicacy: {
      subTitle: '珍味',
      bg: 'linear-gradient(90deg, #E2C18A 0%, #CA9C64 16.92%, #F7D896 37.43%, #C59A5A 64.05%, #F4DEA4 100%)',
      color: '#FFFFFF',
    },
    'Gorilla Spirits Co.': {
      subTitle: 'ゴリラスピリッツ',
      bg: '#AA998E',
      color: '#FFFFFF',
    },
    Maraba: {
      subTitle: 'マラバ',
      bg: '#7D2224',
      color: '#FFFFFF',
    },
  }
  const collection = COLLECTION[title]
  const NovaCaviar = Object.keys(COLLECTION).find((key) => key === 'NOVA Caviar')
  const Highgrove = Object.keys(COLLECTION).find((key) => key === 'Highgrove Selection')

  return (
    <>
      <div className={`flex justify-center items-center h-[212px] mx-auto bg-white`}>
        {infoCollection && (
          <div className='container flex justify-center items-center'>
            <img
              className={`${infoCollection?.width || 'w-[246px]'} ${
                collection?.height
                  ? collection?.height
                  : infoCollection?.height
                  ? infoCollection?.height
                  : 'h-[185px]'
              }`}
              src={infoCollection?.image || 'images/image-27.svg'}
              alt='logo'
              style={collection?.imgStyle || {}}
            />
          </div>
        )}
      </div>
      <div
        className={`${
          title === Highgrove ? 'text-[#FFFFFF]' : 'text-black'
        } p-[11px] lg:pt-[26px] lg:pb-[14px]  text-center max-lg:min-h-[72px] min-h-[112px]`}
        style={{ background: collection?.bg || '#F5DFDE' }}
      >
        <p
          style={{ color: collection?.color || 'black' }}
          className='text-[20px] leading-[28px] font-medium font-spectral lg:text-[38px] lg:leading-[40px] lg:mb-[4px]'
        >
          {title}
        </p>
        <p
          style={{ color: collection?.color || 'black' }}
          className='text-[14px] leading-[22px] lg:text-[20px]  lg:leading-[28px] font-semibold'
        >
          {collection?.subTitle}
        </p>
      </div>
    </>
  )
}

export default Banner
