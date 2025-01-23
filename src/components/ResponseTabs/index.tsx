import Tabs from '@theme/Tabs'

import { ComponentProps } from 'react'
import styles from './styles.module.css'

type Props = Pick<ComponentProps<typeof Tabs>, 'children'>

export function Root({ children }: Props) {
  return (
    <div className={styles.root}>
      <Tabs>{children}</Tabs>
    </div>
  )
}

export { default as TabItem } from '@theme/TabItem'
