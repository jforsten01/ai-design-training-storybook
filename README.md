# AI Design Training Storybook

A compact React + TypeScript + Vite Storybook for the workshop sandbox. It contains
documented Qvik System token foundations and a token-based Button component.

Read [`DESIGN-SYSTEM.md`](DESIGN-SYSTEM.md) before creating or changing a
component. `AGENTS.md` and `CLAUDE.md` make the same contract discoverable to AI
coding tools after the repository is cloned.

## Run locally

```bash
npm install
npm run storybook
```

Storybook opens at `http://localhost:6008`. Port 6008 is used to avoid the
existing local Storybook service on port 6006.

## Validate

```bash
npm run typecheck
npm run build-storybook
```

## Included content

- Introduction to the primitive → semantic → component token flow
- Documented semantic color tokens with light and dark themes
- Human- and agent-readable token usage rules
- A Foundations / Agents page explaining the repository knowledge layer
- Spacing and radius scales
- Semantic typography roles
- Bundled Roboto Regular, Medium and Bold for reproducible typography previews
- Primary Button with documented interaction states
- ArticleTeaser with a responsive editorial image, headline and publication metadata
- Storybook accessibility checks through the a11y addon

## Token sources

The `src/tokens` folder is a local snapshot from:

- `/Users/jukkaforsten/Documents/Qvik_System/portable-design-system`
- `/Users/jukkaforsten/Documents/Qvik_System/portable-typography-system`

The snapshot keeps the training environment reproducible. It is not a live
dependency and does not update automatically when Qvik System changes.
