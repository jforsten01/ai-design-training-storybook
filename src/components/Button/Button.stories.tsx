import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          'A small semantic button API. Both variants use Qvik System color, spacing, radius and typography tokens, including light and dark themes.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['primary', 'secondary'],
      description: 'Visual emphasis based on the action hierarchy.',
    },
    children: {
      control: 'text',
      description: 'Visible action label.',
    },
    disabled: {
      control: 'boolean',
      description: 'Prevents interaction and applies the inactive treatment.',
    },
  },
  args: {
    children: 'Continue',
    disabled: false,
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { variant: 'primary' },
  parameters: {
    docs: { description: { story: 'Use for the main action in the current context.' } },
  },
};

export const Secondary: Story = {
  args: { variant: 'secondary' },
  parameters: {
    docs: { description: { story: 'Use for an alternative action with lower emphasis.' } },
  },
};

export const Disabled: Story = {
  args: { disabled: true, variant: 'primary' },
};

export const ActionHierarchy: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)' }}>
      <Button variant="primary">Save changes</Button>
      <Button variant="secondary">Cancel</Button>
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: { description: { story: 'Primary and Secondary shown together as an action group.' } },
  },
};
