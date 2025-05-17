import LineAccessView from 'views/LineAccess'

const LineAccessPage = () => {
  return <LineAccessView />
}

// Force server-side rendering to avoid Html import issues
export async function getServerSideProps() {
  return {
    props: {},
  }
}

export default LineAccessPage
