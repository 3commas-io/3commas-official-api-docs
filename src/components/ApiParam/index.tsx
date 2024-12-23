import styles from './styles.module.css'
import clsx from 'clsx'

type Props = {
  children: React.ReactNode
  name: React.ReactNode
  type?: React.ReactNode
  marginBottom?: boolean
}

export default function ApiParam({
  children,
  name,
  type,
  marginBottom,
}: Props) {
  return (
    <div
      className={clsx(styles.root, {
        [styles.marginBottom]: marginBottom,
      })}>
      <div className={styles.header}>
        <span className={styles.name}>{name}</span>

        {type ? <span className={styles.type}>{type}</span> : null}
      </div>

      {children}
    </div>
  )
}
