import LiffLoginView from 'views/Client/Login'

const LiffLoginPage = () => {
  return <LiffLoginView />
}

// Force server-side rendering to avoid Html import issues
export async function getServerSideProps() {
  return {
    props: {},
  }
}

export default LiffLoginPage
