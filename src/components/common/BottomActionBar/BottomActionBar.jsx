import * as CONSTANT from 'common/constant'

const BottomActionBar = (props) => {
  const { children, isCollapsed } = props

  return (
    <div className='mt-12'>
      <div
        className='fixed bottom-0 flex bg-white py-2 px-6 shadow-top'
        style={{
          left: isCollapsed ? CONSTANT.SIDEBAR_COLLAPSED_WIDTH : CONSTANT.SIDEBAR_NORMAL_WIDTH,
          width: `calc(100% - ${
            isCollapsed ? CONSTANT.SIDEBAR_COLLAPSED_WIDTH : CONSTANT.SIDEBAR_NORMAL_WIDTH
          }px)`,
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default BottomActionBar
