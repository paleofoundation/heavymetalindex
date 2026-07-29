#!/bin/bash
# Assemble the double-clickable "Central Library.app" on the Desktop from the
# version-controlled source in this folder. Reproducible: re-run any time to
# rebuild the bundle after editing launch / Info.plist / icon.svg.
#
#   bash tools/central-library/desktop-app/build-desktop-app.sh
#   npm run central-library:install-desktop
#
# Optional first arg overrides the destination .app path.

set -euo pipefail

SRC_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO="$(cd "$SRC_DIR/../../.." && pwd)"
APP="${1:-$HOME/Desktop/Central Library.app}"

echo "Building: $APP"
echo "From:     $SRC_DIR"
echo "Repo:     $REPO"

# Fresh bundle skeleton
rm -rf "$APP"
mkdir -p "$APP/Contents/MacOS" "$APP/Contents/Resources"

# Launcher (must stay executable) + Info.plist
cp "$SRC_DIR/launch" "$APP/Contents/MacOS/launch"
chmod +x "$APP/Contents/MacOS/launch"
cp "$SRC_DIR/Info.plist" "$APP/Contents/Info.plist"

# Icon: render icon.svg -> .iconset -> AppIcon.icns (best-effort).
ICONSET="$SRC_DIR/AppIcon.iconset"
if node "$SRC_DIR/make-icon.mjs" "$ICONSET" >/dev/null 2>&1 && command -v iconutil >/dev/null 2>&1; then
  if iconutil -c icns "$ICONSET" -o "$APP/Contents/Resources/AppIcon.icns" 2>/dev/null; then
    echo "icon:     AppIcon.icns generated"
  else
    echo "icon:     iconutil failed; app will use the generic icon"
  fi
  rm -rf "$ICONSET"
else
  echo "icon:     skipped (sharp or iconutil unavailable); app uses the generic icon"
fi

# Nudge Finder/LaunchServices to notice the new bundle + icon.
touch "$APP"
/usr/bin/plutil -convert xml1 "$APP/Contents/Info.plist" >/dev/null 2>&1 || true

echo ""
echo "Done. '$APP' is on your Desktop."
echo "First run: double-click it. If macOS blocks it (unidentified developer),"
echo "right-click the icon > Open > Open, or run once in Terminal:"
echo "  xattr -dr com.apple.quarantine \"$APP\""
