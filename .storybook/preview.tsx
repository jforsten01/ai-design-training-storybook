import { useEffect, useState, type PropsWithChildren } from 'react';
import { DocsContainer, type DocsContainerProps } from '@storybook/addon-docs/blocks';
import type { Decorator, Preview } from '@storybook/react-vite';
import { GLOBALS_UPDATED } from 'storybook/internal/core-events';

import '../src/tokens/primitive-color-tokens.css';
import '../src/tokens/color-tokens.css';
import '../src/tokens/spacing-tokens.css';
import '../src/tokens/typography-tokens.css';
import '../src/styles/global.css';

const withTheme: Decorator = (Story, context) => {
  const theme = context.globals.theme === 'dark' ? 'dark' : 'light';

  return (
    <div className="storybook-theme" data-theme={theme}>
      <Story />
    </div>
  );
};

function themeFromUrl() {
  if (typeof window === 'undefined') return 'light';

  const globals = new URLSearchParams(window.parent.location.search).get('globals');
  return globals?.split(';').includes('theme:dark') ? 'dark' : 'light';
}

function ThemedDocsContainer({
  children,
  context,
}: PropsWithChildren<DocsContainerProps>) {
  const [theme, setTheme] = useState(themeFromUrl);

  useEffect(() => {
    const updateTheme = ({ globals }: { globals: Record<string, unknown> }) => {
      setTheme(globals.theme === 'dark' ? 'dark' : 'light');
    };

    context.channel.on(GLOBALS_UPDATED, updateTheme);
    return () => context.channel.off(GLOBALS_UPDATED, updateTheme);
  }, [context.channel]);

  return (
    <DocsContainer context={context}>
      <div className="docs-theme" data-theme={theme}>
        {children}
      </div>
    </DocsContainer>
  );
}

const preview: Preview = {
  decorators: [withTheme],
  initialGlobals: {
    theme: 'light',
  },
  globalTypes: {
    theme: {
      description: 'Qvik System colour theme',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: 'todo',
    },
    backgrounds: { disable: true },
    docs: {
      container: ThemedDocsContainer,
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default preview;
