import { useEffect, useRef, useState } from 'react'

import { Input } from 'antd'
import cx from 'classnames'
import _isEmpty from 'lodash/isEmpty'
import { NumericFormat } from 'react-number-format'
import { useSearchParams } from 'react-router-dom'

import ButtonComponent from 'components/Button'
import SelectComponent from 'components/Select'

import { useClickOutSide } from 'hooks/useClickOutSide'
import IconChevronBottom from 'resourse/svg/IconChevronBottom'
import IconRight from 'resourse/svg/IconRight'
import { getProductsByFilter } from 'services/recommend'
import { shopifyClient } from 'utils/shopify.util'

import { SORTKEY } from 'common/constant'

import { OPTION_STATUS, OPTION_TYPE, STATUS_FILTER, TYPE_FILTER } from './constants'
import ProductItem from '../../components/ProductItem'

const getSortType = (type) => {
  switch (type) {
    case TYPE_FILTER.TITLE_ASC:
      return {
        sortKey: SORTKEY.TITLE,
        reverse: false,
      }
    case TYPE_FILTER.TITLE_DESC:
      return {
        sortKey: SORTKEY.TITLE,
        reverse: true,
      }
    case TYPE_FILTER.PRICE_ASC:
      return {
        sortKey: SORTKEY.PRICE,
        reverse: false,
      }
    case TYPE_FILTER.PRICE_DESC:
      return {
        sortKey: SORTKEY.PRICE,
        reverse: true,
      }
    case TYPE_FILTER.CREATED_AT_ASC:
      return {
        sortKey: SORTKEY.CREATED,
        reverse: false,
      }
    case TYPE_FILTER.CREATED_AT_DESC:
      return {
        sortKey: SORTKEY.CREATED,
        reverse: true,
      }
    case TYPE_FILTER.BEST_SELLER:
      return {
        sortKey: SORTKEY.BEST_SELLING,
        reverse: false,
      }

    default:
      return {
        sortKey: SORTKEY.BEST_SELLING,
        reverse: true,
      }
  }
}

const getSortStatus = (status) => {
  switch (status) {
    case STATUS_FILTER.AVAILABLE:
      return {
        status: true,
      }
    case STATUS_FILTER.SOLD_OUT:
      return {
        status: false,
      }
    default:
      return {
        status: null,
      }
  }
}

