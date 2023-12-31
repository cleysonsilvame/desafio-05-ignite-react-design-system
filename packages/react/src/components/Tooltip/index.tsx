import * as RadixTooltip from '@radix-ui/react-tooltip'
import { TooltipArrow, TooltipContent } from './styles'

function Root(props: RadixTooltip.TooltipProps) {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root {...props} />
    </RadixTooltip.Provider>
  )
}

Root.displayName = 'TooltipRoot'

function Content({ children, ...props }: RadixTooltip.TooltipContentProps) {
  return (
    <RadixTooltip.Portal>
      <TooltipContent {...props}>
        {children}
        <TooltipArrow width={16} height={8} />
      </TooltipContent>
    </RadixTooltip.Portal>
  )
}

Content.displayName = 'TooltipContent'

export interface TooltipProps {
  Root: RadixTooltip.TooltipProps
  Content: RadixTooltip.TooltipContentProps
}

export const Tooltip = {
  Root,
  Content,
  Trigger: RadixTooltip.Trigger,
}
