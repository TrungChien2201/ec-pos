// ROUTES
export const ADMIN_LANDING_ROUTE = '/'
export const ADMIN_LOGIN_ROUTE = '/login'
export const ADMIN_REGISTER_ROUTE = '/register'
export const HOME_PAGE_ROUTE = '/home'
export const PRODUCT_PAGE_ROUTE = '/products'
export const SEARCH_PAGE_ROUTE = '/search'
export const CART_PAGE_ROUTE = '/cart'
export const ROYAL_COLLECTION_PAGE_ROUTE = '/premium-wine'
export const ROYAL_COLLECTIONS_PAGE_ROUTE = '/royal-collection'
export const CAVIAR_SELECTION_PAGE_ROUTE = '/caviar-selection'
export const COLLECTION_PAGE_ROUTE = '/collection/:id'
export const ADMIN_SETTINGS_ROUTE = '/settings'
export const CONTACT_PAGE_ROUTE = '/contact'
export const CLIENT_LOGIN_ROUTE = '/liff/login'
export const CLIENT_REGISTER_ROUTE = '/liff/register'
export const CLIENT_MEMBER_PROFILE_ROUTE = '/liff/profile'
export const MUSHROOM_SELECTION_PAGE_ROUTE = '/mushroom-selection'
export const NOVACAVIAR_PAGE_ROUTE = '/nova-caviar-selection'
export const HIGHGROVE_PAGE_ROUTE = '/highgrove-selection'
export const BUCKINGHAM_PAGE_ROUTE = '/buckingham-selection'
export const ROSEYS_MARK_PAGE_ROUTE = '/roseys-mark'
export const TABLE_WARRE_PAGE_ROUTE = '/table-ware'
export const DELICACY_PAGE_ROUTE = '/delicacy-selection'
export const ABOUT_GORILLA_ROUTE = '/about-gorilla'
export const ABOUT_MARABA_ROUTE = '/about-maraba'

export const LINE_ACCESS_ROUTE = '/line-access'
export const LINE_FRIEND_ROUTE = '/line-friend'
export const NOT_FOUND_ROUTE = '/404'
export const PERMISSION_ERROR_ROUTE = '/401'

export const USER_PROFILE = '/user-profile'

export const ROUTES_MINIMAL_LAYOUT = ["/404", "/401", "/line-friend", "/line-access", "/liff/login"]
export const ROUTES_CLIENT_LAYOUT = ["liff/profile"]

// PAGES
export const PAGE_ADMIN_DASHBOARD = 'ダッシュボード'
export const PAGE_ADMIN_SETTINGS = '設定'
export const PAGE_CLIENT_MEMBER_PROFILE = 'お客様情報'

export const ROUTES = [
  { route: HOME_PAGE_ROUTE, page: PAGE_ADMIN_DASHBOARD },
  { route: ADMIN_SETTINGS_ROUTE, page: PAGE_ADMIN_SETTINGS },
]

// ALERT MESSAGES
export const ERROR_SYSTEM_MSG = 'システムエラー'
export const ERROR_SESSION_MSG = 'もう一度ログインしてください'
export const ERROR_401_MSG = '許可が足りないです。'
export const ERROR_404_MSG = 'アクセスしたページは存在しません'
export const ERROR_LINE_403_MSG = 'LINEアプリからアクセスしてください'
export const ERROR_LINE_FRIEND_MSG = 'LINEで友だち追加してアクセスしてください'
export const ERROR_ADMIN_LOGIN_MISMATCH_MSG = 'ユーザー名またはパスワードが間違っています'
export const ERROR_ADDRESS_NOT_FOUND = 'お届け先住所を入力してください。'
export const ERROR_ADDRESS_NOT_CORRECT = '郵便番号が正しくありません。'
export const ERROR_LINE_CONNECTED_ANOTHER_ACCOUNT =
  'このLINEアカウントは既に別のECサイトに連携されています。'
export const WARN_AUDIENCE_NAME_EXIST_MSG = 'このオーディエンス名はすでに存在しています'
export const WARN_AUDIENCE_COUNT_ZERO_MSG = '応募者0人でオーディエンスを作成することはできません'
export const WARN_AUDIENCE_NOT_MATCH_MSG =
  '検索条件が変更されています。一度検索ボタンクリックしてその後作成してください。'
export const WARN_QR_WRONG_MSG = 'QRコードが違います、再度確認ください'
export const WARN_NOT_UNIQUE_EMAIL_MSG = 'このメールアドレスはすでに登録されています'
export const WARN_NOT_ENOUGH_INFORMATION_MSG =
  '予約情報が足りているため最初からやり直ししてください'
