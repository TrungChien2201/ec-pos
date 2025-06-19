import PremiumWinesView from '@/src/views/Customer/AboutPremiumWines'

const PremiumWinesPage = () => {
  return <PremiumWinesView />
}

// Force server-side rendering to avoid Html import issues
export async function getServerSideProps() {
  return {
    props: {},
  }
}

export default PremiumWinesPage
