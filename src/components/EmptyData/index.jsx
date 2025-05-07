import cx from 'classnames'
import { useSelector } from 'react-redux'

import IconArchive from 'resourse/svg/IconArchive'

const EmptyData = ({ className }) => {
  const locale = useSelector((state) => state.user.locale)
  return (
    <div className={cx(`flex min-h-[50vh] p-3 bg-white ${className}`)}>
      <div className='flex flex-col items-center justify-center w-full gap-4 py-14 bg-gray-light-6 text-gray-light-7 text-xl font-medium rounded-lg'>
        <IconArchive />
        {locale['common.no_data']}
      </div>
    </div>
  )
}

export default EmptyData
