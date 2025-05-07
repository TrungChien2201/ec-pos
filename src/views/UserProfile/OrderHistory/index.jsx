/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useCallback, useState, useEffect } from 'react'

import { useInfiniteQuery } from '@tanstack/react-query'

import EmptyData from 'components/EmptyData'
import OrderItem from 'components/OrderItem'

import { getOrders } from 'services/order'

const OrderHistory = () => {
  const [page, setPage] = useState(1)

  const loaderRef = useRef(null)
  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery(
    ['OrderHistory'],
    getOrders,
    {
      getNextPageParam: (lastPage) => lastPage.nextPage,
    },
  )

  const handleObserver = useCallback(
    (entries) => {
      const target = entries[0]
      if (target.isIntersecting && hasNextPage && !isFetching) {
        setPage((prevPage) => prevPage + 1)
        fetchNextPage()
      }
    },
    [hasNextPage, isFetching, fetchNextPage],
  )
  const options = {
    root: null,
    rootMargin: '20px',
    threshold: 1.0,
  }
  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, options)
    if (loaderRef.current) {
      observer.observe(loaderRef.current)
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current)
      }
    }
  }, [handleObserver, options])

  const renderItems = data?.pages
    ?.flat()
    ?.map((item, index) => <OrderItem item={item} key={index} />)
  return (
    <section className='space-y-2 flex-grow'>
      {renderItems && renderItems.length ? renderItems : <EmptyData />}
      <div ref={loaderRef} />
    </section>
  )
}

export default OrderHistory
