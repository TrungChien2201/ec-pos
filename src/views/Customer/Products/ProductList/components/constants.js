import { SORTKEY } from 'common/constant'

export const TYPE_FILTER = {
  TITLE_ASC: 1,
  TITLE_DESC: 2,
  PRICE_ASC: 3,
  PRICE_DESC: 4,
  CREATED_AT_ASC: 5,
  CREATED_AT_DESC: 6,
  BEST_SELLER: 7,
}

export const STATUS_FILTER = {
  AVAILABLE: 1,
  SOLD_OUT: 2,
}

export const OPTION_TYPE = [
  {
    value: TYPE_FILTER.TITLE_ASC,
    label: 'アルファベット順, A-Z',
  },
  {
    value: TYPE_FILTER.TITLE_DESC,
    label: 'アルファベット順, Z-A',
  },
  {
    value: TYPE_FILTER.PRICE_ASC,
    label: '価格の安い順',
  },
  {
    value: TYPE_FILTER.PRICE_DESC,
    label: '価格の高い順',
  },
  {
    value: TYPE_FILTER.CREATED_AT_ASC,
    label: '古い商品順',
  },
  {
    value: TYPE_FILTER.CREATED_AT_DESC,
    label: '新着順',
  },
  {
    value: TYPE_FILTER.BEST_SELLER,
    label: 'ベストセラー',
  },
]

export const OPTION_STATUS = [
  {
    value: STATUS_FILTER.AVAILABLE,
    label: '在庫あり',
  },
  {
    value: STATUS_FILTER.SOLD_OUT,
    label: '在庫切れ',
  },
]
