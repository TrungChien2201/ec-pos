import { useEffect, useState } from 'react'

import { Typography } from 'antd'
import { t } from 'i18next'
import { useSelector } from 'react-redux'
import { useSearchParams, useLocation } from 'react-router-dom'

import { shopifyClient } from 'utils/shopify.util'

import * as CONSTANT from 'common/constant'

import Banner from './components/Banner'
import ItemList from './components/ItemList'
import ModalWarning from './components/ModalWarning'
import RecommendForYou from '../components/RecommendForYou'

const ProductList = () => {
  const [productRecommends, setProductRecommends] = useState([])
  const [searchParams] = useSearchParams()
  const location = useLocation()
  const isSearchPage = location.pathname === CONSTANT.SEARCH_PAGE_ROUTE
  const collections = useSelector((state) => state.collections)
  const menus = useSelector((state) => state.menus.menus)
  const [currentCollection, setCurrentCollection] = useState([])
  const [infoCollection, setInfoCollection] = useState(null)
  const collectionId = searchParams.get('collectionId')

  const getRecommendedProducts = async (productId) => {
    const products = await shopifyClient.product.fetchRecommendations(productId)
    setProductRecommends(products)
  }

  const getProductsByCollectionId = async () => {
    const productsArr = await (collections || [])?.filter((item) =>
      item?.id?.includes(collectionId),
    )
    if (productsArr?.length > 0) {
      const { products } = productsArr[0]
      setCurrentCollection(productsArr[0])
      menus.map((menu) => {
        menu.childs.map((child) => {
          if (child.title === productsArr[0]?.title || child.key === productsArr[0]?.title) {
            setInfoCollection(child)
          }
        })
      })
      if (products?.length > 0 && !isSearchPage) {
        const productId = products[0].id
        getRecommendedProducts(productId)
      }
    }
  }

  useEffect(() => {
    if (collectionId) {
      getProductsByCollectionId(collections)
    }
  }, [searchParams, collections, collectionId])
  return (
    <div>
      {isSearchPage ? (
        <div className='mt-[47px] bg-yellow-light-1 text-center py-3'>
          <Typography.Title className='mb-1'>{t('search.result_search_en')}</Typography.Title>
          <Typography className='text-xl font-normal!'>{t('search.result_search_jp')}</Typography>
        </div>
      ) : (
        <Banner currentCollection={currentCollection} infoCollection={infoCollection} />
      )}
      <ItemList collection={currentCollection} infoCollection={infoCollection} />
      {productRecommends?.length > 0 && !isSearchPage && (
        <RecommendForYou productRecommends={productRecommends} className='pb-[30px] lg:pb-[50px]' />
      )}
      <ModalWarning />
    </div>
  )
}

export default ProductList
