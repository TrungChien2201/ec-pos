import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { Button } from 'antd'
import { MdDragIndicator } from 'react-icons/md'

import * as CONSTANT from 'common/constant'

import Item from './Item'

const SortableItem = (props) => {
  const { id, index, children, publicSettings, handle } = props
  const { attributes, listeners, setNodeRef, transform, isDragging } = useSortable({
    id,
  })

  const style = {
    zIndex: isDragging ? 1 : 0,
    cursor: handle ? 'default' : isDragging ? 'grabbing' : 'grab',
    border: `1px solid ${isDragging ? publicSettings?.PRIMARY_COLOR : CONSTANT.ANTD_GRAY}`,
    borderRadius: '4px',
    backgroundColor: '#fff',
    boxShadow: isDragging
      ? '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
      : 'none',
    touchAction: 'none',
    color: 'rgba(0,0,0, 0.6)',
    transform: CSS.Transform.toString(transform),
  }

  return (
    <div
      ref={setNodeRef}
      className='flex flex-col'
      {...(handle ? {} : { ...attributes, ...listeners })}
    >
      <Item
        style={style}
        handle={
          handle ? (
            <Button
              type='text'
              icon={<MdDragIndicator />}
              style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
              {...attributes}
              {...listeners}
            />
          ) : null
        }
      >
        {children}
      </Item>
      {index && (
        <div className='flex justify-center'>
          <p className='text-base text-custom-gray'>{`＃${index}`}</p>
        </div>
      )}
    </div>
  )
}

export default SortableItem
