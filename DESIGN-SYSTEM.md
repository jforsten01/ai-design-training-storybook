# Training Storybook design-system contract

This file is the working contract for people and AI agents that create or
change components in this repository. Read it before editing component styles.

The contract is intentionally small. Use the existing system first. Do not
silently invent a missing design decision.

## Required workflow

1. Identify the component's purpose, hierarchy and relevant states.
2. Find an existing semantic token for each design decision.
3. Implement the component without raw colour or one-off spacing values.
4. Review light and dark themes.
5. Review normal, hover, active, focus and disabled states when applicable.
6. Validate the actual foreground/background pair against WCAG AA.
7. If the system cannot express the need, stop and propose the smallest
   addition. Do not add or change a shared token without human approval.

## Authority and confidence

The primary evidence for these rules is the Qvik System portable agentic design
system from which the training token snapshot was derived. Its agent,
component and typography guidance explicitly defines the layer model, colour
families, typography roles, accessibility target and approval boundaries.

Some token names exist in the snapshot without a sufficiently specific usage
rule. Those tokens are marked **restricted** below. Do not infer their use from
their current colour value.

## Token layers

```text
Primitive value
      ↓
Semantic role
      ↓
Component implementation
```

- Primitive colour tokens store palette values and implement themes.
- Semantic colour and typography tokens describe purpose.
- Components consume semantic roles.
- Spacing and radius use the shared scales.

Component CSS must not contain:

- raw hex, rgb, hsl or named colour values
- `--primitive-color-*` references
- arbitrary spacing or radius values when a scale token fits
- a new public token introduced only to finish one implementation

## Colour roles

### Foreground

| Token | Use | Do not use for |
|---|---|---|
| `--semantic-color-foreground-primary` | Default text and icons | Disabled or low-emphasis content |
| `--semantic-color-foreground-secondary` | Supporting text and icons | Primary headings or required high-emphasis content |
| `--semantic-color-foreground-tertiary` | Low-emphasis and inactive content when contrast remains sufficient | Essential instructions or normal body copy |
| `--semantic-color-foreground-accent` | Interactive emphasis such as a text action | Decorative brand colour without interaction |
| `--semantic-color-foreground-inverted` | Content on a dark, filled or branded surface after pair validation | Assuming that the value is always white |
| `--semantic-color-foreground-quaternary` | **Restricted:** no approved general-purpose component rule | Production component use without a documented need and contrast check |
| `--semantic-color-foreground-static-primary` | Theme-invariant dark foreground in a fixed visual context | Normal themed UI |
| `--semantic-color-foreground-static-inverted` | Theme-invariant light foreground in a fixed visual context | Normal themed UI |

Use static roles only when the underlying surface does not change with the
theme, for example a controlled media overlay. Validate the pair in context.

### Background

| Token | Use | Do not use for |
|---|---|---|
| `--semantic-color-background-default` | Page or application canvas | Elevated cards that need separation from the canvas |
| `--semantic-color-background-highlight` | Cards, panels and highlighted content surfaces | Interactive CTA fill |
| `--semantic-color-background-accent` | Low-emphasis accent or selected surface | Status feedback when a status role exists |
| `--semantic-color-background-brand` | Strong branded surface | Primary action solely because it resembles the CTA colour |

Background roles do not define their foreground automatically. Select and
validate the foreground/background pair.

### CTA

| Token | Use |
|---|---|
| `--semantic-color-cta-base` | Default interactive fill or border |
| `--semantic-color-cta-strong` | Hover and active emphasis |
| `--semantic-color-cta-weak` | Subtle interactive surface |
| `--semantic-color-cta-on-color` | Text and icons on a filled CTA |

Use CTA roles only for interactive calls to action. A filled primary action
uses `cta-base` with `cta-on-color`; its hover and active states use
`cta-strong`. Do not assume a hard-coded white foreground is valid in both
themes.

### Status

The status families are `critical`, `warning`, `success`, `info`, `ai` and
`neutral`.

| Strength | Use |
|---|---|
| `weak` | Status component background |
| `base` | Indicator, icon or other status accent |
| `strong` | Status text and border on the weak background |

For example, critical text on a critical surface uses
`status-critical-strong` on `status-critical-weak`. Status colour must not be
the only way information is communicated.

`--semantic-color-status-inactive-default` is for an explicitly inactive
status. A disabled control may instead need the component's documented
foreground, background and border treatment.

`--semantic-color-status-focus-default` is the focus indicator colour. Keep a
visible focus indicator and validate its contrast against adjacent colours.

### Brand, neutral contrast and shadow

- `brand-primary-base`, `brand-primary-strong` and `brand-primary-weak` express
  brand identity. Use CTA roles for action hierarchy.
- `brand-secondary-300`, `brand-secondary-600` and
  `brand-secondary-800` are retained brand accents, not primary actions.
  Their numeric suffixes do not define a universal component hierarchy.