export const WARN_POSTAL_CODE_WRONG_MSG = '郵便番号を確認してください'
export const WARN_IMAGE_TOO_BIG = '画像サイズが大きすぎます'
export const WARN_IMAGE_SIZE_DIFFERENT = '画像サイズが違います'
export const SUCCESS_LOGIN_MSG = 'ログインしました。'
export const SUCCESS_LOGOUT_MSG = 'ログアウトしました。'
export const SUCCESS_CREATE_MSG = '作成しました。'
export const SUCCESS_REGISTER_MSG = '登録しました。'
export const SUCCESS_ADD_MSG = '追加しました。'
export const SUCCESS_SAVE_MSG = '保存しました。'
export const SUCCESS_UPDATE_MSG = '変更しました。'
export const SUCCESS_DELETE_MSG = '削除しました。'
export const SUCCESS_CANCEL_MSG = 'キャンセルしました。'
export const SUCCESS_UPLOAD_MSG = 'アプロードしました。'
export const SUCCESS_MESSAGE_SENT_MSG = 'メッセージを送信しました。'
export const SUCCESS_SEARCH_MSG = '検索完了しました。'
export const SUCCESS_QR_READ = 'QRを読み取りしました。'
export const SUCCESS_CHECK_IN = 'チェックインしました。'
export const SUCCESS_CANCEL = 'キャンセルしました。'
export const SUCCESS_REFUND = '返金済みしました。'
export const SUCCESS_CHECK_OUT = 'チェックアウトしました。'
export const SUCCESS_RESET = 'リセットしました。'
export const SUCCESS_EXPORT_CSV = 'CSVを出力しました。'
export const COUPON_INVALID_MSG = 'クーポンコードは無効です'

// RESPONSE TYPE
export const RESPONSE_BAD_REQUEST_ERROR = 400
export const RESPONSE_PERMISSION_ERROR = 401
export const RESPONSE_SESSION_ERROR = 403
export const RESPONSE_NOT_ACCEPTABLE_ERROR = 406
export const RESPONSE_CONFLICT_ERROR = 409
export const RESPONSE_SYSTEM_ERROR = 500

// MESSAGE KEY
export const MESSAGE_SESSION_ERROR_KEY = 'SESSION_ERROR'
export const MESSAGE_SYSTEM_ERROR_KEY = 'SYSTEM_ERROR'
export const MESSAGE_SYSTEM_WARNING_KEY = 'SYSTEM_WARNING'
export const MESSAGE_CAMERA_PERMISSION_KEY = 'CAMERA_PERMISSION'

// COLLAPSE WIDTH
export const SIDEBAR_COLLAPSED_WIDTH = 80
export const SIDEBAR_NORMAL_WIDTH = 200

// NO IMAGE
export const NO_IMAGE = '/ec/no-image.png'

// DEFAULT LOGO
export const DEFAULT_LOGO = '/ec/logo.png'

// LOGIN LOGO
export const LOGIN_LOGO = '/ec/bg-login.png'

// FORGOT PASSWORD LOGO
export const FORGOTPASSWORD_LOGO = '/ec/bg-forgotpassword-1.png'

// SUCCESS RESET FORGOT PASSWORD LOGO
export const SUCCESS_RESET_FORGOTPASSWORD_LOGO = '/ec/bg-success-reset-password.png'

// CURRENCY
export const CURRENCY_SYMBOL = '円'

// PERCENT SYMBOL
export const PERCENT_SYMBOL = '％'

// COUNT SYMBOL
export const COUNT_SYMBOL = '個'

// TAX
export const TAX_INCLUDED = '税込'

// RENTAL HOUR DURATION
export const RENTAL_BILLABLE_HOURS = 12

// LANDING ANIMATION TIME
export const LANDING_ANIMATION_DURATION = 2

// SORTABLE IGNORE DISTANCE
export const SORTABLE_IGNORE_DISTANCE = 8

// CAMERA TYPE CONSTANTS
export const FRONT_CAMERA = 'user'
export const REAR_CAMERA = 'environment'

// RESERVATION MANAGE CONSTANTS
export const RESERVATION_CHECK_IN = 'check-in'
export const RESERVATION_CHECK_OUT = 'check-out'
export const RESERVATION_RESET = 'reset'
export const RESERVATION_CANCEL = 'cancel'
export const RESERVATION_REFUND = 'refunded'

