#!/bin/zsh

# Patch URL.canParse if it doesn't exist
cat > ./url-patch.cjs << 'EOF'
// This file patches the URL API for older Node.js versions
// Add URL.canParse method if it doesn't exist

if (typeof URL !== 'undefined' && typeof URL.canParse !== 'function') {
  console.log('Patching URL.canParse method');
  URL.canParse = function(url, base) {
    try {
      new URL(url, base);
      return true;
    } catch (error) {
      return false;
    }
  };
}

module.exports = {};
EOF

# Patch the Next.js binary to bypass Node.js version check
if grep -q "NEXT_IGNORE_NODE_VERSION" ./node_modules/next/dist/bin/next; then
  echo "Next.js binary already patched"
else
  sed -i '' 's/if (!_semver.default.satisfies(process.versions.node, "\^18.18.0 || \^19.8.0 || >= 20.0.0", {/if (process.env.NEXT_IGNORE_NODE_VERSION !== "true" \&\& !_semver.default.satisfies(process.versions.node, "\^18.18.0 || \^19.8.0 || >= 20.0.0", {/' ./node_modules/next/dist/bin/next
  echo "Next.js binary patched"
fi

# Clean the Next.js cache
echo "Cleaning Next.js cache..."
rm -rf .next

# Run the dev server with the correct environment variables
export NODE_OPTIONS="--no-node-snapshot --require ./url-patch.cjs"
export NEXT_IGNORE_NODE_VERSION=true

# Run the dev server
echo "Starting Next.js dev server..."
npx next dev
