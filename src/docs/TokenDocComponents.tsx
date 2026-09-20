import type { CSSProperties, ReactNode } from 'react';

import './token-docs.css';

type TokenItem = {
  name: string;
  use: string;
};

const foregroundTokens: TokenItem[] = [
  { name: '--semantic-color-foreground-primary', use: 'Primary text and icons' },
  { name: '--semantic-color-foreground-secondary', use: 'Supporting text and icons' },
  { name: '--semantic-color-foreground-tertiary', use: 'Lower-emphasis content' },
  { name: '--semantic-color-foreground-accent', use: 'Interactive emphasis' },
  { name: '--semantic-color-foreground-inverted', use: 'Content on dark or branded surfaces' },
];

const backgroundTokens: TokenItem[] = [
  { name: '--semantic-color-background-default', use: 'Page and application background' },
  { name: '--semantic-color-background-highlight', use: 'Cards and elevated content areas' },
  { name: '--semantic-color-background-accent', use: 'Low-emphasis accent surface' },
  { name: '--semantic-color-background-brand', use: 'Strong branded surface' },
];

const ctaTokens: TokenItem[] = [
  { name: '--semantic-color-cta-base', use: 'Default interactive fill or border' },
  { name: '--semantic-color-cta-strong', use: 'Hover and pressed emphasis' },
  { name: '--semantic-color-cta-weak', use: 'Subtle interactive surface' },
  { name: '--semantic-color-cta-on-color', use: 'Text and icons on a filled CTA' },
];

const statusTokens: TokenItem[] = [
  { name: '--semantic-color-status-critical-base', use: 'Critical status' },
  { name: '--semantic-color-status-warning-base', use: 'Warning status' },
  { name: '--semantic-color-status-success-base', use: 'Success status' },
  { name: '--semantic-color-status-info-base', use: 'Informational status' },
  { name: '--semantic-color-status-ai-base', use: 'AI-generated or AI-assisted status' },
];

const spacingTokens = [
  ['--space-0-5', '2 px'],
  ['--space-1', '4 px'],
  ['--space-2', '8 px'],
  ['--space-3', '12 px'],
  ['--space-4', '16 px'],
  ['--space-6', '24 px'],
  ['--space-8', '32 px'],
  ['--space-12', '48 px'],
  ['--space-16', '64 px'],
] as const;

const radiusTokens = [
  ['--radius-none', '0 px'],
  ['--radius-sm', '4 px'],
  ['--radius-md', '6 px'],
  ['--radius-lg', '8 px'],
  ['--radius-xl', '14 px'],
  ['--radius-full', '999 px'],
] as const;

const typographyRoles = [
  ['title/l', 'Large page or feature title', 'title-l'],
  ['title/m', 'Medium page or section title', 'title-m'],
  ['title/s', 'Small page or section title', 'title-s'],
  ['subtitle/l', 'Large content or section heading', 'subtitle-l'],
  ['subtitle/m', 'Medium content or component heading', 'subtitle-m'],
  ['subtitle/s', 'Small content or component heading', 'subtitle-s'],
  ['body/default', 'Default paragraph and functional text', 'body-default'],
  ['body/compact', 'Dense rows and supporting information', 'body-compact'],
  ['label/default', 'Controls, fields, filters and selections', 'label-default'],
  ['cta/default', 'Calls to action', 'cta-default'],
] as const;

export function DocPage({ children }: { children: ReactNode }) {
  return <main className="token-docs">{children}</main>;
}

export function PrincipleGrid() {
  return (
    <div className="principle-grid">
      <article>
        <span>1</span>
        <h3>Primitive</h3>
        <p>Stores the raw value. Components do not use this layer directly.</p>
      </article>
      <article>
        <span>2</span>
        <h3>Semantic</h3>
        <p>Explains the purpose of a value and changes with the active theme.</p>
      </article>
      <article>
        <span>3</span>
        <h3>Component</h3>
        <p>Consumes semantic roles, keeping usage logic stable across themes.</p>
      </article>
    </div>
  );
}

function ColorGroup({ title, tokens }: { title: string; tokens: TokenItem[] }) {
  return (
    <section className="token-section">
      <h2>{title}</h2>
      <div className="color-grid">
        {tokens.map((token) => (
          <article className="color-token" key={token.name}>
            <div
              className="color-token__swatch"
              style={{ '--swatch-color': `var(${token.name})` } as CSSProperties}
            />
            <div>
              <code>{token.name}</code>
              <p>{token.use}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ColorTokenGroups() {
  return (
    <>
      <ColorGroup title="Foreground" tokens={foregroundTokens} />
      <ColorGroup title="Background" tokens={backgroundTokens} />
      <ColorGroup title="CTA" tokens={ctaTokens} />
      <ColorGroup title="Status" tokens={statusTokens} />
    </>
  );
}

export function SpacingScale() {
  return (
    <div className="scale-list">
      {spacingTokens.map(([name, value]) => (
        <div className="scale-row" key={name}>
          <code>{name}</code>
          <div className="scale-row__preview">
            <span style={{ width: `var(${name})` }} />
          </div>
          <span>{value}</span>
        </div>
      ))}
    </div>
  );
}

export function RadiusScale() {
  return (
    <div className="radius-grid">
      {radiusTokens.map(([name, value]) => (
        <article key={name}>
          <div style={{ borderRadius: `var(${name})` }} />
          <code>{name}</code>
          <span>{value}</span>
        </article>
      ))}
    </div>
  );
}

export function TypographyRoles() {
  return (
    <div className="type-list">
      {typographyRoles.map(([role, use, className]) => (
        <article key={role}>
          <div>
            <code>{role}</code>
            <p>{use}</p>
          </div>
          <p className={`type-sample type-sample--${className}`}>The quick brown fox</p>
        </article>
      ))}
    </div>
  );
}
