import RoyalCollectionView from 'views/Customer/Buckingham/BuckinghamSelection'

const RoyalCollection = () => {
  return <RoyalCollectionView />
}

// Force server-side rendering to avoid Html import issues
export async function getServerSideProps() {
  return {
    props: {},
  }
}

export default RoyalCollection
