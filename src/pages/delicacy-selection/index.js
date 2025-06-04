import DelicacySelectionView from 'views/Customer/Delicacy/DelicacySelection'

const DelicacySelectionPage = () => {
  return <DelicacySelectionView />
}

// Force server-side rendering to avoid Html import issues
export async function getServerSideProps() {
  return {
    props: {},
  }
}

export default DelicacySelectionPage
