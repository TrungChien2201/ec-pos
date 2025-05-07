const IconShoppingCart = (props) => {
  const stroke = props.color || 'white'
  return (
    <svg
      width='24'
      height='25'
      viewBox='0 0 24 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M17.25 17.3945H6.54375L3.92813 3.01328C3.89752 2.84106 3.80768 2.68495 3.67415 2.57196C3.54062 2.45897 3.37179 2.39621 3.19687 2.39453H1.5'
        stroke={stroke}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M7.5 21.1445C8.53553 21.1445 9.375 20.3051 9.375 19.2695C9.375 18.234 8.53553 17.3945 7.5 17.3945C6.46447 17.3945 5.625 18.234 5.625 19.2695C5.625 20.3051 6.46447 21.1445 7.5 21.1445Z'
        stroke={stroke}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M17.25 21.1445C18.2855 21.1445 19.125 20.3051 19.125 19.2695C19.125 18.234 18.2855 17.3945 17.25 17.3945C16.2145 17.3945 15.375 18.234 15.375 19.2695C15.375 20.3051 16.2145 21.1445 17.25 21.1445Z'
        stroke={stroke}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M5.85938 13.6445H17.6344C17.985 13.6456 18.3247 13.5231 18.5939 13.2984C18.8631 13.0738 19.0445 12.7615 19.1063 12.4164L20.25 6.14453H4.5'
        stroke={stroke}
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default IconShoppingCart
