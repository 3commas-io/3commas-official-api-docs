import { createContext, useContext } from 'react'

type CollapseContext = {
  collapsed: boolean
  toggle: () => void
}

export const CollapseContext = createContext<CollapseContext | null>(null)

export const useCollapseAllContext = () => {
  const ctx = useContext(CollapseContext)

  if (!ctx) {
    return { collapsed: undefined }
  }

  return ctx
}
