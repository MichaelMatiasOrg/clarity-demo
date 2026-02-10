# Versioning

Format: **MAJOR.MINOR.PATCH[-Codename]** (e.g. `1.0.0-Guardian`)

## Bump rules

- **PATCH** — bug fixes, copy tweaks, styling adjustments
- **MINOR** — new slides, animations, content updates, UI features
- **MAJOR** — redesign, narrative shift, structural overhaul

## How to bump

```bash
./scripts/bump-version.sh 1.1.0-Phoenix
```

This updates the `VERSION` file and the `<meta>` tag in all `presentations/*/index.html` files. The on-screen badge reads from the meta tag automatically.

Include `[version]` at the end of commit messages so PRs show the version:

```
git commit -m "Add lifecycle animations

[1.1.0-Phoenix]"
```

## Where the version appears

- `VERSION` — source of truth
- `<meta name="presentation-version">` — in HTML head
- Bottom-right badge — faint text, brightens on hover

## Codenames (optional, security-themed)

Guardian, Phoenix, Sentinel, Vanguard, Bulwark, Bastion, Aegis
