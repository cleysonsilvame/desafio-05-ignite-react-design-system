import { ComponentProps, ReactNode } from 'react'
import * as ToastRadix from '@radix-ui/react-toast'
import { Title, Description, Root, Close, Viewport } from './styles'
import { X } from 'phosphor-react'

export type ToastProps = ComponentProps<typeof ToastRadix.Root> & {
  title: string | ReactNode
  description: string | ReactNode
}

export const Toast = ({ title, description, ...props }: ToastProps) => {
  return (
    <ToastRadix.Provider>
      <Root {...props}>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Close>
          <X weight="light" size={20} />
        </Close>
      </Root>

      <Viewport />
    </ToastRadix.Provider>
  )
}

Toast.displayName = 'Toast'