const ItemList = ({ collection, infoCollection }) => {
  const [searchParams] = useSearchParams()
  const [type, setType] = useState(null)
  const [status, setStatus] = useState(null)
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const title = searchParams.get('title')
  const collectionId = searchParams.get('collectionId')
  const [productList, setProductList] = useState(collection?.products || [])
  const [visible, setVisible] = useState(false)
  const myRef = useRef(null)

  const [maxListPrice, setMaxListPrice] = useState()

  const onClickOutSide = () => {
    setVisible(false)
  }

  useClickOutSide({
    ref: myRef,
    callback: onClickOutSide,
  })

  const fetchProducts = async () => {
    try {
      const { sortKey, reverse } = getSortType(type)
      const { status: available } = getSortStatus(status)
      const min = minPrice || 1
      const max = maxPrice || 10000000
      let products = []
      if (collectionId) {
        if (type || status || minPrice || maxPrice) {
          const params = {
            min,
            max,
            collectionHandle: collection?.handle,
            sortKey,
            reverse,
            limit: 250,
            available,
          }
          products = await getProductsByFilter(params)
        }
        setProductList(collection?.products)
      } else {
        let query = `(variants.price:>=${min} variants.price:<=${max})`
        if (title) {
          query += `AND (title:*${title}*)`
        }
        products = await shopifyClient.product.fetchQuery({
          first: 250,
          sortKey,
          query,
          reverse,
        })
      }
      setProductList(products)
    } catch (error) {
      console.log({ error })
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [type, status, minPrice, maxPrice, title, collectionId, collection?.products])

  useEffect(() => {
    if (collection?.products) setProductList(collection?.products)
  }, [collection])

  const onClear = () => {
    setType(null)
    setStatus(null)
    setMinPrice('')
    setMaxPrice(null)
  }

  const getMaxPrice = () => {
    let max = 0
    if (!_isEmpty(productList)) {
      productList?.map((item) => {
        const price = Number(item?.variants?.[0]?.price?.amount?.split('.')?.[0])
        if (Number(price) > max) max = price
      })
    }
    setMaxListPrice(max)
  }

  useEffect(() => {
    getMaxPrice()
  }, [productList])

  return (
    <div className='px-[8px] md:px-[30px] lg:px-0 py-[16px] lg:py-10 bg-white'>
      {/* <div className='block items-center gap-[10px] mb-[20px] lg:flex'>
        <div className='flex items-center gap-[10px] mb-[10px] lg:mb-0'>
          <SelectComponent
            value={type}
            className='min-w-[100px] w-1/2 lg:w-fit md:min-w-[200px] min-h-[44px]'
            options={OPTION_TYPE}
            placeholder='並び替え'
            onChange={(e) => setType(e)}
          />
          <SelectComponent
            value={status}
            className='min-w-[100px] w-1/2 lg:w-fit md:min-w-[200px] min-h-[44px]'
            options={OPTION_STATUS}
            placeholder='出品状況'
            onChange={(e) => setStatus(e)}
          />
        </div>

        <div
          ref={myRef}
          className='mb-[10px] relative bg-white border-solid border-[1px] border-[#ABABAB] rounded-[4px] lg:mb-0'
        >
          <span
            className='flex items-center justify-between min-h-[44px] px-[11px] min-w-[300px] cursor-pointer'
            onClick={() => setVisible(!visible)}
          >
            価格 <IconChevronBottom />
          </span>
          <div
            className={cx('absolute top-[110%] bg-white p-[15px] w-full rounded-[4px] z-10', {
              hidden: !visible,
            })}
          >
            <div className='flex items-center justify-between mb-[10px] text-[12px]'>
              <span className='flex items-center'>
                最高価格は¥
                {maxListPrice && (
                  <NumericFormat
                    displayType='text'
                    value={Math.round(maxListPrice)}
                    thousandSeparator=','
                    decimalScale={3}
                    className='px-[3px]'
                  />
                )}
                です
              </span>
              <span
                className='text-black text-[14px] underline font-medium cursor-pointer'
                onClick={() => {
                  setMinPrice('')
                  setMaxPrice('')
                }}
              >
                リセット
              </span>
            </div>
            <div className='flex items-center justify-between gap-[5px]'>
              <span>¥</span>
              <Input
                value={minPrice}
                className='w-[100px] h-[32px]'
                placeholder='から'
                onChange={(e) => setMinPrice(e?.target?.value)}
              />
              <IconRight className='w-[20px]' />
              <span>¥</span>
              <Input
                value={maxPrice}
                className='w-[100px] h-[32px]'
                placeholder='まで'
                onChange={(e) => setMaxPrice(e?.target?.value)}
              />
            </div>
          </div>
        </div>

        <ButtonComponent
          className='flex items-center px-2'
          title='すべてを削除する'
          onClick={onClear}
        />
      </div> */}
      {/* <div className='mb-[20px]'>{productList?.length || 0} 個の商品</div> */}
      <div className='lg:container lg:mx-auto'>
        <div
          className={cx(
            'flex items-start flex-wrap gap-y-5 -mx-[10px]',
            productList.length < 3
              ? 'justify-center'
              : productList.length === 3
              ? 'lg:justify-center'
              : '',
          )}
        >
          {productList?.map((product) => (
            <ProductItem
              className='flex self-stretch w-1/2 sm:w-1/3 lg:w-1/4 2xl:w-1/5 px-[10px] mb1-5'
              key={product?.id}
              product={product}
            />
          ))}
        </div>
        {infoCollection?.contentText && (
          <div
            className='max-w-[884px] mx-auto mt-8 lg:mt-10 text-base lg:text-[22px] leading-7 text-center text-black font-medium'
            dangerouslySetInnerHTML={{ __html: infoCollection.contentText }}
          />
        )}
      </div>
    </div>
  )
}

export default ItemList
