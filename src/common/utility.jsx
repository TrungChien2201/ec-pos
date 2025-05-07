import { useEffect, useRef, useState } from 'react'

import { generate } from '@ant-design/colors'
import { Tag } from 'antd'
import dayjs from 'dayjs'
import Resizer from 'react-image-file-resizer'

import * as CONSTANT from 'common/constant'

export const GET_ROUTE_BY_KEY = (routes, key) => {
  return routes.find((r) => r?.page === key)?.route
}

export const GET_SELECTED_KEY_BY_ROUTE = (routes, route) => {
  return routes.filter((r) => !r?.isSubMenu)?.find((r) => route?.includes(r?.route))?.page
}

export const GET_OPEN_KEY_BY_ROUTE = (routes, route) => {
  return routes.filter((r) => r?.isSubMenu)?.find((r) => route?.includes(r?.route))?.page
}

export const ROUND_UP_BILLABLE_HOUR = (duration) => {
  return (
    duration -
    (duration % CONSTANT.RENTAL_BILLABLE_HOURS) +
    ((duration % CONSTANT.RENTAL_BILLABLE_HOURS > 0 || duration === 0) &&
      CONSTANT.RENTAL_BILLABLE_HOURS)
  )
}

export const CALCULATE_DURATION_OF_RESERVATION = (start, end) => {
  if (start && end) {
    return dayjs(end).diff(dayjs(start), 'hour')
  } else {
    return 0
  }
}

export const CALCULATE_BILLABLE_HOUR = (start, end) => {
  if (start && end) {
    const rentDuration = CALCULATE_DURATION_OF_RESERVATION(start, end)

    return ROUND_UP_BILLABLE_HOUR(rentDuration)
  } else {
    return 0
  }
}

export const CALCULATE_BILLABLE_HOUR_PRICE = (start, end, price) => {
  const billableHour = CALCULATE_BILLABLE_HOUR(start, end)

  return (billableHour / CONSTANT.RENTAL_BILLABLE_HOURS) * price
}

export const CHANGE_HOUR_TO_HUMAN_READABLE = (hours) => {
  if (hours) {
    return hours >= 24
      ? `${Math.floor(hours / 24)}日${hours % 24 > 0 ? `${hours % 24}時間` : ''}`
      : `${hours}時間`
  } else {
    return 'ー'
  }
}

export const GET_RANGE_OF_DAYS = (start, end, intervalAmount, intervalUnit) => {
  const range = []
  let currentDate = dayjs(start)

  while (currentDate.isSameOrAfter(start) && currentDate.isSameOrBefore(end)) {
    range.push(currentDate.toISOString())
    currentDate = currentDate.add(intervalAmount, intervalUnit)
  }

  return range
}

export const GROUP_ARRAY_BY_DATE = (array, dateField, groupedArrayName, format) => {
  const groups = array.reduce((acc, cur) => {
    if (!acc[dayjs(cur[dateField]).format(format)]) {
      acc[dayjs(cur[dateField]).format(format)] = []
    }

    acc[dayjs(cur[dateField]).format(format)].push(cur)

    return acc
  }, {})

  return Object.keys(groups).map((date) => {
    return {
      date,
      [groupedArrayName]: groups[date],
    }
  })
}

export const GET_TOTAL_WITHOUT_DISCOUNT = (rentTotal, optionTotal) => {
  return Number(rentTotal || 0) + Number(optionTotal || 0)
}

export const CHECK_IF_CAMPAIGN = (info) => {
  return (info?.campaignRentTotal || 0) > 0
}

export const CHECK_IF_CAMPAIGN_PRICE = (info) => {
  return (info?.campaignPrice || 0) > 0
}

export const GET_CAR_RENT_TOTAL = (info) => {
  if (CHECK_IF_CAMPAIGN(info)) {
    return Number(info?.campaignRentTotal || 0) || 0
  } else {
    return Number(info?.rentTotal || 0) || 0
  }
}

export const GET_CAMPAIGN_RENT_TOTAL = (info) => {
  return Number(info?.campaignRentTotal || 0) || 0
}

export const GET_NORMAL_RENT_TOTAL = (info) => {
  return Number(info?.rentTotal || 0) || 0
}

export const CHECK_IS_LATE_CHECK_IN = (reservation) => {
  return dayjs().isAfter(reservation?.startDate)
}

export const CHECK_IS_LATE_CHECK_OUT = (reservation) => {
  return dayjs().isAfter(reservation?.endDate)
}

export const CHECK_IS_CHECK_IN = (reservation) => {
  return !reservation?.timeCheckIn && !reservation?.timeCheckOut
}