// CALENDAR SEGMENT CONSTANTS
export const DAY_SEGMENT_LABEL = '日'
export const DAY_SEGMENT_VALUE = 'DAY'
export const WEEK_SEGMENT_LABEL = '週'
export const WEEK_SEGMENT_VALUE = 'WEEK'
export const MONTH_SEGMENT_LABEL = '月'
export const MONTH_SEGMENT_VALUE = 'MONTH'
export const CALENDAR_SEGMENTS = [
  { label: DAY_SEGMENT_LABEL, value: DAY_SEGMENT_VALUE },
  { label: WEEK_SEGMENT_LABEL, value: WEEK_SEGMENT_VALUE },
  { label: MONTH_SEGMENT_LABEL, value: MONTH_SEGMENT_VALUE },
]

// FORM SCROLL CONFIG
export const FORM_SCROLL_CONFIG = {
  behavior: 'smooth',
  block: 'top',
  inline: 'center',
}

// KEY STRING
export const ENTER_KEY = 'Enter'

// SCREEN SIZE
export const XL_SCREEN_SIZE = 1224
export const LG_SCREEN_SIZE = 992
export const MD_SCREEN_SIZE = 768
export const SM_SCREEN_SIZE = 576

// THEME COLOR
export const PRIMARY_COLOR = '#99CA29'
export const PRIMARY_LIGHT_COLOR = '#fdfff0'
export const SECONDARY_COLOR = '#fa8c16'
export const SECONDARY_LIGHT_COLOR = '#fff7e6'
export const CUSTOM_GREEN = '#8ac926'
export const CUSTOM_LIGHT_GREEN = '#fcfff0'
export const CUSTOM_RED = '#DD1C1A'
export const CUSTOM_LIGHT_RED = '#ffeeeb'
export const CUSTOM_YELLOW = '#F0C808'
export const CUSTOM_LIGHT_YELLOW = '#ffffe6'
export const CUSTOM_GRAY_COLOR = '#8c8c8c'
export const CUSTOM_LIGHT_GRAY_COLOR = '#fafafa'
export const ORANGE_COLOR = '#ff9900'
export const LINE_COLOR = '#06C755'
export const ANTD_GRAY = '#d9d9d9'
export const WHITE_COLOR = '#FFF'
export const BLACK_COLOR = '#000'
export const SATURDAY_COLOR = '#00c2ff'
export const SUNDAY_COLOR = '#c40055'
export const PURPLE_COLOR = '#722ed1'

export const THEME_COLORS = [
  '#99CA29',
  '#EA638C',
  '#DB5461',
  '#BB3E03',
  '#E85D75',
  '#C76D7E',
  '#AB92BF',
  '#8D6B94',
  '#4EA5D9',
  '#134074',
  '#005F73',
  '#8DA9C4',
  '#72A1E5',
  '#0A9396',
  '#84A07C',
  '#3C787E',
  '#77878B',
  '#9a8c98',
  '#9F8082',
  '#b5838d',
  '#6d6875',
  '#30343F',
  '#2E382E',
]

export const ANIMATION_VARIANT_STAGGER_CONTAINER = {
  hidden: {
    transition: {
      staggerChildren: 0.01,
      staggerDirection: -1,
      when: 'afterChildren',
    },
  },
  show: {
    transition: {
      staggerChildren: 0.04,
      staggerDirection: 1,
      when: 'beforeChildren',
    },
  },
}

export const ANIMATION_VARIANT_STAGGER_ITEM = {
  hidden: {
    opacity: 0,
    transition: { type: 'linear' },
  },
  show: {
    opacity: 1,
    transition: { type: 'linear' },
  },
}

