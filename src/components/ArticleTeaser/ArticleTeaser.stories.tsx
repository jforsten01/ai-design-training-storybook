import type { Meta, StoryObj } from '@storybook/react-vite';

import { ArticleTeaser } from './ArticleTeaser';
import './ArticleTeaser.stories.css';

const articleTeaserStates = ['Default', 'Hover', 'Focus', 'Active'] as const;

const meta = {
  title: 'Components/Article Teaser',
  component: ArticleTeaser,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div
        style={{
          width: 'min(100%, 48rem)',
          margin: '0 auto',
          padding: 'var(--space-8)',
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'A fully clickable article teaser for a news or editorial surface. It uses the shared semantic colors, typography roles, spacing and radius tokens.',
      },
    },
  },
  argTypes: {
    headline: { control: 'text', description: 'Visible article headline.' },
    category: { control: 'text', description: 'Editorial section or category.' },
    timeLabel: { control: 'text', description: 'Human-readable publication time.' },
    dateTime: { control: 'text', description: 'Machine-readable publication time.' },
    imageSrc: { control: 'text', description: 'Article image URL.' },
    imageAlt: { control: 'text', description: 'Meaningful alternative text for the image.' },
    href: { control: 'text', description: 'Article destination.' },
    headingLevel: {
      control: 'inline-radio',
      options: ['h2', 'h3'],
      description: 'Heading level selected for the surrounding page hierarchy.',
    },
  },
  args: {
    href: '#article',
    headline: 'Ancient landmarks reveal new details about life beside the pyramids',
    category: 'World',
    timeLabel: '19:08',
    dateTime: '2026-09-24T19:08:00+03:00',
    imageSrc: '/images/article-teaser-pyramids.jpg',
    imageAlt: 'The pyramids of Giza under a clear blue sky',
    headingLevel: 'h2',
  },
} satisfies Meta<typeof ArticleTeaser>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const LongHeadline: Story = {
  args: {
    headline:
      'A new discovery changes what researchers thought they knew about this ancient landscape',
  },
  parameters: {
    docs: {
      description: {
        story: 'A long headline demonstrates wrapping without changing the article hierarchy.',
      },
    },
  },
};

export const AllStates: Story = {
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'Default, hover, keyboard focus and active states shown together. Article links do not have a disabled state.',
      },
    },
  },
  render: (args) => (
    <div className="article-teaser-state-grid">
      {articleTeaserStates.map((state) => (
        <section
          className="article-teaser-state-example"
          data-state={state.toLowerCase()}
          key={state}
        >
          <h2>{state}</h2>
          <ArticleTeaser
            {...args}
            href={`#article-${state.toLowerCase()}`}
            onClick={(event) => event.preventDefault()}
          />
        </section>
      ))}
    </div>
  ),
};
