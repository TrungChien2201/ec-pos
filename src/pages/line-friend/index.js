import LineFriendView from 'views/LineFriend'

const LineFriendPage = () => {
  return <LineFriendView />
}

// Force server-side rendering to avoid Html import issues
export async function getServerSideProps() {
  return {
    props: {},
  }
}

export default LineFriendPage
