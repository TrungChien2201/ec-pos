import { useRouter } from 'next/router'

const MenuItem = ({ menu }) => {
  const router = useRouter()
  if (!menu.showTopBar) {
    return null
  }
  const renderChildMenu = menu?.childs
    .filter((item) => !item.isHideOnMenu)
    .map((child, childsIndex) => (
      <div
        key={childsIndex}
        className='px-2 py-3 bg-white text-body-14-22 whitespace-nowrap border-bottom border-[#C7C7C7] hover:bg-[#9FD8F4] hover:border-[#666] hover:text-[#00476A] text-black/50'
        onClick={() =>
          child.id && child?.active !== false ? router.push(`/products?collectionId=${child.id}`) : ''
        }
      >
        {child.title === 'Bhutan Premium 7 Matsutake'
          ? 'Matsutake'
          : child?.customTitle
          ? child?.customTitle
          : child.title}
      </div>
    ))
  return (
    <div className='flex justify-between group transition-all cursor-pointer relative h-[44px]'>
      <div className='group-hover:text-orange transition-all flex items-center gap-x-2'>
        <span className='text-[16px] leading-6 font-medium'>{menu.title}</span>
        <img alt='eva-arrow' src='images/eva_arrow-ios-back-outline.png' width={18} height={18} />
      </div>
      <div className='hidden translate-y-4 duration-500 transition-all group-hover:block group-hover:translate-y-0 flex-col absolute top-[44px] bg-white shadow-menu-item w-fit min-w-[197px] z-10'>
        {renderChildMenu}
      </div>
    </div>
  )
}

export default MenuItem
