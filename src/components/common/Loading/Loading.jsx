import React from 'react'

import { Spin } from 'antd'

const Loading = () => {
  return (
    <div className='w-full h-[500px] flex items-center justify-center'>
      <Spin size='large' />
    </div>
  )
}

export default Loading
