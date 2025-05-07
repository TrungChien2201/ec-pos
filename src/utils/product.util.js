export const getProductInfo = (listProduct) => {
  const listNewProduct = listProduct.map((doc) => {
    const product = { ...doc.node }
    const variants = product.variants.edges.map((doc) => doc.node)
    product.variants = variants
    const images = product.images.edges.map((doc) => doc.node)
    product.images = images
    return product
  })
  return listNewProduct
}
