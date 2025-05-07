import authConfig from 'common/endpoints/auth'
import cartConfig from 'common/endpoints/cart'
import { httpClient } from 'utils/api.util'
import { shopifyClient } from 'utils/shopify.util'

import * as CONSTANT from 'common/constant'

export const getCart = () => {
  const cart = localStorage.getItem(cartConfig.storageCartKeyName)
  return cart ? JSON.parse(cart) : []
}
export const updateCartAPI = () => {
  const cart = getCart()
  const dataCart = cart?.map((doc) => {
    return {
      shopify_product_id: doc.id,
      shopify_option_id: doc.shopify_option_id,
      quantity: doc.quantity,
      type: doc.type,
      shopify_parent_id: doc.shopify_parent_id,
    }
  })
  return httpClient.post(cartConfig.updateCartProductEndpoint, { cart_items: dataCart })
}

export const setCart = (payload, isUpdateAPI = true) => {
  localStorage.setItem(cartConfig.storageCartKeyName, JSON.stringify(payload))
  if (localStorage.getItem(authConfig.storageTokenKeyName) && isUpdateAPI) {
    updateCartAPI()
  }
}

export const getCartAPI = async () => {
  const { data } = await httpClient.get(cartConfig.getCartProductEndpoint)
  if (data.length) {
    const cartStorage = data.map((doc) => {
      return {
        id: doc.shopify_product_id,
        shopify_option_id: doc.shopify_option_id,
        quantity: doc.quantity,
        type: doc.type,
        shopify_parent_id: doc.shopify_parent_id,
      }
    })
    setCart(cartStorage, false)
  } else {
    updateCartAPI()
  }
}

export const getCountCart = () => {
  const cart = localStorage.getItem(cartConfig.storageCartKeyName)
  return cart ? JSON.parse(cart).length : 0
}

export const getProductsGift = async () => {
  const products = await shopifyClient.product.fetchQuery({
    query: 'vendor:Wrapped',
  })
  if (products?.length) {
    let listVariant = []
    products.map((doc) => (listVariant = listVariant.concat(doc.variants)))
    return listVariant
  }
  return []
}

export const getProductsGiftColorVariant = async () => {
  const products = await shopifyClient.product.fetchQuery({
    query: 'vendor:WrappedColor',
  })
  if (products?.length) {
    let listVariant = []
    products.map((doc) => (listVariant = listVariant.concat(doc.variants)))
    return listVariant
  }
  return []
}

export const getCartProduct = () => {
  const cart = getCart()
  return cart.filter((doc) => doc.type == CONSTANT.TYPE_PRODUCT.PRODUCT)
}

export const getCartWrapped = () => {
  const cart = getCart()
  return cart.filter((doc) => doc.type == CONSTANT.TYPE_PRODUCT.WRAPPED)
}

export const getSettingPoint = async () => {
  const { setting } = await httpClient.get(cartConfig.getSettingPointEndpoint)
  return setting
}
