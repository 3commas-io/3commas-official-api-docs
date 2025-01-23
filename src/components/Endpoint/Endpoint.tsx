import { ReactNode, useState } from 'react'

import { Method } from './Method'
import styles from './Endpoint.module.css'
import { Tooltip } from '@site/src/components/Tooltip'

type Props = {
  url: string
  method?: Method
  permissions?: ReactNode
}

export function Endpoint({ url, method, permissions }: Props) {
  const [copied, setCopied] = useState(false)

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setCopied(false)
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true)
    })
  }

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        {method ? <Method>{method}</Method> : null}

        <Tooltip
          onOpenChange={handleOpenChange}
          content={copied ? 'Copied!' : 'Copy'}>
          <span className={styles.url} onClick={handleCopy}>
            {url}
          </span>
        </Tooltip>
      </div>

      <div>{permissions}</div>
    </div>
  )
}
