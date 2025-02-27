import Link from '@docusaurus/Link'
import styles from './styles.module.css'
import clsx from 'clsx'
import { useCopyAnchor } from '@site/src/hooks/useCopyAnchor'

type Props = {
  children: React.ReactNode
  name: React.ReactNode
  type?: React.ReactNode
  required?: boolean
  id?: string
  marginBottom?: boolean
}

export default function ApiParam({
  children,
  name,
  type,
  id,
  required,
  marginBottom,
}: Props) {
  const href = `#${id}`

  const [copied, handleCopy] = useCopyAnchor(href)

  return (
    <div
      id={id}
      className={clsx(styles.root, {
        [styles.marginBottom]: marginBottom,
      })}>
      <div className={styles.header}>
        {id ? (
          <Link to={href} className={styles.anchor} onClick={handleCopy}>
            <svg width="14" height="14" viewBox="0 0 13 13">
              <path d="M7.778 7.975a2.5 2.5 0 00.347-3.837L6.017 2.03a2.498 2.498 0 00-3.542-.007 2.5 2.5 0 00.006 3.543l1.153 1.15c.07-.29.154-.563.25-.773a2.46 2.46 0 01.14-.25L3.18 4.85a1.496 1.496 0 01.002-2.12 1.496 1.496 0 012.12 0l2.124 2.123a1.496 1.496 0 01-.333 2.37c.16.246.42.504.685.752z" />
              <path d="M5.657 4.557a2.5 2.5 0 00-.347 3.837l2.108 2.108a2.498 2.498 0 003.542.007 2.5 2.5 0 00-.006-3.543L9.802 5.815c-.07.29-.154.565-.25.774-.036.076-.084.16-.14.25l.842.84c.585.587.59 1.532 0 2.122a1.495 1.495 0 01-2.12 0L6.008 7.68a1.496 1.496 0 01.332-2.372c-.16-.245-.42-.503-.685-.75z" />
            </svg>
          </Link>
        ) : null}

        <span className={styles.name}>{name}</span>

        {type || copied ? (
          <span className={styles.type}>{copied ? 'copied!' : type}</span>
        ) : null}

        {required ? <span className={styles.required}>required</span> : null}
      </div>

      {children}
    </div>
  )
}

export { default as ParameterRange } from "./ParameterRange";