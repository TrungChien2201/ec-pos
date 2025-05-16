import PermissionError from 'views/PermissionError/PermissionError'

const UnauthorizedPage = () => {
  return <PermissionError />
}

// Force server-side rendering to avoid Html import issues
export async function getServerSideProps() {
  return {
    props: {},
  }
}

export default UnauthorizedPage
