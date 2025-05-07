/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  basePath: process.env.NEXT_PUBLIC_BASE_URL || '', // Use environment variable for basePath
  async redirects() {
    return [
      {
        source: '/',
        destination: `/${process.env.NEXT_PUBLIC_BASE_URL}/home`,
        permanent: true,
        basePath: false,
      },
    ];
  },
  env: {
    // Optionally define custom environment variables
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || '',
  },
  experimental: {
    // Enable ESM support (optional, test if needed)
    esmExternals: 'loose',
    turbopack: false,
  },
  webpack: (config) => {
    config.resolve.alias['styled-components'] = path.resolve(__dirname, 'node_modules', 'styled-components');
    config.resolve.extensions = [
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
      '.svg',
      '.webp',
      '.png',
      '.jpeg',
      '.otf',
      ...config.resolve.extensions,
    ];
    // Webpack handle ES Modules in node_modules
    config.module.rules.push({
      test: /\.js$/,
      include: /node_modules\/(antd|@ant-design|rc-.*|react-redux|tanstack|@tanstack|framer-motion|react-icons|antd-input-otp|react-responsive-carousel|react-slick|styled-components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['next/babel', { 'preset-env': { modules: 'commonjs' } }], // Force CommonJS for ESM modules
          ],
          plugins: [
            '@babel/plugin-proposal-dynamic-import',
            '@babel/plugin-transform-modules-commonjs', // Convert ESM to CommonJS
          ],
        },
      },
    });

    return config;
  },
  transpilePackages: [
    'antd',
    '@ant-design',
    'rc-util',
    'rc-pagination',
    'rc-picker',
    'rc-notification',
    'rc-tooltip',
    'rc-tree',
    'rc-table',
    '@ant-design',
    '@tanstack',
    'framer-motion',
    'react-redux',
    'react-icons',
    'antd-input-otp',
    'rc-motion',
    'rc-select',
    'rc-tabs',
    'rc-menu',
    '@rc-component',
    'rc-cascader',
    'rc-checkbox',
    'rc-collapse',
    'rc-dialog',
    'rc-drawer',
    'rc-dropdown',
    'rc-image',
    'rc-input-number',
    'rc-input',
    'rc-mentions',
    'rc-menu',
    'rc-progress',
    'rc-rate',
    'rc-resize-observer',
    'rc-segmented',
    'rc-select',
    'rc-slider',
    'rc-steps',
    'rc-switch',
    'rc-table',
    'rc-tabs',
    'rc-textarea',
    'rc-tooltip',
    'rc-tree-select',
    'rc-tree',
    'rc-upload',
    'react-responsive-carousel',
    'react-slick',
    'styled-components'
  ],
  reactStrictMode: true,
};

export default nextConfig;
