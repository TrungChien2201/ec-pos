import React from 'react'

import cx from 'classnames'

const AdjustNumberItem = ({ value, increaseValue, decreaseValue }) => {
  return (
    <div className='flex items-center'>
      <div className='flex rounded-lg border border-solid border-gray-200'>
        <div
          className={cx(
            `w-[40px] border-solid border-0 border-r border-gray-200 text-center leading-[28px] ${
              value <= 1 ? 'cursor-not-allowed' : 'cursor-pointer'
            }`,
          )}
          onClick={value <= 1 ? undefined : decreaseValue}
        >
          -
        </div>
        <div className='w-[40px] text-center leading-[28px]'>{value}</div>
        <div
          className={cx(
            'w-[40px] border-solid border-0 border-l border-gray-200 text-center leading-[28px] cursor-pointer',
          )}
          onClick={increaseValue}
        >
          +
        </div>
      </div>
    </div>
  )
}

export default AdjustNumberItem
