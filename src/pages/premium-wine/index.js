import PremiumWineView from 'views/Customer/RoyalCollection'

const PremiumWinePage = () => {
  return <PremiumWineView />
}

// Force server-side rendering to avoid Html import issues
export async function getServerSideProps() {
  return {
    props: {},
  }
}

export default PremiumWinePage
