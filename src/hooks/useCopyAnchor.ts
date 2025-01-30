import { useRef, useState } from 'react'

export function useCopyAnchor(href: string) {
  const [copied, setCopied] = useState(false)

  const timeout = useRef<ReturnType<typeof setTimeout>>(null)

  const handleCopy = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation()
    event.preventDefault()

    if (timeout.current) {
      clearTimeout(timeout.current)
    }

    const fullUrl = new URL(href, window.location.href).toString()

    navigator.clipboard.writeText(fullUrl).then(() => {
      setCopied(true)
      timeout.current = setTimeout(() => setCopied(false), 1000)
    })
  }

  return [copied, handleCopy] as const
}
