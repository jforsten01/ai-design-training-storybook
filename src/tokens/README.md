# Qvik System token snapshot

These files were copied from the local Qvik System repositories on 2026-09-19.

- `primitive-color-tokens.css`
- `color-tokens.css`
- `spacing-tokens.css`
- `typography-tokens.css`

Sources:

- `/Users/jukkaforsten/Documents/Qvik_System/portable-design-system`
- `/Users/jukkaforsten/Documents/Qvik_System/portable-typography-system/generated/typography.css`

They are a local training snapshot, not a live dependency. If either source changes,
review and copy updates deliberately so workshop behavior stays reproducible.

## Usage rule

Components use semantic tokens. Primitive color values are included as the value
layer for the semantic aliases, but component CSS must not refer to primitive names
or raw hex values directly.
