import { shopifyStorefontClient } from 'utils/shopify.util'

export const fetchSeasonRecommend = async () => {
  const response = await shopifyStorefontClient.request(
    `	{
        products(query: "tag:season recommend", first: 100) {
          edges {
            node {
              id
              tags
              title
              metafields(
                identifiers: [{namespace: "custom", key: "season_recommend_order"}, {namespace: "custom", key: "season_recommend_image"}]
              ) {
                id
                namespace
                value
                key
                reference {
                  ... on MediaImage {
                    id
                    image {
                      altText
                      height
                      id
                      src
                      width
                      originalSrc
                    }
                  }
                }
              }
            }
          }
        }
      }

    `,
    {
      apiVersion: '2024-10',
    },
  )
  return response?.data?.products?.edges || []
}

export default {
  fetchSeasonRecommend,
}
