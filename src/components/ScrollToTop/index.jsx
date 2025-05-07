import { ROUTES_CLIENT_LAYOUT, ROUTES_MINIMAL_LAYOUT } from '@/src/common/constant'
import { useRouter } from 'next/router'
import { lazy, useEffect } from 'react'
import CustomerMain from 'layouts/CustomerMain/CustomerMain'
import ClientMain from 'layouts/ClientMain/ClientMain'
import Minimal from 'layouts/Minimal/Minimal'

const ScrollToTop = (props) => {
  const {pathname} = useRouter()
  const path = pathname.replace(process.env.NEXT_PUBLIC_BASE_URL, "")

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [path])

  // if(ROUTES_MINIMAL_LAYOUT.includes(path)) {
  //   return <Minimal>{props.children}</Minimal>
  // }

  // if(ROUTES_CLIENT_LAYOUT.includes(path)) {
  //   return <ClientMain>{props.children}</ClientMain>
  // }

  return <Minimal>{props.children}</Minimal>
}

export default ScrollToTop
