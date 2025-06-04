import CaviarSelectionView from 'views/Customer/CaviarSelection/CaviarSelection'

const CaviarSelectionPage = () => {
  return <CaviarSelectionView />
}

// Force server-side rendering to avoid Html import issues
export async function getServerSideProps() {
  return {
    props: {},
  }
}

export default CaviarSelectionPage
