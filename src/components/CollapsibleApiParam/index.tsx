import Details from '@theme/MDXComponents/Details'
import styles from './styles.module.css'
import clsx from 'clsx'

type Props = {
  children: React.ReactNode
  name: React.ReactNode
  type?: React.ReactNode
  marginBottom?: boolean
}

export default function CollapsibleApiParam({
  children,
  name,
  type,
  marginBottom,
}: Props) {
  return (
    <Details
      className={clsx(styles.details, {
        [styles.marginBottom]: marginBottom,
      })}>
      <summary>
        <svg
          aria-hidden="true"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          className={styles.collapseIcon}>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.381.381a.875.875 0 0 1 1.238 0l5 5a.875.875 0 0 1 0 1.238l-5 5A.875.875 0 0 1 3.38 10.38L7.763 6 3.38 1.619a.875.875 0 0 1 0-1.238Z"
            fill="currentColor"
          />
        </svg>

        <span className={styles.name}>{name}</span>

        {type ? <span className={styles.type}>{type}</span> : null}
      </summary>

      {children}
    </Details>
  )
}
