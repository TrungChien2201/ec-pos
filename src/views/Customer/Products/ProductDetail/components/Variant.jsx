import React from 'react'

import cx from 'classnames'

const SelectVariant = ({ productDetail, setVariant, variant }) => {
  return (
    <div>
      {productDetail?.variants &&
        !productDetail?.variants.find((doc) => doc.title === 'Default Title') && (
          <div className='flex flex-col my-4'>
            <div className='flex flex-wrap gap-2 mt-2'>
              {productDetail?.variants?.map((item, index) => (
                <button
                  type='button'
                  className={cx(
                    `cursor-pointer h-10 p-[10px] border border-black text-sm rounded-full min-w-[40px] ${
                      variant.id === item.id ? 'bg-black text-white' : 'bg-white text-black'
                    }`,
                  )}
                  key={index}
                  onClick={() => setVariant({ ...item, index })}
                >
                  {item?.title}
                </button>
              ))}
            </div>
          </div>
        )}
    </div>
  )
}

export default SelectVariant
