#!/usr/bin/env node

// This script runs the Next.js build with the necessary environment variables
// to bypass the Node.js version check and other issues

// Set environment variables
process.env.NEXT_IGNORE_NODE_VERSION = 'true';
process.env.NODE_ENV = 'production';
process.env.NODE_OPTIONS = '--no-node-snapshot';

// Use child_process to run the next build command directly
import { spawn } from 'child_process';

console.log('Starting Next.js production build...');

// Run the next build command
const buildProcess = spawn('npx', ['next', 'build'], {
  stdio: 'inherit', // This will show the build output in real-time
  env: {
    ...process.env,
    NEXT_IGNORE_NODE_VERSION: 'true',
    NODE_ENV: 'production',
    NODE_OPTIONS: '--no-node-snapshot'
  }
});

buildProcess.on('close', (code) => {
  if (code === 0) {
    console.log('Production build completed successfully');
  } else {
    console.error(`Production build failed with code ${code}`);
    process.exit(code);
  }
});
