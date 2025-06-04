import MushroomSelectionView from 'views/Customer/MushroomSelection/MushroomSelection'

const MushroomSelectionPage = () => {
  return <MushroomSelectionView />
}

// Force server-side rendering to avoid Html import issues
export async function getServerSideProps() {
  return {
    props: {},
  }
}

export default MushroomSelectionPage
