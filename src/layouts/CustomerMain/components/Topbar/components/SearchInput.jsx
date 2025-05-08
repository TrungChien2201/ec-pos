import { useEffect, useRef, useState } from 'react'

import IconSearch from 'resourse/svg/IconSearch'

import { SEARCH_PAGE_ROUTE } from 'common/constant'
import * as UTILITY from 'common/utility'

import { ButtonSearch, InputStyled } from './styled'
import { useRouter } from 'next/router'
/**
 *
 * @param {variant} 'dark' | 'light'
 * @returns
 */
const SearchInput = ({
  expand = true,
  setExpand = () => {},
  variant = 'dark',
  focusOnMounted = true,
}) => {
  const router = useRouter()
  const searchParams = router.query;
  const [title, setTitle] = useState('')
  const qParam = searchParams?.title
  const collectionId = searchParams?.collectionId
  const inputRef = useRef(null)

  const handleShowInput = () => setExpand((prev) => !prev)

  const onChange = (e) => {
    const { value } = e.target
    setTitle(value)
  }

  const onSearch = () => {
    let query = UTILITY.parseQuery()
    if (!title) {
      setTitle('')
      setExpand(false)
      delete query.title
    } else {
      query = { title }
    }
    if (!title) return
    const redirectUrl = `${SEARCH_PAGE_ROUTE}?${UTILITY.stringifyQuery(query)}`
    router.push(redirectUrl)
  }

  const onKeyUp = (e) => {
    if (e.keyCode === 13) {
      onSearch()
    }
  }

  useEffect(() => {
    if (inputRef.current && focusOnMounted) {
      inputRef.current.focus()
    }
  }, [expand])

  useEffect(() => {
    setExpand(!!qParam)
    setTitle(qParam)
  }, [qParam])

  useEffect(() => {
    if (collectionId) {
      setExpand(false)
      setTitle('')
    }
  }, [collectionId])

  if (!expand) {
    return (
      <ButtonSearch icon={<IconSearch width='1rem' height='1rem' />} onClick={handleShowInput} />
    )
  }

  return (
    <InputStyled
      prefix={<IconSearch onClick={onSearch} width='1rem' height='1rem' />}
      onChange={onChange}
      onBlur={onSearch}
      onKeyUp={onKeyUp}
      bordered={false}
      value={title}
      ref={inputRef}
      variant={variant}
    />
  )
}

export default SearchInput
