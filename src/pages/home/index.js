import HomePage from "views/Customer/HomePage/HomePage"
import Head from 'next/head'
import { useSelector } from 'react-redux'

const Home = () => {
  // Get the system title from environment variable
  const systemTitle = process.env.NEXT_PUBLIC_SYSTEM_TITLE || 'Signature'
  // Get locale for potentially localized descriptions
  const locale = useSelector((state) => state.user.locale)

  // Set page title and description
  const pageTitle = `${systemTitle} - Home`
  const pageDescription = locale?.['home.meta.description'] ||
    'Discover premium products, luxury wines, caviar, and gourmet foods at Signature. Explore our exclusive collections and exceptional offerings.'

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
      </Head>
      <HomePage />
    </>
  )
}

export default Home;
