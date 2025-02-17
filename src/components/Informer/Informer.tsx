import { ReactNode } from 'react'
import styles from './Informer.module.css'
import clsx from 'clsx'
import { IconAttentionCircle, IconInfo, IconCheck } from "../../icons";


export type TInformerVariantTypes = 'info' | 'warning' | 'danger' | 'accent'

type Props = {
  variant?: TInformerVariantTypes,
  children: ReactNode
}

const variants: Record<TInformerVariantTypes, string> = {
  info: styles.info,
  warning: styles.warning,
  danger: styles.danger,
  accent: styles.accent
}

const mapVariantToIcon: Record<TInformerVariantTypes, ReactNode> = {
  info: <IconInfo />,
  danger: <IconAttentionCircle />,
  warning: <IconAttentionCircle />,
  accent: <IconCheck />,
};

export function Informer({ variant = 'info', children }: Props) {
  return (
    <div className={clsx(
      styles.root,
      variants[variant]
    )}>
      <div className={styles.container}>
        <div className={styles.iconBlock}>
          {mapVariantToIcon[variant as keyof typeof mapVariantToIcon]}
        </div>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  )
}
