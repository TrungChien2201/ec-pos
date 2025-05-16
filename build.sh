#!/bin/zsh

# Set environment variables to bypass Node.js version check
export NEXT_IGNORE_NODE_VERSION=true
export NODE_OPTIONS="--no-node-snapshot"

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

# Clean the .next directory to ensure a fresh build
echo "Cleaning Next.js cache..."
rm -rf .next

# Run the build command with the specified environment
if [ "$1" = "development" ]; then
  echo "Building for development environment..."
  NODE_OPTIONS="--no-node-snapshot --require ./url-patch.cjs" NEXT_IGNORE_NODE_VERSION=true NODE_ENV=development npx next build
elif [ "$1" = "staging" ]; then
  echo "Building for staging environment..."
  NODE_OPTIONS="--no-node-snapshot --require ./url-patch.cjs" NEXT_IGNORE_NODE_VERSION=true NODE_ENV=staging npx next build
elif [ "$1" = "production" ]; then
  echo "Building for production environment..."
  NODE_OPTIONS="--no-node-snapshot --require ./url-patch.cjs" NEXT_IGNORE_NODE_VERSION=true NODE_ENV=production npx next build
else
  echo "Please specify an environment: development, staging, or production"
  exit 1
fi