export const PREFECTURES = [
  { value: 1, label: '北海道' },
  { value: 2, label: '青森県' },
  { value: 3, label: '岩手県' },
  { value: 4, label: '宮城県' },
  { value: 5, label: '秋田県' },
  { value: 6, label: '山形県' },
  { value: 7, label: '福島県' },
  { value: 8, label: '茨城県' },
  { value: 9, label: '栃木県' },
  { value: 10, label: '群馬県' },
  { value: 11, label: '埼玉県' },
  { value: 12, label: '千葉県' },
  { value: 13, label: '東京都' },
  { value: 14, label: '神奈川県' },
  { value: 15, label: '新潟県' },
  { value: 16, label: '富山県' },
  { value: 17, label: '石川県' },
  { value: 18, label: '福井県' },
  { value: 19, label: '山梨県' },
  { value: 20, label: '長野県' },
  { value: 21, label: '岐阜県' },
  { value: 22, label: '静岡県' },
  { value: 23, label: '愛知県' },
  { value: 24, label: '三重県' },
  { value: 25, label: '滋賀県' },
  { value: 26, label: '京都府' },
  { value: 27, label: '大阪府' },
  { value: 28, label: '兵庫県' },
  { value: 29, label: '奈良県' },
  { value: 30, label: '和歌山県' },
  { value: 31, label: '鳥取県' },
  { value: 32, label: '島根県' },
  { value: 33, label: '岡山県' },
  { value: 34, label: '広島県' },
  { value: 35, label: '山口県' },
  { value: 36, label: '徳島県' },
  { value: 37, label: '香川県' },
  { value: 38, label: '愛媛県' },
  { value: 39, label: '高知県' },
  { value: 40, label: '福岡県' },
  { value: 41, label: '佐賀県' },
  { value: 42, label: '長崎県' },
  { value: 43, label: '熊本県' },
  { value: 44, label: '大分県' },
  { value: 45, label: '宮崎県' },
  { value: 46, label: '鹿児島県' },
  { value: 47, label: '沖縄県' },
]

export const getMenu = (locale) => [
  {
    title: locale['header.caviar.value'],
    showTopBar: true,
    childs: [
      {
        title: locale['header.caviar.sub_1'],
        key: 'HAL CAVIAR',
        image: 'logos/HALCAVIAR.png',
      },
      {
        title: locale['header.caviar.sub_2'],
        key: 'NOVA Caviar',
        image: 'logos/NOVARCAVIAR.png',
        contentText: `ノヴァキャビアはフレッシュ(生)キャビアです。
              <br />
              ご注文をいただいてから、発送までお時間のかかることがあります。
              <br />
              　おかげさまで、大変、ご好評をいただいております。売り切れの際はご了承ください。`,
      },
    ],
  },
  {
    title: locale['header.royal_collection.value'],
    showTopBar: true,
    childs: [
      {
        title: locale['header.royal_collection.sub_1'],
        key: 'Buckingham Palace Royal Collection',
        image: 'logos/buckingham_palace_royal_collection.png',
      },
      {
        title: locale['header.royal_collection.sub_2'],
        key: 'Highgrove Selection',
        image: 'logos/high-grove-colection.png',
        active: true,
      },
    ],
  },
  {
    title: locale['header.premium_wines.value'],
    showTopBar: true,
    childs: [
      {
        title: locale['header.premium_wines.sub_1'],
        key: 'Luxury Wine Range',
        addParent: true,
      },
      {
        title: locale['header.premium_wines.sub_2'],
        key: 'Premium Wine Range',
        addParent: true,
      },
      {
        title: locale['header.premium_wines.sub_3'],
        key: 'Icon Wine Range',
        addParent: true,
      },
      {
        title: locale['header.premium_wines.sub_4'],
        key: 'Van Biljon Cinq Wines',
        image: 'logos/van_biljon_wines.png',
      },
    ],
  },
  {
    title: 'Spirits & Liqueur',
    showTopBar: true,
    childs: [
      {
        title: 'Gorilla Spirits Co.',
        image: 'logos/gorilla.webp',
        width: 'w-[190px]',
      },
      {
        title: 'Maraba',
        image: 'logos/maraba.webp',
        width: 'w-[240px]',
        width: 'h-[200px]',
      },
    ],
  },
  {
    title: locale['header.tableware.label'],
    showTopBar: false,
    childs: [
      {
        title: `Japan's Craftpeopleship Tableware`,
      },
    ],
  },
  {
    title: locale['header.foods.value'],
    showTopBar: true,
    childs: [
      {
        title: locale['header.foods.sub_1'],
        key: 'Sweets',
        active: true,
        image: 'logos/Sweets.png',
      },
      {
        title: locale['header.foods.sub_2'],
        key: 'Bhutan Premium 7 Matsutake',
        active: true,
        image: 'logos/matsutake.png',
        contentText: `松茸は天然のものですので山の保護のため季節により収穫量の増減があります。
              <br />
              数量につきまして、ご要望に添えないことがございますのであらかじめご了承ください。
              <br />
              　※生鮮品のためご注文後のキャンセルはお受けできません。`,
      },
      {
        title: locale['header.foods.sub_3'],
        key: 'Rosey’s Mark',
        active: true,
        image: 'logos/rosey_marks.png',
      },
      {
        title: locale['header.foods.sub_4'],
        key: 'Seasonal Food',
        active: true,
        isHideOnMenu: true,
      },
      {
        title: locale['header.foods.sub_5'],
        key: 'Delicacy',
        active: true,
        image: 'logos/delicacy_logo.png',
        width: 'w-full max-w-[350px] md:max-w-[453px]',
        height: 'h-auto',
      },
    ],
  },
  {
    title: locale['header.signature_products.value'],
    showTopBar: true,
    childs: [
      {
        title: locale['header.signature_products.sub_1'],
        key: "Signature's Original Tableware",
        image: 'logos/table_ware.png',
        active: true,
      },
      {
        title: locale['header.signature_products.sub_2'],
        key: 'Wine Accessories',
        active: false,
      },
    ],
  },
]

