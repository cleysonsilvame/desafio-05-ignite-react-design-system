import type { Meta, StoryObj } from '@storybook/react'
import { Button, Text, Tooltip, TooltipProps } from '@ignite-ui/react'

export default {
  title: 'Data display/Tooltip',
  component: ({ children, ...props }) => (
    <Tooltip.Root open={props.open}>
      <Tooltip.Trigger asChild>
        <Button>Hover me</Button>
      </Tooltip.Trigger>
      <Tooltip.Content {...props}>
        <Text size={'sm'}>{children}</Text>
      </Tooltip.Content>
    </Tooltip.Root>
  ),
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Hello from tooltip',
    sideOffset: 5,
    side: 'top',
  },
  argTypes: {
    side: {
      control: {
        type: 'inline-radio',
        options: ['top', 'right', 'bottom', 'left'],
      },
    },
    sideOffset: {
      control: {
        type: 'range',
      },
    },
  },
} as Meta<TooltipProps['Content']>

export const Primary: StoryObj<TooltipProps['Content'] & TooltipProps['Root']> =
  {}

export const Controlled: StoryObj<
  TooltipProps['Content'] & TooltipProps['Root']
> = {
  argTypes: {
    open: {
      control: {
        type: 'boolean',
      },
    },
  },
}
