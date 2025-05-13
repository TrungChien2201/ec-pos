import ProductDetailView from 'views/Customer/Products/ProductDetail'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import { shopifyClient } from 'utils/shopify.util'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const ProductDetail = ({ productData }) => {
  const router = useRouter()
  const { id } = router.query

  // Get the system title from environment variable
  const systemTitle = process.env.NEXT_PUBLIC_SYSTEM_TITLE || 'Signature'
  // Get locale for potentially localized descriptions
  const locale = useSelector((state) => state.user.locale)

  // State for product data (from server or client)
  const [product, setProduct] = useState(productData ? JSON.parse(productData) : null)
  const [loading, setLoading] = useState(!productData)

  // Fallback to client-side fetching if server-side props are not available
  useEffect(() => {
    if (!productData && id) {
      const fetchProduct = async () => {
        try {
          const fetchedProduct = await shopifyClient.product.fetch(`gid://shopify/Product/${id}`)
          setProduct(fetchedProduct)
        } catch (error) {
          console.error('Error fetching product on client side:', error)
          // Redirect to home page if product cannot be fetched
          router.push('/home')
        } finally {
          setLoading(false)
        }
      }

      fetchProduct()
    }
  }, [productData, id, router])
  // Set page title and description
  const pageTitle = product
    ? `${systemTitle} - ${product.title}`
    : `${systemTitle} - Product Details`

  const pageDescription = product
    ? product.description?.substring(0, 160) || locale?.['product.meta.description'] || 'View product details and specifications.'
    : locale?.['product.meta.description'] || 'Explore our premium product details, specifications, and pricing information.'

  // Show loading indicator while fetching product data
  if (loading) {
    return (
      <>
        <Head>
          <title>{`${systemTitle} - Loading...`}</title>
        </Head>
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
            </div>
            <p className="mt-2">Loading product information...</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="product" />
        {product?.images?.[0]?.src && (
          <meta property="og:image" content={product.images[0].src} />
        )}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        {product?.images?.[0]?.src && (
          <meta name="twitter:image" content={product.images[0].src} />
        )}
      </Head>
      <ProductDetailView />
    </>
  );
};

// Fetch product data on the server side
export async function getServerSideProps(context) {
  const { id } = context.params;

  // For development environment, disable certificate verification
  if (process.env.NODE_ENV === 'development') {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
  }

  try {
    // Fetch product data from Shopify
    const product = await shopifyClient.product.fetch(`gid://shopify/Product/${id}`);

    // Reset the NODE_TLS_REJECT_UNAUTHORIZED setting if we changed it
    if (process.env.NODE_ENV === 'development') {
      process.env.NODE_TLS_REJECT_UNAUTHORIZED = '1';
    }

    // Return the product data as props
    // We need to stringify and then parse the product data to handle non-serializable values
    return {
      props: {
        productData: JSON.stringify(product),
      },
    };
  } catch (error) {
    console.error('Error fetching product:', error);

    // Reset the NODE_TLS_REJECT_UNAUTHORIZED setting if we changed it
    if (process.env.NODE_ENV === 'development') {
      process.env.NODE_TLS_REJECT_UNAUTHORIZED = '1';
    }

    // Return empty product data if there's an error
    return {
      props: {
        productData: null,
      },
    };
  }
}

export default ProductDetail;
