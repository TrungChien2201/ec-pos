import BaseAnimation from 'components/common/BaseAnimation/BaseAnimation'

const ComingSoon = (props) => {
  return (
    <BaseAnimation>
      <div
        className='flex flex-col items-center justify-center h-screen bg-cover text-white'
        style={{
          backgroundImage: `url('images/comming-soon.png')`,
        }}
      >
        <div className='container px-4'>
          <div className='flex flex-col items-center justify-center w-full max-w-[800px] mx-auto text-center'>
            <h1 className='text-xl md:text-2xl lg:text-[38px] font-bold'>
              ただいまサイトリニューアル中です。
            </h1>
            <p className='max-w-[530px] mt-7 text-xs md:text-sm lg:text-base leading-6 font-medium'>
              平素は本サイトをご利用いただき、
              <br className='md:hidden' />
              誠にありがとうございます。
              <br />
              現在、サイトのリニューアルに向けて一時サービスを停止しております。
            </p>
          </div>
        </div>
      </div>
    </BaseAnimation>
  )
}

export default ComingSoon
