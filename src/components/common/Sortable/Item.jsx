import { forwardRef } from 'react'

const Item = forwardRef(({ id, children, handle, ...props }, ref) => {
  return (
    <div {...props} ref={ref}>
      {handle && handle}
      {children}
    </div>
  )
})

export default Item
