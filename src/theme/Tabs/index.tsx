import React from 'react'
import Tabs from '@theme-original/Tabs'
import type TabsType from '@theme/Tabs'
import type { WrapperProps } from '@docusaurus/types'
import styles from './styles.module.css'

type Props = WrapperProps<typeof TabsType>

export default function TabsWrapper(props: Props): JSX.Element {
  return (
    <div className={styles.root}>
      <Tabs {...props} />
    </div>
  )
}