export const HOME_SECTION = [
  {
    title: 'CAVIAR',
    showTopBar: true,
    childs: [
      {
        title: 'HAL CAVIAR',
        image: 'images/home/caviar/1.webp',
        sizeSmall: false,
        key: 1,
      },
      {
        title: 'NOVA Caviar',
        image: 'images/home/caviar/2.webp',
        isComingSoon: false,
        order: 1,
        sizeSmall: false,
        key: 2,
      },
      {
        title: 'ハルキャビアについて',
        image: 'images/home/caviar/3.webp',
        id: '/caviar-selection',
        sizeSmall: true,
        order: 3,
        key: 3,
      },
      {
        title: 'ノヴァキャビアについて',
        image: 'images/home/caviar/4.webp',
        id: '/nova-caviar-selection',
        isComingSoon: false,
        sizeSmall: true,
        order: 2,
        key: 4,
      },
    ],
  },
  {
    title: 'Royal Collection',
    showTopBar: true,
    childs: [
      {
        title: 'Buckingham Palace Royal Collection',
        image: 'images/home/royal_collection/1.webp',
        key: 1,
      },
      {
        title: 'ハイグローブセレクション',
        titleOther: 'Highgrove Selection',
        image: 'images/home/royal_collection/2.webp',
        isComingSoon: false,
        order: 1,
        key: 2,
      },
      {
        title: 'バッキンガム・パレス・ロイヤルコレクションについて',
        image: 'images/home/royal_collection/3.webp',
        id: '/royal-collection',
        sizeSmall: true,
        order: 3,
        key: 3,
      },
      {
        title: 'ハイグローブセレクションについて',
        id: '/highgrove-selection',
        image: 'images/home/royal_collection/4.webp',
        isComingSoon: false,
        sizeSmall: true,
        order: 2,
        key: 4,
      },
    ],
  },
  {
    title: 'Premium Wines',
    showTopBar: true,
    childs: [
      {
        title: 'Luxury Wine Range',
        image: 'images/home/premium_wines/1.webp',
        addParent: true,
        key: 1,
      },
      {
        title: 'Premium Wine Range',
        image: 'images/home/premium_wines/2.webp',
        addParent: true,
        key: 2,
      },
      {
        title: 'Icon Wine Range',
        image: 'images/home/premium_wines/3.webp',
        addParent: true,
        isComingSoon: false,
        key: 3,
      },
      {
        title: 'Van Biljon Cinq Wines',
        image: 'images/home/premium_wines/4.webp',
        key: 4,
      },
      {
        title: 'プレミアムワインについて',
        image: 'images/home/premium_wines/5.webp',
        id: '/premium-wine',
        addParent: true,
        sizeSmall: true,
        key: 5,
      },
    ],
  },
  {
    title: 'Gorilla Spirits Co.',
    childs: [
      {
        title: 'ゴリラスピリッツ',
        titleOther: 'Gorilla Spirits Co.',
        image: 'images/home/gorilla/1.webp',
        className: 'order-1',
      },
      {
        title: 'マラバ',
        titleOther: 'Maraba',
        image: 'images/home/gorilla/2.webp',
        className: 'order-3',
      },
      {
        title: 'ゴリラスピリッツについて ',
        image: 'images/home/gorilla/3.webp',
        sizeSmall: true,
        id: '/about-gorilla',
        className: 'order-2',
      },
      {
        title: 'マラバについて',
        image: 'images/home/gorilla/4.webp',
        sizeSmall: true,
        className: 'order-4',
        id: '/about-maraba',
      },
      {
        title: 'エシカルピリッツ',
        image: 'images/home/gorilla/5.webp',
        className: 'order-5',
        isComingSoon: true,
      },
      {
        title: 'エシカルスピリッツについて',
        image: 'images/home/gorilla/6.webp',
        sizeSmall: true,
        className: 'order-6 md:col-start-1',
        isComingSoon: true,
      },
    ],
  },
  {
    title: 'Tableware',
    showTopBar: false,
    childs: [
      {
        title: `Japan's Craftpeopleship Tableware`,
      },
    ],
  },
  {
    title: 'Foods',
    showTopBar: true,
    childs: [
      {
        title: 'スイーツ',
        image: 'images/home/foods/1.webp',
        titleOther: 'Sweets',
        active: false,
        isLeft: true,
        key: 1,
      },
      {
        title: `ブータン・プレミアム７松茸`,
        titleOther: 'Bhutan Premium 7 Matsutake',
        image: 'images/home/foods/2.webp',
        active: false,
        order: 3,
        key: 3,
        key: 6,
      },
      {
        title: `Rosey’s Mark`,
        image: 'images/home/foods/3.webp',
        active: false,
        isComingSoon: false,
        order: 2,
        isLeft: true,
        key: 2,
      },
      {
        title: 'ロージーズ・マークについて',
        image: 'images/home/foods/7.webp',
        active: false,
        id: '/roseys-mark',
        order: 4,
        sizeSmall: true,
        isLeft: true,
        key: 3,
      },
      {
        title: 'ブータン・プレミアム７松茸について',
        image: 'images/home/foods/6.webp',
        active: false,
        id: '/mushroom-selection',
        order: 4,
        sizeSmall: true,
        key: 7,
      },
      {
        title: `珍味`,
        titleOther: 'Delicacy',
        image: 'images/home/foods/5.webp',
        active: true,
        isComingSoon: false,
        sizeSmall: false,
        order: 5,
        isLeft: true,
        key: 4,
      },
      {
        title: '季節限定',
        image: 'images/home/foods/4.webp',
        active: false,
        isComingSoon: true,
        order: 1,
        key: 8,
      },
      {
        title: '珍味について',
        image: 'images/home/foods/8.webp',
        active: false,
        id: '/delicacy-selection',
        order: 6,
        sizeSmall: true,
        isLeft: true,
        key: 5,
      },
    ],
  },
  {
    title: `Signature's Signature Products`,
    showTopBar: true,
    childs: [
      {
        title: `Signature's Original Tableware`,
        image: 'images/home/products/1.webp',
        active: true,
        isComingSoon: false,
        key: 1,
      },
      {
        title: 'Signature Original Wine Accessories',
        active: false,
        image: 'images/home/products/2.webp',
        isComingSoon: true,
        order: 2,
        key: 2,
      },
      {
        title: 'シグニチャー ・オリジナルのテーブル　ウエアについて',
        active: false,
        image: 'images/home/products/3.webp',
        isComingSoon: false,
        sizeSmall: true,
        id: '/table-ware',
        key: 3,
      },
    ],
  },
]

