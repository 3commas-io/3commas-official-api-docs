import React, { ComponentProps } from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import styles from './Tooltip.module.css'

type Props = {
  children: React.ReactNode
  content: React.ReactNode
} & Pick<
  ComponentProps<typeof TooltipPrimitive.Root>,
  'open' | 'defaultOpen' | 'onOpenChange'
>

export function Tooltip({
  children,
  content,
  open,
  defaultOpen,
  onOpenChange,
  ...props
}: Props) {
  return (
    <TooltipPrimitive.TooltipProvider>
      <TooltipPrimitive.Root
        open={open}
        defaultOpen={defaultOpen}
        onOpenChange={onOpenChange}
        delayDuration={100}>
        <TooltipPrimitive.Trigger
          asChild
          onClick={(event) => {
            event.preventDefault()
          }}>
          {children}
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Content
          {...props}
          side="top"
          align="center"
          className={styles.content}
          onPointerDownOutside={(event) => {
            event.preventDefault()
          }}>
          <TooltipPrimitive.Arrow className={styles.arrow} offset={10} />
          {content}
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.TooltipProvider>
  )
}
