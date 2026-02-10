#!/bin/bash
# Usage: ./scripts/bump-version.sh 1.1.0-Phoenix
#
# Updates the version string in VERSION file and presentation.html meta tag.
# The badge text is populated from the meta tag via JS, so only one HTML edit needed.

set -euo pipefail

if [ -z "${1:-}" ]; then
    echo "Current version: $(cat VERSION)"
    echo ""
    echo "Usage: $0 <version>"
    echo "  e.g. $0 1.1.0-Phoenix"
    exit 1
fi

NEW_VERSION="$1"
OLD_VERSION="$(cat VERSION | tr -d '[:space:]')"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT="$(dirname "$SCRIPT_DIR")"

# 1. Update VERSION file
echo "$NEW_VERSION" > "$ROOT/VERSION"

# 2. Update meta tag in presentation.html
sed -i '' "s/content=\"${OLD_VERSION}\"/content=\"${NEW_VERSION}\"/" "$ROOT/presentation.html"

echo "✓ Bumped $OLD_VERSION → $NEW_VERSION"
echo "  - VERSION file"
echo "  - presentation.html meta tag"
echo "  - Badge auto-reads from meta (no edit needed)"
