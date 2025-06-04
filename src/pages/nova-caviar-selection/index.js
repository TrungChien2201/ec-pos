import NovaCaviarSelectionView from 'views/Customer/NovaCaviarSelection/NovaCaviarSelection'

const NovaCaviarSelectionPage = () => {
  return <NovaCaviarSelectionView />
}

// Force server-side rendering to avoid Html import issues
export async function getServerSideProps() {
  return {
    props: {},
  }
}

export default NovaCaviarSelectionPage
