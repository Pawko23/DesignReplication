#!/bin/bash

DIST_DIR_STORYBOOK="dist"
STORYBOOK_SRC="storybook"

if [ -d "$DIST_DIR_STORYBOOK" ]; then
  echo "Removing existing $DIST_DIR_STORYBOOK directory..."
  rm -rf "$DIST_DIR_STORYBOOK"
fi

mkdir -p "$DIST_DIR_STORYBOOK/css"
mkdir -p "$DIST_DIR_STORYBOOK/js"
mkdir -p "$DIST_DIR_STORYBOOK/pages"
echo "Created $DIST_DIR_STORYBOOK directory structure."

cp "$STORYBOOK_SRC/storybook.html" "$DIST_DIR_STORYBOOK"
echo "Copied storybook.html to $DIST_DIR_STORYBOOK."

SCSS_FILE="$STORYBOOK_SRC/scss/storybook.scss"
CSS_OUTPUT="$DIST_DIR_STORYBOOK/css/storybook.css"

if [ -f "$SCSS_FILE" ]; then
  echo "Compiling $SCSS_FILE to $CSS_OUTPUT..."
  sass "$SCSS_FILE" "$CSS_OUTPUT" || {
    echo "Error compiling SCSS. Make sure 'sass' is installed."; exit 1;
  }
  echo "SCSS compiled successfully."
else
  echo "SCSS file $SCSS_FILE not found. Skipping CSS compilation."
fi

CSS_SRC="$STORYBOOK_SRC/css"
CSS_DEST="$DIST_DIR_STORYBOOK/css"

if [ -d "$CSS_SRC" ]; then
  for file in "$CSS_SRC"/*.css; do
    if [[ "$(basename "$file")" != "storybook.css" && "$(basename "$file")" != "storybook.css.map" ]]; then
      cp "$file" "$CSS_DEST"
      echo "Copied $file to $CSS_DEST."
    fi
  done
else
  echo "CSS source directory $CSS_SRC not found. Skipping additional CSS files."
fi

JS_SRC="$STORYBOOK_SRC/js"
JS_DEST="$DIST_DIR_STORYBOOK/js"

if [ -d "$JS_SRC" ]; then
  cp "$JS_SRC"/*.js "$JS_DEST"
  echo "Copied JavaScript files to $JS_DEST."
else
  echo "JavaScript source directory $JS_SRC not found. Skipping JS files."
fi

PAGES_SRC="$STORYBOOK_SRC/pages"
PAGES_DEST="$DIST_DIR_STORYBOOK/pages"

if [ -d "$PAGES_SRC" ]; then
  cp "$PAGES_SRC"/*.html "$PAGES_DEST"
  echo "Copied HTML pages to $PAGES_DEST."
else
  echo "Pages source directory $PAGES_SRC not found. Skipping HTML pages."
fi

if [ -f "$DIST_DIR_STORYBOOK/storybook.html" ]; then
  echo "Opening storybook.html in the default browser..."
  xdg-open "$DIST_DIR_STORYBOOK/storybook.html" || open "$DIST_DIR_STORYBOOK/storybook.html"
else
  echo "Error: storybook.html not found. Cannot open in browser."
fi

echo "Build completed for Storybook. All files are in the $DIST_DIR_STORYBOOK directory."