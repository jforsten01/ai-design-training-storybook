import type { CSSProperties, ReactNode } from 'react';

import './token-docs.css';

type TokenItem = {
  name: string;
  use: string;
  value?: string;
  restricted?: boolean;
};

const primitiveLightNeutralTokens: TokenItem[] = [
  ['0', '#ffffff'],
  ['50', '#f6f6f6'],
  ['100', '#ededed'],
  ['200', '#e4e4e4'],
  ['300', '#dedede'],
  ['500', '#a8a8a8'],
  ['600', '#6f6f6f'],
  ['800', '#3c3c3c'],
  ['900', '#222222'],
  ['1000', '#000000'],
].map(([step, value]) => ({
  name: `--primitive-color-light-gray-${step}`,
  value,
  use: 'Light neutral palette value',
}));

const primitiveLightBlueTokens: TokenItem[] = [
  ['50', '#e5f0ff'],
  ['100', '#e4ecf7'],
  ['300', '#cfe0f2'],
  ['700', '#0057d9'],
  ['800', '#0042a8'],
].map(([step, value]) => ({
  name: `--primitive-color-light-blue-${step}`,
  value,
  use: 'Light blue palette value',
}));

const primitiveLightAccentTokens: TokenItem[] = [
  { name: '--primitive-color-light-coral-500', value: '#f09591', use: 'Light coral accent value' },
  { name: '--primitive-color-light-purple-700', value: '#8246af', use: 'Light purple accent value' },
  { name: '--primitive-color-light-yellow-300', value: '#ffd32c', use: 'Light yellow accent value' },
];

const primitiveDarkNeutralTokens: TokenItem[] = [
  ['0', '#0c0d0d'],
  ['50', '#191b1f'],
  ['200', '#2c2f35'],
  ['300', '#33363d'],
  ['600', '#808793'],
  ['700', '#a8acb4'],
  ['800', '#ced1d6'],
  ['900', '#f5f6f7'],
  ['1000', '#ffffff'],
].map(([step, value]) => ({
  name: `--primitive-color-dark-gray-${step}`,
  value,
  use: 'Dark neutral palette value',
}));

const primitiveDarkBlueTokens: TokenItem[] = [
  ['100', '#073564'],
  ['700', '#66a3ff'],
  ['800', '#8bbcff'],
  ['900', '#bad9f8'],
].map(([step, value]) => ({
  name: `--primitive-color-dark-blue-${step}`,
  value,
  use: 'Dark blue palette value',
}));

const primitiveDarkAccentTokens: TokenItem[] = [
  { name: '--primitive-color-dark-coral-500', value: '#bf544f', use: 'Dark coral accent value' },
  { name: '--primitive-color-dark-purple-700', value: '#cb97f2', use: 'Dark purple accent value' },
  { name: '--primitive-color-dark-yellow-300', value: '#664d00', use: 'Dark yellow accent value' },
];

function primitiveStatusTokens(theme: 'light' | 'dark'): TokenItem[] {
  const values = theme === 'light'
    ? {
        critical: ['#c43b32', '#9f2d24', '#fdf0ef'],
        warning: ['#b27616', '#80530b', '#fff8e8'],
        success: ['#23805b', '#176044', '#edf8f2'],
        info: ['#3576d4', '#2459a8', '#eff5ff'],
        ai: ['#8762b5', '#64438e', '#f5f0fb'],
      }
    : {
        critical: ['#e47770', '#f0aaa4', '#4e211d'],
        warning: ['#d6a548', '#f1d28d', '#4b3510'],
        success: ['#63ba91', '#a1ddbd', '#123d2c'],
        info: ['#86adf0', '#b8d0fa', '#172f5b'],
        ai: ['#c0a4df', '#decaf2', '#38264f'],
      };

  return Object.entries(values).flatMap(([status, statusValues]) =>
    (['base', 'strong', 'weak'] as const).map((strength, index) => ({
      name: `--primitive-color-${theme}-${status}-${strength}`,
      value: statusValues[index],
      use: `${theme === 'light' ? 'Light' : 'Dark'} ${status} ${strength} value`,
    })),
  );
}

