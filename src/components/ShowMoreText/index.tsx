import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

interface ShowMoreTextProps {
  text: string
  maxCharacters?: number
  className?: string
}

const ShowMoreText: React.FC<ShowMoreTextProps> = ({
  text = '',
  maxCharacters = 700,
  className = '',
}) => {
  const locale = useSelector((state) => state.user.locale)
  const [isExpanded, setIsExpanded] = useState(false)
  const [isTruncated, setIsTruncated] = useState(false)

  // Làm sạch HTML, giữ lại các thẻ quan trọng
  const cleanHtml = (html: string): string => {
    const tempDiv = document.createElement('div')
    tempDiv.innerHTML = html

    const removeUnnecessaryNodes = (element: HTMLElement) => {
      Array.from(element.childNodes).forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          const el = node as HTMLElement
          const tagName = el.tagName.toLowerCase()

          // Giữ lại các thẻ quan trọng
          const allowedTags = ['p', 'br', 'b', 'i', 'u', 'strong']

          if (allowedTags.includes(tagName)) {
            removeUnnecessaryNodes(el) // Kiểm tra tiếp trong các thẻ con
            return
          }

          // Xóa <span> nếu nó không có style, class hoặc chỉ chứa metadata
          if (
            tagName === 'span' &&
            !el.getAttribute('style') &&
            !el.getAttribute('class') &&
            el.textContent?.trim() === ''
          ) {
            el.remove()
            return
          }

          // Xóa các thẻ rỗng không có nội dung
          if (el.children.length === 0 && el.textContent?.trim() === '') {
            el.remove()
            return
          }

          removeUnnecessaryNodes(el) // Tiếp tục kiểm tra các thẻ con
        } else if (node.nodeType === Node.COMMENT_NODE) {
          node.remove() // Xóa comment HTML
        }
      })
    }

    removeUnnecessaryNodes(tempDiv)
    return tempDiv.innerHTML
  }

  // Cắt bớt nội dung nhưng vẫn giữ format HTML
  const truncateHtml = (html: string, maxLength: number): string => {
    const tempDiv = document.createElement('div')
    tempDiv.innerHTML = cleanHtml(html)
    let textLength = 0
    let shouldTruncate = false

    const traverseNodes = (node: Node) => {
      if (shouldTruncate) {
        node.parentNode?.removeChild(node)
        return
      }

      if (node.nodeType === Node.TEXT_NODE) {
        let nodeText = node.nodeValue || ''
        if (textLength + nodeText.length > maxLength) {
          node.nodeValue = nodeText.slice(0, maxLength - textLength) + '...'
          shouldTruncate = true
        }
        textLength += node.nodeValue.length
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        Array.from(node.childNodes).forEach(traverseNodes)
      }
    }

    Array.from(tempDiv.childNodes).forEach(traverseNodes)
    return tempDiv.innerHTML
  }

  // Kiểm tra nếu nội dung thực sự bị cắt
  useEffect(() => {
    const tempDiv = document.createElement('div')
    tempDiv.innerHTML = cleanHtml(text)
    document.body.appendChild(tempDiv)
    setIsTruncated(tempDiv.innerText.length > maxCharacters)
    document.body.removeChild(tempDiv)
  }, [text, maxCharacters])

  const displayedText = isExpanded ? cleanHtml(text) : truncateHtml(text, maxCharacters)

  return (
    <div className={className}>
      <div dangerouslySetInnerHTML={{ __html: displayedText }} />
      {isTruncated && (
        <a
          className='text-blue-500 underline cursor-pointer'
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? locale['product.show_less'] : locale['product.show_more']}
        </a>
      )}
    </div>
  )
}

export default ShowMoreText
