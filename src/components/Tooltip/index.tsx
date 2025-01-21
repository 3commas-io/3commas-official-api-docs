import React, { ComponentProps } from 'react'
import * as Primitive from '@radix-ui/react-tooltip'
import styles from './Tooltip.module.css'

const preventDefault: React.EventHandler<any> = (event) => {
  event.preventDefault()
}

type Props = {
  children: React.ReactNode
  content: React.ReactNode
} & Pick<
  ComponentProps<typeof Primitive.Root>,
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
    <Primitive.Provider>
      <Primitive.Root
        open={open}
        defaultOpen={defaultOpen}
        onOpenChange={onOpenChange}
        delayDuration={100}>
        <Primitive.Trigger asChild onClick={preventDefault}>
          {children}
        </Primitive.Trigger>
        <Primitive.Content
          {...props}
          side="top"
          align="center"
          className={styles.content}
          onPointerDownOutside={preventDefault}>
          <Primitive.Arrow className={styles.arrow} offset={10} />
          {content}
        </Primitive.Content>
      </Primitive.Root>
    </Primitive.Provider>
  )
}
