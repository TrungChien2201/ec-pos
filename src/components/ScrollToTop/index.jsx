import { ROUTES_CLIENT_LAYOUT, ROUTES_MINIMAL_LAYOUT } from '@/src/common/constant'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import CustomerMain from 'layouts/CustomerMain/CustomerMain'
import ClientMain from 'layouts/ClientMain/ClientMain'
import Minimal from 'layouts/Minimal/Minimal'
import { useSelector } from 'react-redux'

const ScrollToTop = ({ children, pageProps }) => {
  const { pathname } = useRouter()
  const path = pathname.replace(process.env.NEXT_PUBLIC_BASE_URL, '')
  const router = useRouter()
  const pageId = useSelector((state) => state.idRedirect.pageId)

  const scrollToElementWithOffset = (id, offset = 50) => {
    const element = document.getElementById(id)
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset
      const middleOffset = window.innerHeight / 2
      window.scrollTo({
        top: top - middleOffset + offset,
        behavior: 'smooth',
      })
    }
  }

  useEffect(() => {
    const exception = ['/home']
    if (exception.includes(router?.pathname) && pageId) {
      const timeout = setTimeout(() => {
        scrollToElementWithOffset(pageId, 100)
      }, 1000)

      return () => clearTimeout(timeout)
    } else {
      window.scrollTo(0, 0)
    }
  }, [path])

  if (ROUTES_MINIMAL_LAYOUT.includes(path)) {
    return <Minimal>{children}</Minimal>
  }

  if (ROUTES_CLIENT_LAYOUT.includes(path)) {
    return <ClientMain>{children}</ClientMain>
  }

  return <CustomerMain isFooterHomePage={pageProps?.isFooterHomePage}>{children}</CustomerMain>
}

export default ScrollToTop
