import cx from 'classnames'
import { useTranslation } from 'react-i18next'

import IconArchive from 'resourse/svg/IconArchive'

const EmptyData = ({ className }) => {
  const { t } = useTranslation()
  return (
    <div className={cx(`flex min-h-[50vh] p-3 bg-white ${className}`)}>
      <div className='flex flex-col items-center justify-center w-full gap-4 py-14 bg-gray-light-6 text-gray-light-7 text-xl font-medium rounded-lg'>
        <IconArchive />
        {t('common.no_data')}
      </div>
    </div>
  )
}

export default EmptyData
