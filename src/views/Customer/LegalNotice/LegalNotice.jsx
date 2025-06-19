import { useTranslation } from 'react-i18next'
import { Row } from 'antd'

const LegalNotice = () => {
  const { t } = useTranslation()
  return (
    <Row justify='center' className='bg-white font-A_OTF_A1_Mincho_Std'>
      <div className='pt-[68px] px-4'>
        <p className='font-bold text-xl lg:text-[38px] text-[#000000]'>{t('legalnotice.title')}</p>
        <div className='mt-[28px] text-[12px] lg:text-[16px] rounded-[12px] bg-[#FFFFFF80] px-[24px] pt-[40px] pb-[31px] shadow-[0px_0px_20px_0px_#00000012] mb-[10px]'>
          <p className='font-bold text-[#575757]'>{t('legalnotice.distributor.label')}</p>
          <p className='text-[#000000D9] mt-[12px] info-value'>
            {t('legalnotice.distributor.value')}
          </p>

          <p className='font-bold text-[#575757] mt-[24px]'>
            {t('legalnotice.representativeperson.label')}
          </p>
          <p className='text-[#000000D9] mt-[12px] info-value'>
            {t('legalnotice.representativeperson.value')}
          </p>

          <p className='font-bold text-[#575757] mt-[24px]'>{t('legalnotice.location.label')}</p>
          <p
            className='text-[#000000D9] mt-[12px] info-value'
            dangerouslySetInnerHTML={{ __html: t('legalnotice.location.value') }}
          ></p>

          <p className='font-bold text-[#575757] mt-[24px]'>{t('legalnotice.inquiry.label')}</p>
          <p className='text-[#000000D9] mt-[12px] info-value'>0337773417</p>

          <p className='font-bold text-[#575757] mt-[24px]'>{t('legalnotice.info.label')}</p>
          <p
            className='text-[#000000D9] mt-[12px] info-value'
            dangerouslySetInnerHTML={{ __html: t('legalnotice.info.value') }}
          ></p>

          <p className='font-bold text-[#575757] mt-[24px]'>{t('legalnotice.price.label')}</p>
          <p
            className='text-[#000000D9] mt-[12px] info-value'
            dangerouslySetInnerHTML={{ __html: t('legalnotice.price.value') }}
          ></p>

          <p className='font-bold text-[#575757] mt-[24px]'>{t('legalnotice.payment.label')}</p>
          <p
            className='text-[#000000D9] mt-[12px] info-value'
            dangerouslySetInnerHTML={{ __html: t('legalnotice.payment.value') }}
          ></p>

          <p className='font-bold text-[#575757] mt-[24px]'>
            {t('legalnotice.deferredPayment.label')}
          </p>
          <p
            className='text-[#000000D9] mt-[12px] info-value'
            dangerouslySetInnerHTML={{ __html: t('legalnotice.deferredPayment.value') }}
          ></p>

          <p className='font-bold text-[#575757] mt-[24px]'>
            {t('legalnotice.deliveryTime.label')}
          </p>
          <p
            className='text-[#000000D9] mt-[12px] max-w-[490px] info-value'
            dangerouslySetInnerHTML={{ __html: t('legalnotice.deliveryTime.value') }}
          ></p>

          <p className='font-bold text-[#575757] mt-[24px]'>
            {t('legalnotice.returnAndRefund.label')}
          </p>
          <p className='text-[#000000D9] mt-[12px] max-w-[490px] info-value'>
            {t('legalnotice.returnAndRefund.value')}
          </p>
        </div>
      </div>
    </Row>
  )
}

export default LegalNotice