- `neutral-contrast-none` through `neutral-contrast-full` form a relative
  contrast ladder for boundaries and neutral treatments. Prefer `low` for a
  subtle border and increase contrast only when the component hierarchy or
  accessibility requires it.
- `shadow-card`, `shadow-card-large` and `shadow-navigation` are the approved
  shadow roles. Do not recreate their values in component CSS.

## Approved colour pair patterns

These patterns are starting points, not replacements for contextual contrast
validation.

Use `foreground-primary` for ordinary text content inside component stories so
the content remains readable when the Storybook theme changes. Use another
foreground role only when the component semantics explicitly require it.

| Context | Foreground | Background or boundary |
|---|---|---|
| Page content | `foreground-primary` | `background-default` |
| Supporting content | `foreground-secondary` | `background-default` or `background-highlight` |
| Card | `foreground-primary` | `background-highlight`, optional `neutral-contrast-low` border |
| Primary CTA | `cta-on-color` | `cta-base`; `cta-strong` on hover/active |
| Secondary CTA | `foreground-accent` | `background-highlight`, `cta-base` border, `cta-weak` on hover |
| Status message | matching `status-*-strong` | matching `status-*-weak`, optional `status-*-base` icon |

## Typography roles

Choose typography by content purpose and hierarchy, not by searching for the
closest visual size.

| Role | Intended use | Do not use for |
|---|---|---|
| `title/s` | Small page or section title | Body copy or controls |
| `title/m` | Medium page or section title | Repeated card text by default |
| `title/l` | Large page or feature title | Every heading |
| `subtitle/s` | Small content or component heading | Form-control label |
| `subtitle/m` | Medium content or component heading | CTA text |
| `subtitle/l` | Large content or section heading | Display title |
| `body/default` | Paragraph and normal functional text | Heading |
| `body/compact` | Dense rows and supporting information | Long-form reading by default |
| `label/default` | Input, filter, selection and control label | Section heading |
| `cta/default` | Button and primary action text | Paragraphs or general links |

Each role is a complete set of `family`, `size`, `weight`, `line-height` and
`letter-spacing` variables. Use all five properties so the role stays intact.

`title/m` and `title/l` change at the documented breakpoints. Other roles stay
fixed in the current training profile. This training Storybook bundles the open
Roboto font through `@fontsource/roboto`; a consuming product still owns its
font-loading or font-mapping policy. Do not commit a licensed font without
confirmed distribution rights.

## Spacing

Use the shared `--space-*` scale instead of one-off pixel values.

- `--space-1` (4px): very tight internal relationship
- `--space-2` (8px): tight icon/text or control gap
- `--space-3` (12px): compact component padding or gap
- `--space-4` (16px): default component padding
- `--space-5` / `--space-6` (20/24px): generous component or group spacing
- `--space-8` (32px): section-level separation
- larger tokens: page and layout rhythm, not routine control internals

Prefer the smallest existing token that correctly expresses the relationship,
and reuse the same relationship consistently. Do not force every spacing value
to be identical merely because it is available as a token.

## Radius

Use the shared radius scale. The current training conventions are:

- `--radius-none`: flush or square edge
- `--radius-sm`: compact element
- `--radius-md`: standard control; used by Button
- `--radius-lg`: card or panel
- `--radius-xl`: prominent soft container
- `--radius-full`: pill or circular shape

These conventions are training defaults. A new shared component convention
still requires human review.

## Component API and states

- Expose meaning through props such as `variant="primary"`,
  `status="critical"` or `density="compact"`.
- Do not expose arbitrary colour, spacing or token-name props as a shortcut.
- Keep the public API as small as the real use cases allow.
- Document the supported states in Storybook.
- Use native HTML semantics and keyboard behaviour whenever possible.
- Preserve a visible focus state and respect `prefers-reduced-motion`.

## When a token is missing

Do not use a raw value or the nearest-looking primitive token.

Instead, report:

1. the component and state that cannot be expressed
2. the intended semantic purpose
3. the closest existing role and why it is insufficient
4. whether the need repeats in another component
5. the proposed token or component-level solution
6. required light and dark values and accessibility checks

Wait for human approval before changing the shared token contract.

## Figma-to-code mapping

When using Figma as a source:

1. Identify the Figma variable and its semantic purpose.
2. Map it to an existing semantic code token.
3. Do not copy a resolved hex value into component CSS.
4. Map text styles to semantic typography roles, not only font sizes.
5. Map spacing to the closest intentional scale relationship.
6. Report missing or ambiguous mappings before implementation.

## Definition of done for a new component

- Existing tokens are used according to this contract.
- No raw colour, primitive colour or avoidable one-off spacing value is used.
- Component states and semantic API are documented in Storybook.
- Light and dark themes are reviewed.
- Keyboard interaction and visible focus are reviewed.
- Foreground/background pairs meet WCAG AA in their actual context.
- TypeScript and the static Storybook build pass.
