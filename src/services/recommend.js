import authConfig from 'common/endpoints/auth'
import recommendConfig from 'common/endpoints/recommend'
import { getProductInfo } from 'utils/product.util'
import { shopifyClient, shopifyStorefontClient } from 'utils/shopify.util'

export const setProductRecommendId = (id) => {
  localStorage.setItem(recommendConfig.storageRecommendIdKeyName, id)
}

export const getProductRecommendId = (id) => {
  return localStorage.getItem(recommendConfig.storageRecommendIdKeyName)
}

export const getListRecommend = async () => {
  const productId = localStorage.getItem(recommendConfig.storageRecommendIdKeyName)
  if (!productId) {
    return []
  }
  const products = await shopifyClient.product.fetchRecommendations(productId)
  return products
}

const filterProducts = (filter) => {
  const { available, min, max } = filter
  const conditions = []
  const price = {}
  if (available !== undefined && available !== null) {
    conditions.push(`available: ${available}`)
  }
  if (min !== undefined) {
    price.min = min
  }
  if (max !== undefined) {
    price.max = max
  }

  if (Object.keys(price).length > 0) {
    conditions.push(`price: { ${Object.keys(price).map((key) => `${key}: ${price[key]}`)} }`)
  }
  let str = ''
  for (let i = 0; i < conditions.length; i++) {
    str += `{${conditions[i]}},`
  }
  return `[ ${str.slice(0, -1)} ]`
}

// export const getProductsByFilter = async (query) => {
//   const { collectionHandle, sortKey, limit, reverse, available, min, max } = query
//   const strFilter = filterProducts({
//     available,
//     min,
//     max,
//   })
//   const productQuery = `
//     query AllProducts {
//       collection(handle: "${collectionHandle}") {
//         handle
//         products(first: ${limit}, filters: ${strFilter}, sortKey: ${sortKey}, reverse: ${reverse}) {
//           edges {
//             node {
//               createdAt
//               description
//               descriptionHtml
//               id
//               title
//               vendor
//               onlineStoreUrl
//               productType
//               updatedAt
//               priceRange {
//                 maxVariantPrice {
//                   amount
//                   currencyCode
//                 }
//                 minVariantPrice {
//                   amount
//                   currencyCode
//                 }
//               }
//             }
//           }
//         }
//       }
//     }`

//   const products = await shopifyStorefontClient.request(productQuery, {
//     apiVersion: '2023-10',
//   })
//   return products?.data?.collection?.products?.edges
// }

export const getProductsByFilter = async (query) => {
  const { collectionHandle, sortKey, limit, reverse, available, min, max } = query
  const strFilter = filterProducts({
    available,
    min,
    max,
  })
  const productQuery = `
    query AllProducts {
      collection(handle: "${collectionHandle}") {
        handle
        products(first: ${limit}, filters: ${strFilter}, sortKey: ${sortKey}, reverse: ${reverse}) {
          edges {
            node {
              createdAt
              description
              descriptionHtml
              id
              title
              vendor
              onlineStoreUrl
              productType
              updatedAt
              images (first: 2) {
                edges {
                  node {
                    id
                    src: url
                  }
                }
              }
              priceRange {
                maxVariantPrice {
                  amount
                  currencyCode
                }
                minVariantPrice {
                  amount
                  currencyCode
                }
              }
              variants(first: 2) {
                edges {
                  node {
                    id
                    image {
                      id
                      src: url
                      altText
                    }
                    price {
                      amount
                      currencyCode
                    }
                  }
                }
              }
            }
          }
        }
      }
    }`
  const products = await shopifyStorefontClient.request(productQuery, {
    apiVersion: '2023-10',
  })
  return getProductInfo(products.data?.collection?.products?.edges || [])
}

export const getMetafieldProductsGiftBoxById = async (id) => {
  const productQuery = `
    query getProductById {
      product(id: "${id}") {
        id
        metafield (
          namespace:"custom",
          key:"product_gift_box",
        ){
          id
          key
          type
          value
          
        }
      }
    }`
  const product = await shopifyStorefontClient.request(productQuery, {
    apiVersion: '2023-10',
  })
  try {
    return JSON.parse(product?.data?.product?.metafield?.value)
  } catch (e) {
    return []
  }
}
