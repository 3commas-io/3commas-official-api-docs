import { FunctionComponent } from 'react'
import { useCollapseAllContext } from './context'
import styles from './CollapseAllButton.module.css'

export const CollapseAllButton: FunctionComponent = () => {
  const { collapsed, toggle } = useCollapseAllContext()

  return (
    <button type="button" onClick={toggle} className={styles.button}>
      {collapsed ? 'Expand all' : 'Collapse all'}
    </button>
  )
}
