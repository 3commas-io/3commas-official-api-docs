import { CollapseContext } from './context'
import { FunctionComponent, useCallback, useMemo, useState } from 'react'

type Props = {
  children: React.ReactNode
}

export const CollapseAll: FunctionComponent<Props> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(true)

  const toggle = useCallback(
    () => setCollapsed((current) => !current),
    [setCollapsed]
  )

  const ctx = useMemo(() => ({ collapsed, toggle }), [collapsed, toggle])

  return (
    <CollapseContext.Provider value={ctx}>{children}</CollapseContext.Provider>
  )
}
