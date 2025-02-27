import React, { ReactNode } from 'react'
import styles from './Steps.module.css'
import Heading from '@theme/Heading'

type Props = {
  title: string
  description: ReactNode
}

export const Step = ({ title, description }: Props) => (
  <div className={styles.step}>
    <div className={styles.stepIcon}>
      <div className={styles.connector} />
      <div className={styles.circle} />
    </div>
    <div className={styles.content}>
      <Heading as="h3">{title}</Heading>
      <main>{description}</main>
    </div>
  </div>
)