export const SORTKEY = {
  RELEVANCE: 'RELEVANCE',
  TITLE: 'TITLE',
  PRICE: 'PRICE',
  CREATED: 'CREATED',
  BEST_SELLING: 'BEST_SELLING',
}

export const TYPE_PRODUCT = {
  PRODUCT: 'PRODUCT',
  WRAPPED: 'WRAPPED',
  GIFT_COLOR: 'GIFT_COLOR',
}

export const WARNING_AGE = 'WARNING_AGE'

export const WARNING_AGE_VAL = {
  ENOUGH: 'enough',
}

export const APP_MEDIA_URL = process.env.NEXT_PUBLIC_APP_MEDIA_URL

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL

// product type
export const ALWAYS_BOX = 'always_box'

// product type
export const COMING_SOON = 'coming_soon'

// product type
export const NO_PRICE = 'no_price'

// product type Bold
export const regexBold = /bold_([^ ]+)\!/

export const LANGUAGE = [
  {
    id: 1,
    name: 'JP',
    image: 'logos/ja_flag.webp',
    value: 'ja',
  },
  {
    id: 2,
    name: 'EN',
    image: 'logos/en_flag.png',
    value: 'en',
  },
  {
    id: 3,
    name: 'CN',
    image: 'logos/zh_flag.png',
    value: 'zh',
  },
]

export const getLanguage = (isDetailPage) => {
  return LANGUAGE.map(item => {
    return {
      ...item,
      image: isDetailPage ? `../${item.image}` : item.image,
    }
  })
}
