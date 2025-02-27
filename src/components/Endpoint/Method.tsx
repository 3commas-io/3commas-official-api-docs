import { FunctionComponent } from 'react'
import clsx from 'clsx'
import styles from './Method.module.css'

export type Method = 'PUT' | 'GET' | 'POST' | 'DELETE' | 'PATCH' | 'HEAD'
export const METHODS: Method[] = ['PUT', 'GET', 'POST', 'DELETE', 'PATCH', 'HEAD'];

type Props = {
  children: string
  variant?: 'filled' | 'text'
  size?: 'medium'
  align?: 'center' | 'right'
}

const colors: Record<Method, string> = {
  PUT: styles.put,
  GET: styles.get,
  POST: styles.post,
  DELETE: styles.delete,
  PATCH: styles.patch,
  HEAD: styles.head,
}

export function Method({
  children,
  variant = 'filled',
  size = 'medium',
  align = 'center'
}: Props) {
  if (typeof children !== 'string' || !(children.toUpperCase() in colors)) {
    return null
  }

  const color = children.toUpperCase()

  return (
    <div
      className={clsx(
        styles.container,
        colors[color],
        variant === 'filled' && styles.filled,
        variant === 'text' && styles.text,
        size === 'medium' && styles.medium,
        align === 'right' && styles.right
      )}>
      {color}
    </div>
  )
}
