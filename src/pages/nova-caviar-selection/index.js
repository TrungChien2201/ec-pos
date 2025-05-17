import NovaCaviarSelectionView from 'views/Customer/NovaCaviarSelection/NovaCaviarSelection'

const NovaCaviarSelectionPage = () => {
  return (
    <div>
      <NovaCaviarSelectionView />
    </div>
  );
};

// Force server-side rendering to avoid Html import issues
export async function getServerSideProps() {
  return {
    props: {},
  }
}

export default NovaCaviarSelectionPage;
