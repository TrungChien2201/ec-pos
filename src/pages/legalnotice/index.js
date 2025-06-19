import LegalnoticeView from 'views/Customer/LegalNotice/LegalNotice'

const LegalnoticePage = () => {
  return <LegalnoticeView />
}

// Force server-side rendering to avoid Html import issues
export async function getServerSideProps() {
  return {
    props: {
      isFooterHomePage: true,
    },
  }
}

export default LegalnoticePage
