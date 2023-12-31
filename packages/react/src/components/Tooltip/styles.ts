import * as Tooltip from '@radix-ui/react-tooltip'
import { styled } from '../../styles'

export const TooltipContent = styled(Tooltip.Content, {
  borderRadius: '0.3125rem',
  padding: '$3 $4',
  fontSize: '$sm',
  lineHeight: '$shorter',
  color: '$gray100',
  background: '$gray900',
  userSelect: 'none',
})

export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
