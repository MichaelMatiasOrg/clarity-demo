#!/bin/bash
# Usage: ./scripts/bump-version.sh 1.1.0-Phoenix
#
# Updates the version string in VERSION file and all presentation meta tags.
# The badge text is populated from the meta tag via JS, so only one HTML edit per presentation.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT="$(dirname "$SCRIPT_DIR")"

if [ -z "${1:-}" ]; then
    echo "Current version: $(cat "$ROOT/VERSION")"
    echo ""
    echo "Usage: $0 <version>"
    echo "  e.g. $0 1.1.0-Phoenix"
    exit 1
fi

NEW_VERSION="$1"
OLD_VERSION="$(cat "$ROOT/VERSION" | tr -d '[:space:]')"

# 1. Update VERSION file
echo "$NEW_VERSION" > "$ROOT/VERSION"

# 2. Update meta tag in all presentations
COUNT=0
for f in "$ROOT"/presentations/*/index.html; do
    if grep -q "presentation-version" "$f"; then
        sed -i '' "s/content=\"${OLD_VERSION}\"/content=\"${NEW_VERSION}\"/" "$f"
        COUNT=$((COUNT + 1))
        echo "  - $(echo "$f" | sed "s|$ROOT/||")"
    fi
done

echo ""
echo "✓ Bumped $OLD_VERSION → $NEW_VERSION"
echo "  - VERSION file"
echo "  - $COUNT presentation(s) updated"
echo "  - Badge auto-reads from meta (no extra edit needed)"
