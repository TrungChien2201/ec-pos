#!/usr/bin/env node

// This script runs the Next.js build with the necessary environment variables
// to bypass the Node.js version check and other issues

// Set environment variables
process.env.NEXT_IGNORE_NODE_VERSION = 'true';
process.env.NODE_ENV = 'staging';
process.env.NODE_OPTIONS = '--no-node-snapshot';

// Use child_process to run the next build command directly
import { spawn } from 'child_process';

console.log('Starting Next.js staging build...');

// Run the next build command
const buildProcess = spawn('npx', ['next', 'build'], {
  stdio: 'inherit', // This will show the build output in real-time
  env: {
    ...process.env,
    NEXT_IGNORE_NODE_VERSION: 'true',
    NODE_ENV: 'staging',
    NODE_OPTIONS: '--no-node-snapshot'
  }
});

buildProcess.on('close', (code) => {
  if (code === 0) {
    console.log('Staging build completed successfully');
  } else {
    console.error(`Staging build failed with code ${code}`);
    process.exit(code);
  }
});
