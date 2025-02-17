import React from 'react'
import styles from './Steps.module.css'

type Props = { children: React.ReactNode }

export const Steps = ({ children }: Props) => (
  <div className={styles.steps}>{children}</div>
)
