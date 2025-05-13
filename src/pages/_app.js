import { useEffect, useMemo, useState } from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools' // Add this import
import { useSelector, Provider } from 'react-redux'
import dynamic from 'next/dynamic'
import { domMax, LazyMotion } from 'framer-motion'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import AuthGuard from 'components/AuthGuard'
import Head from 'next/head'
// import { appWithTranslation } from 'next-i18next';
import ScrollToTop from 'components/ScrollToTop'
import ModalWarningAge from 'components/modals/ModalWarningAge'
import { getMe, getToken, logout } from 'services/auth'
import { getCartAPI, getCartProduct, setCart } from 'services/cart'
import { QUERY_KEY_CLIENT_PERSONAL_INFO } from 'common/api'
import { initCollection } from 'store/collections'
import { initCountCart } from 'store/countCart'
import { initMenu, initHomeSection } from 'store/menus'
import { initUser, initCountOrder, logoutUser, setLocale } from 'store/user'
import { shopifyClient } from 'utils/shopify.util'
import { getKeysLanguage } from 'services/language'
import { getMenu, HOME_SECTION, LANGUAGE, PRIMARY_COLOR, SECONDARY_COLOR } from 'common/constant'
// import { queryClient } from 'utils/queryClient';
import { CustomProvider } from 'provider/CustomProvider'
import isEmpty from 'lodash/isEmpty'
import 'utils/dayjs'
import { store } from '../store'
import 'assets/tailwind.css';
import 'utils/i18n'
// Global styles for SlickSlider
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const ConfigProvider = dynamic(() => import('antd').then((mod) => mod.ConfigProvider), { ssr: false });
const jaJP = dynamic(() => import('antd/es/locale/ja_JP').then((mod) => mod.default), { ssr: false });

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());

  const handleLogout = async () => {
    queryClient.invalidateQueries([QUERY_KEY_CLIENT_PERSONAL_INFO, getToken()])
    queryClient.removeQueries([QUERY_KEY_CLIENT_PERSONAL_INFO, getToken()])
    setCart([], false)
    store.dispatch(initCountCart(0))
    store.dispatch(logoutUser())
    logout()
    await getUser()
    // Prepend basePath to redirect URL
    const basePath = process.env.NEXT_PUBLIC_BASE_URL || '';
    window.location.href = `${basePath}/home`;
  }

  const getUser = async (updateCart = false) => {
    const token = getToken()
    if (!token) {
      store.dispatch(logoutUser())
      return
    }
    try {
      const data = await getMe()
      if (data && data.user) {
        if (updateCart) {
          await getCartAPI()
          const cartProduct = getCartProduct()
          store.dispatch(initCountCart(cartProduct.length))
        }
        store.dispatch(initUser(data.user))
        store.dispatch(initCountOrder(data.countOrder))
      }
    } catch (e) {
      if (e.response && e.response.status === 400) {
        await handleLogout()
        return
      }
      store.dispatch(logoutUser())
    }
  }

  const getLanguage = async () => {
    try {
      const { data } = await getKeysLanguage()
      const language = localStorage.getItem('locale') || LANGUAGE[0].value
      console.log(data, language, 'data')

      store.dispatch(setLocale(data[language]))
    } catch (error) {
      console.error('Error fetching language:', error)
    }
  }

  useEffect(() => {
    getUser(true)
    getLanguage()
    const interval = setInterval(() => {
      getUser()
    }, 1800000)

    return () => clearInterval(interval)
  }, [])

  // Nested component to use useSelector
  function AppContent() {
    const warning = useSelector((state) => state.warning)
    const locale = useSelector((state) => state.user.locale)
    const MENUS = useMemo(() => (!isEmpty(locale) ? getMenu(locale) : []), [locale])

    const getProduct = async () => {
      const products = await shopifyClient.collection.fetchAllWithProducts({
        first: 250,
        productsFirst: 250,
      })
      MENUS.map((doc) => {
        doc.childs.map((child) => {
          const collection = products.find(
            (collection) => collection.title.toLowerCase() === child.title?.toLowerCase(),
          )
          if (collection) {
            child.id = collection.id.split('/').pop()
            child.data = collection
          }
        })
      })

      HOME_SECTION.map((doc) => {
        doc.childs.map((child) => {
          const collection = products.find(
            (collection) =>
              collection.title.toLowerCase() === child.title.toLowerCase() ||
              collection.title.toLowerCase() === child?.titleOther?.toLowerCase(),
          )
          if (collection) {
            child.id = collection.id.split('/').pop()
            child.data = collection
          }
        })
      })

      if (products.length) {
        store.dispatch(initCollection(JSON.parse(JSON.stringify(products))))
        store.dispatch(initMenu(JSON.parse(JSON.stringify(MENUS))))
        store.dispatch(initHomeSection(JSON.parse(JSON.stringify(HOME_SECTION))))
      }
    }

    useEffect(() => {
      if (MENUS.length) {
        getProduct()
      }
    }, [MENUS])
    // Get the system title from environment variable
    const systemTitle = process.env.NEXT_PUBLIC_SYSTEM_TITLE || 'Signature';

    return (
      <>
        <Head>
          <title>{systemTitle}</title>
          <meta name="description" content={`${systemTitle} - Premium Products`} />
        </Head>
        <AuthGuard>
          <Component {...pageProps} />
        </AuthGuard>
        {warning.showModal && <ModalWarningAge linkRedriect={warning.linkRedriect} />}
      </>
    )
  }

  return (
    <div className='font-roboto'>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <HelmetProvider>
            <LazyMotion features={domMax} strict>
              <CustomProvider>
                <ConfigProvider
                  locale={jaJP}
                  theme={{
                    token: {
                      colorPrimary: PRIMARY_COLOR,
                      borderRadius: 4,
                      colorText: 'rgba(0, 0, 0, 0.6)',
                      fontFamily: "'Roboto', sans-serif",
                      colorLink: PRIMARY_COLOR,
                      colorLinkHover: SECONDARY_COLOR,
                      colorLinkActive: SECONDARY_COLOR,
                    },
                  }}
                >
                  <ScrollToTop>
                    <AppContent />
                  </ScrollToTop>
                </ConfigProvider>
              </CustomProvider>
            </LazyMotion>
          </HelmetProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </Provider>
    </div>
  )
}

export default MyApp
