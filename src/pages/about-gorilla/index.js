import AboutGorillaView from 'views/Customer/AboutGorilla'

const AboutGorillaPage = () => {
  return <AboutGorillaView />
}

// Force server-side rendering to avoid Html import issues
export async function getServerSideProps() {
  return {
    props: {},
  }
}

export default AboutGorillaPage
