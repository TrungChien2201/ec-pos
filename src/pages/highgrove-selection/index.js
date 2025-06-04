import HighgroveSelectionView from 'views/Customer/HighgroveSelection/HighgroveSelection'

const HighgroveSelectionPage = () => {
  return <HighgroveSelectionView />
}

// Force server-side rendering to avoid Html import issues
export async function getServerSideProps() {
  return {
    props: {},
  }
}

export default HighgroveSelectionPage
