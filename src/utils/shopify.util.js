import { createStorefrontApiClient } from '@shopify/storefront-api-client'
import Client from 'shopify-buy'

export const shopifyClient = Client.buildClient({
  domain: process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN || 'mystoretestgem.myshopify.com',
  storefrontAccessToken:
    process.env.NEXT_PUBLIC_SHOPIFY_ACCESS_TOKEN || '54b05506225de06b0c250841f49bbefc',
    language: 'en'
})

export const shopifyStorefontClient = createStorefrontApiClient({
  storeDomain: process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN || 'mystoretestgem.myshopify.com',
  apiVersion: '2023-10',
  language: 'en',
  publicAccessToken:
  process.env.NEXT_PUBLIC_SHOPIFY_ACCESS_TOKEN || '54b05506225de06b0c250841f49bbefc',
})
