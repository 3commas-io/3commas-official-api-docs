import Details from '@theme/MDXComponents/Details'
import styles from './styles.module.css'

type Props = {
  children: React.ReactNode
  collapsedName?: React.ReactNode
  openName?: React.ReactNode
}

export default function CollapsibleNestedParams({
  children,
  collapsedName = 'Show child parameters',
  openName = 'Hide child parameters',
}: Props) {
  return (
    <Details className={styles.details}>
      <summary>
        <svg
          aria-hidden="true"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          className={styles.collapseIcon}>
          <path
            d="M6.85 1a.85.85 0 1 0-1.7 0v4.15H1a.85.85 0 0 0 0 1.7h4.15V11a.85.85 0 1 0 1.7 0V6.85H11a.85.85 0 1 0 0-1.7H6.85V1Z"
            fill="currentColor"
          />
        </svg>

        <span className={styles.name}>
          <span className={styles.collapsedName}>{openName}</span>
          <span className={styles.openName}>{collapsedName}</span>
        </span>
      </summary>

      {children}
    </Details>
  )
}
