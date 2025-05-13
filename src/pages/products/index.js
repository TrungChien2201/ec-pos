import ProductListView from 'views/Customer/Products/ProductList'
import Head from 'next/head'
import { useSelector } from 'react-redux'

const ProductList = () => {
  // Get the system title from environment variable
  const systemTitle = process.env.NEXT_PUBLIC_SYSTEM_TITLE || 'Signature'
  // Get locale for potentially localized descriptions
  const locale = useSelector((state) => state.user.locale)

  // Set page title and description
  const pageTitle = `${systemTitle} - Products`
  const pageDescription = locale?.['products.meta.description'] ||
    'Browse our extensive collection of premium products. Find luxury wines, gourmet foods, caviar, and exclusive items at Signature.'

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
      <ProductListView />
    </>
  );
};

export default ProductList;