const foregroundTokens: TokenItem[] = [
  { name: '--semantic-color-foreground-primary', use: 'Primary text and icons' },
  { name: '--semantic-color-foreground-secondary', use: 'Supporting text and icons' },
  { name: '--semantic-color-foreground-tertiary', use: 'Lower-emphasis content' },
  { name: '--semantic-color-foreground-quaternary', use: 'Restricted: no approved general component rule', restricted: true },
  { name: '--semantic-color-foreground-accent', use: 'Interactive emphasis' },
  { name: '--semantic-color-foreground-inverted', use: 'Content on dark or branded surfaces' },
  { name: '--semantic-color-foreground-static-primary', use: 'Theme-invariant dark foreground in a fixed visual context' },
  { name: '--semantic-color-foreground-static-inverted', use: 'Theme-invariant light foreground in a fixed visual context' },
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

const neutralContrastTokens: TokenItem[] = [
  { name: '--semantic-color-neutral-contrast-none', use: 'No neutral separation' },
  { name: '--semantic-color-neutral-contrast-lowest', use: 'Softest neutral separation or fill' },
  { name: '--semantic-color-neutral-contrast-low', use: 'Subtle border or divider' },
  { name: '--semantic-color-neutral-contrast-default', use: 'Medium neutral contrast' },
  { name: '--semantic-color-neutral-contrast-high', use: 'High neutral contrast' },
  { name: '--semantic-color-neutral-contrast-full', use: 'Maximum neutral contrast' },
];

function semanticStatusTokens(status: string, label: string): TokenItem[] {
  return [
    { name: `--semantic-color-status-${status}-base`, use: `${label} indicator or icon` },
    { name: `--semantic-color-status-${status}-strong`, use: `${label} text or border` },
    { name: `--semantic-color-status-${status}-weak`, use: `${label} background` },
  ];
}

const stateTokens: TokenItem[] = [
  { name: '--semantic-color-status-inactive-default', use: 'Explicit inactive status' },
  { name: '--semantic-color-status-focus-default', use: 'Visible focus indicator' },
];

const brandTokens: TokenItem[] = [
  { name: '--semantic-color-brand-primary-base', use: 'Primary brand role' },
  { name: '--semantic-color-brand-primary-strong', use: 'Strong primary brand role' },
  { name: '--semantic-color-brand-primary-weak', use: 'Weak primary brand surface' },
  { name: '--semantic-color-brand-secondary-300', use: 'Retained secondary brand accent; not a primary action' },
  { name: '--semantic-color-brand-secondary-600', use: 'Retained secondary brand accent; not a primary action' },
  { name: '--semantic-color-brand-secondary-800', use: 'Retained secondary brand accent; not a primary action' },
];

const shadowTokens: TokenItem[] = [
  { name: '--semantic-color-shadow-card', use: 'Card shadow' },
  { name: '--semantic-color-shadow-card-large', use: 'Large card or elevated surface shadow' },
  { name: '--semantic-color-shadow-navigation', use: 'Navigation shadow' },
];

const spacingTokens = [
  ['--space-0', '0 px'],
  ['--space-px', '1 px'],
  ['--space-0-5', '2 px'],
  ['--space-1', '4 px'],
  ['--space-1-5', '6 px'],
  ['--space-2', '8 px'],
  ['--space-2-5', '10 px'],
  ['--space-3', '12 px'],
  ['--space-3-5', '14 px'],
  ['--space-4', '16 px'],
  ['--space-5', '20 px'],
  ['--space-6', '24 px'],
  ['--space-8', '32 px'],
  ['--space-10', '40 px'],
  ['--space-12', '48 px'],
  ['--space-16', '64 px'],
  ['--space-24', '96 px'],
  ['--space-32', '128 px'],
] as const;

const radiusTokens = [
  ['--radius-none', '0 px'],
  ['--radius-sm', '4 px'],
  ['--radius-md', '6 px'],
  ['--radius-lg', '8 px'],
  ['--radius-xl', '14 px'],
  ['--radius-full', '999 px'],
] as const;

type TypographyRole = {
  role: string;
  use: string;
  className: string;
  size: string;
  weight: string;
  lineHeight: string;
  letterSpacing: string;
  responsive?: boolean;
};

const typographyRoles: TypographyRole[] = [
  {
    role: 'title/l',
    use: 'Large page or feature title',
    className: 'title-l',
    size: '34 → 49 → 59 px',
    weight: '700',
    lineHeight: '1.2',
    letterSpacing: '0 em',
    responsive: true,
  },
  {
    role: 'title/m',
    use: 'Medium page or section title',
    className: 'title-m',
    size: '34 → 41 → 49 px',
    weight: '700',
    lineHeight: '1.2',
    letterSpacing: '0 em',
    responsive: true,
  },
  {
    role: 'title/s',
    use: 'Small page or section title',
    className: 'title-s',
    size: '34 px',
    weight: '700',
    lineHeight: '1.2',
    letterSpacing: '0 em',
  },
  {
    role: 'subtitle/l',
    use: 'Large content or section heading',
    className: 'subtitle-l',
    size: '28 px',
    weight: '700',
    lineHeight: '1.3',
    letterSpacing: '0 em',
  },
  {
    role: 'subtitle/m',
    use: 'Medium content or component heading',
    className: 'subtitle-m',
    size: '23 px',
    weight: '700',
    lineHeight: '1.3',
    letterSpacing: '0 em',
  },
  {
    role: 'subtitle/s',
    use: 'Small content or component heading',
    className: 'subtitle-s',
    size: '19 px',
    weight: '700',
    lineHeight: '1.3',
    letterSpacing: '0 em',
  },
  {
    role: 'body/default',
    use: 'Default paragraph and functional text',
    className: 'body-default',
    size: '16 px',
    weight: '400',
    lineHeight: '1.5',
    letterSpacing: '0 em',
  },
  {
    role: 'body/compact',
    use: 'Dense rows and supporting information',
    className: 'body-compact',
    size: '14 px',
    weight: '400',
    lineHeight: '1.4',
    letterSpacing: '0 em',
  },
  {
    role: 'label/default',
    use: 'Controls, fields, filters and selections',
    className: 'label-default',
    size: '14 px',
    weight: '500',
    lineHeight: '1.4',
    letterSpacing: '0 em',
  },
  {
    role: 'cta/default',
    use: 'Calls to action',
    className: 'cta-default',
    size: '16 px',
    weight: '700',
    lineHeight: '1.25',
    letterSpacing: '0.01 em',
  },
];

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

export function ColorLayerFlow() {
  return (
    <div className="color-layer-flow" aria-label="Two color token layers">
      <article>
        <span>Layer 1</span>
        <h2>Primitive values</h2>
        <p>Raw palette values for light and dark mappings. Components do not use this layer.</p>
      </article>
      <div aria-hidden="true">→</div>
      <article>
        <span>Layer 2</span>
        <h2>Semantic roles</h2>
        <p>Purpose-based aliases consumed by components. The role stays stable across themes.</p>
      </article>
    </div>
  );
}

function ColorGroup({ title, tokens }: { title: string; tokens: TokenItem[] }) {
  return (
    <section className="token-section">
      <h3>{title}</h3>
      <div className="color-grid">
        {tokens.map((token) => (
          <article
            className={`color-token${token.restricted ? ' color-token--restricted' : ''}`}
            key={token.name}
          >
            <div
              className="color-token__swatch"
              style={{ '--swatch-color': `var(${token.name})` } as CSSProperties}
            />
            <div>
              <code>{token.name}</code>
              {token.value ? (
                <span className="color-token__value">{token.value}</span>
              ) : (
                <p>{token.use}</p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function PrimitiveColorTokenGroups() {
  return (
    <>
      <ColorGroup title="Light neutrals" tokens={primitiveLightNeutralTokens} />
      <ColorGroup title="Light blue" tokens={primitiveLightBlueTokens} />
      <ColorGroup title="Light accents" tokens={primitiveLightAccentTokens} />
      <ColorGroup title="Light statuses" tokens={primitiveStatusTokens('light')} />
      <ColorGroup title="Dark neutrals" tokens={primitiveDarkNeutralTokens} />
      <ColorGroup title="Dark blue" tokens={primitiveDarkBlueTokens} />
      <ColorGroup title="Dark accents" tokens={primitiveDarkAccentTokens} />
      <ColorGroup title="Dark statuses" tokens={primitiveStatusTokens('dark')} />
    </>
  );
}

export function SemanticColorTokenGroups() {
  return (
    <>
      <ColorGroup title="Foreground" tokens={foregroundTokens} />
      <ColorGroup title="Background" tokens={backgroundTokens} />
      <ColorGroup title="CTA" tokens={ctaTokens} />
      <ColorGroup title="Neutral contrast" tokens={neutralContrastTokens} />
      <ColorGroup title="Critical status" tokens={semanticStatusTokens('critical', 'Critical')} />
      <ColorGroup title="Warning status" tokens={semanticStatusTokens('warning', 'Warning')} />
      <ColorGroup title="Success status" tokens={semanticStatusTokens('success', 'Success')} />
      <ColorGroup title="Info status" tokens={semanticStatusTokens('info', 'Informational')} />
      <ColorGroup title="AI status" tokens={semanticStatusTokens('ai', 'AI-generated or AI-assisted')} />
      <ColorGroup title="Neutral status" tokens={semanticStatusTokens('neutral', 'Neutral status')} />
      <ColorGroup title="Interaction states" tokens={stateTokens} />
      <ColorGroup title="Brand" tokens={brandTokens} />
      <ColorGroup title="Shadows" tokens={shadowTokens} />
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
    <>
      <div className="type-breakpoints" aria-label="Responsive title size order">
        <span>Responsive size order</span>
        <strong>Base &lt; 768 px</strong>
        <strong>Tablet ≥ 768 px</strong>
        <strong>Desktop ≥ 1280 px</strong>
      </div>
      <div className="type-list">
        {typographyRoles.map((role) => (
          <article key={role.role}>
            <div className="type-list__role">
              <code>{role.role}</code>
              <p>{role.use}</p>
            </div>
            <div className={`type-sample type-sample--${role.className}`}>The quick brown fox</div>
            <dl className="type-properties">
              <div>
                <dt>Size</dt>
                <dd>{role.size}</dd>
              </div>
              <div>
                <dt>Weight</dt>
                <dd>{role.weight}</dd>
              </div>
              <div>
                <dt>Line height</dt>
                <dd>{role.lineHeight}</dd>
              </div>
              <div>
                <dt>Letter spacing</dt>
                <dd>{role.letterSpacing}</dd>
              </div>
            </dl>
            {role.responsive ? (
              <p className="type-list__note">Size follows the base → tablet → desktop order above.</p>
            ) : null}
          </article>
        ))}
      </div>
    </>
  );
}
