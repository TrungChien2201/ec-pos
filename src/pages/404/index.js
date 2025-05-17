import NotFoudView from 'views/NotFound'

// Trang 404 không thể có getServerSideProps
// Thay vào đó, chúng ta sẽ sử dụng custom 404 page đơn giản
const NotFoundPage = () => {
  return <NotFoudView />
}

export default NotFoundPage
