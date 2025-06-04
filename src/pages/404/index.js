import NotFoundView from 'views/NotFound'

// Page 404 can not have getServerSideProps
// So, we can customer 404 page simple
const NotFoundPage = () => {
  return <NotFoundView />
}

export default NotFoundPage
