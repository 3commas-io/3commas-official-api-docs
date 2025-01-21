import styles from './Permission.module.css'

type Props = {
  title: string
  description: string
}

export function Permission({ title, description }: Props) {
  return (
    <div className={styles.permission}>
      <strong>{title}: </strong>
      {description}
    </div>
  )
}
