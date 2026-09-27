import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './Button';
import './Button.stories.css';

const buttonStates = ['Default', 'Hover', 'Focus', 'Active', 'Disabled'] as const;

function ButtonStateColumn() {
  return (
    <section className="button-state-column">
      <h2>Primary Button</h2>
      <div className="button-state-list">
        {buttonStates.map((state) => (
          <div className="button-state-row" data-state={state.toLowerCase()} key={state}>
            <span>{state}</span>
            <Button disabled={state === 'Disabled'}>Continue</Button>
          </div>
        ))}
      </div>
    </section>
  );
}

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          'A focused Primary Button exercise component. It uses semantic colour, spacing, radius and typography tokens.',
      },
    },
  },
  argTypes: {
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
  parameters: {
    docs: { description: { story: 'Use for the main action in the current context.' } },
  },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const AllStates: Story = {
  render: () => (
    <div className="button-state-matrix">
      <ButtonStateColumn />
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'The Primary Button shown in every supported visual state: default, hover, focus, active and disabled.',
      },
    },
  },
};