export const CHECK_IS_CHECK_OUT = (reservation) => {
  return reservation?.timeCheckIn && !reservation?.timeCheckOut
}

export const CHECK_IS_COMPLETE = (reservation) => {
  return reservation?.timeCheckIn && reservation?.timeCheckOut
}

export const GET_AUDIENCE_STATUS = (value) => {
  switch (value) {
    case 'IN_PROGRESS':
      return (
        <Tag color='#fcbf49' className='mr-0'>
          作成中
        </Tag>
      )
    case 'READY':
      return (
        <Tag color='#06d6a0' className='mr-0'>
          完成
        </Tag>
      )
    case 'FAILED':
      return (
        <Tag color='#ff6b6b' className='mr-0'>
          エラー
        </Tag>
      )
    case 'EXPIRED':
      return (
        <Tag color='#f77f00' className='mr-0'>
          期限切れ
        </Tag>
      )
    case 'INACTIVE':
      return (
        <Tag color='#38a3a5' className='mr-0'>
          無効
        </Tag>
      )
    case 'ACTIVATING':
      return (
        <Tag color='#52b788' className='mr-0'>
          有効化中
        </Tag>
      )
    default:
      return ''
  }
}

export const USE_IS_MOUNTED_REF = () => {
  const isMountedRef = useRef(null)

  useEffect(() => {
    isMountedRef.current = true

    return () => {
      isMountedRef.current = false
    }
  })

  return isMountedRef
}

export const USE_WINDOW_SIZE = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}

export const COLOR_ADJUST = (color, amount) => {
  const colors = generate(color)

  return colors[amount - 100] || colors[0]
}

export const RE_ORDER = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

export const POSTAL_CODE_INSERT_CHARACTER = (str, index, value) => {
  return str.substr(0, index) + value + str.substr(index)
}

export const RESIZE_FILE = (file, type) => {
  const resizer = Resizer.default || Resizer

  return new Promise((resolve) => {
    resizer.imageFileResizer(
      file,
      1024,
      1024,
      'JPEG',
      80,
      0,
      (uri) => {
        resolve(uri)
      },
      type,
    )
  })
}

export const NUM_TO_JP = (num) => {
  const keta = ['', '千', '万', '億', '兆']

  let jaNum = ''
  let count = 0

  let temp = String(num).replace(',', '')

  // 千
  if (temp.length <= 3) {
    return temp
  } else {
    const n = `${temp.slice(-3) - 0}`
    jaNum = [n !== '0' ? `${n}${keta[count]}` : '', jaNum].join('')
    temp = `${(temp / 1000) | 0}` // eslint-disable-line no-bitwise
    count += 1
  }
  // 万
  if (temp.length > 1) {
    const n = `${temp.slice(-1) - 0}`
    jaNum = [n !== '0' ? `${n}${keta[count]}` : '', jaNum].join('')
    temp = `${(temp / 10) | 0}` // eslint-disable-line no-bitwise
    count += 1
  }
  // それ以降
  while (temp.length > 4) {
    const n = `${temp.slice(-4) - 0}`
    jaNum = [n !== '0' ? `${n}${keta[count]}` : '', jaNum].join('')
    temp = `${(temp / 10000) | 0}` // eslint-disable-line no-bitwise
    count += 1
  }

  jaNum = [temp !== '0' ? `${Number(temp).toLocaleString()}${keta[count]}` : '', jaNum].join('')

  return jaNum
}

export const PERCENTAGE_DIFFERENCE = (param) => {
  const { current, previous } = param

  return Math.round(((current - previous) / previous) * 100)
}

export const getImage = (url) => {
  return `${process.env.NEXT_PUBLIC_API_URL}/${url}`.replace('/uploads', '')
}

export function roundUpToNearestMultipleOfTwelve(num) {
  return (Math.ceil(num / 12) * 12) / 12
}

export function addAttributeInElementImgPreview() {
  const elementImgPreview = document.getElementsByClassName('ant-image-preview-img')
  const sizeImg = elementImgPreview.length

  if (sizeImg) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < sizeImg; i++) {
      const checkAttributeCrossOrigin = elementImgPreview[i].getAttribute('crossOrigin')

      if (!checkAttributeCrossOrigin) {
        elementImgPreview[i].setAttribute('crossOrigin', 'anonymous')
      }
    }
  }
}

export const GET_RESERVATIONS_COUPON = (reservations) => {
  if (reservations && reservations?.length > 0) {
    return reservations.find((item) => item.type === 5)
  } else {
    return {}
  }
}
export const parseQuery = () => Object.fromEntries(new URLSearchParams(window.location.search))
export const stringifyQuery = (objectQuery) => new URLSearchParams(objectQuery).toString()
