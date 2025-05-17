import LiffProfileView from 'views/Client/Register'

const LiffProfilePage = () => {
  return <LiffProfileView />
}

// Force server-side rendering to avoid Html import issues
export async function getServerSideProps() {
  return {
    props: {},
  }
}

export default LiffProfilePage
