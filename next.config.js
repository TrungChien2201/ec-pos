/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  basePath: process.env.NEXT_PUBLIC_BASE_URL || '', // Use environment variable for basePath

  // Configure SWC for styled-components
  compiler: {
    styledComponents: true,
  },

  // Completely disable static generation
  experimental: {
    disableStaticGeneration: true,
  },
  images: {
    domains: [
      'localhost',
      'api.signature-ginza.codeaplha.biz',
      'api.signature-ginza.com',
      'api.signature-ec-pos.codeaplha.biz'
    ],
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      }
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: false,
      },
    ];
  },
  env: {
    // Optionally define custom environment variables
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL || '',
    NEXT_PUBLIC_SYSTEM_TITLE: process.env.NEXT_PUBLIC_SYSTEM_TITLE || 'Signature',
  },
  webpack: (config) => {
    // Add path aliases from jsconfig.json
    config.resolve.alias = {
      ...config.resolve.alias,
      'styled-components': path.resolve(__dirname, 'node_modules', 'styled-components'),
      'common': path.resolve(__dirname, './src/common'),
      'services': path.resolve(__dirname, './src/services'),
      'utils': path.resolve(__dirname, './src/utils'),
      'components': path.resolve(__dirname, './src/components'),
      'store': path.resolve(__dirname, './src/store'),
      'provider': path.resolve(__dirname, './src/provider'),
      'layouts': path.resolve(__dirname, './src/layouts'),
      'resourse': path.resolve(__dirname, './src/resourse'),
      'views': path.resolve(__dirname, './src/views'),
      'hooks': path.resolve(__dirname, './src/hooks'),
      'modules': path.resolve(__dirname, './src/modules'),
      'assets': path.resolve(__dirname, './src/assets'),
      'locales': path.resolve(__dirname, './src/locales'),
      'middleware': path.resolve(__dirname, './src/middleware'),
    };
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
    // config.module.rules.push({
    //   test: /\.js$/,
    //   include: /node_modules\/(antd|@ant-design|rc-.*|react-redux|tanstack|@tanstack|framer-motion|react-icons|antd-input-otp|react-responsive-carousel|react-slick|styled-components)/,
    //   use: {
    //     loader: 'babel-loader',
    //     options: {
    //       presets: [
    //         ['next/babel', { 'preset-env': { modules: 'commonjs' } }], // Force CommonJS for ESM modules
    //       ],
    //       plugins: [
    //         '@babel/plugin-proposal-dynamic-import',
    //         '@babel/plugin-transform-modules-commonjs', // Convert ESM to CommonJS
    //       ],
    //     },
    //   },
    // });

    // Add rule for image files
    config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif|webp|svg)$/i,
      type: 'asset/resource',
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
  allowedDevOrigins: [
    'seo-signature-ec-pos.codeaplha.biz'
  ]
};

export default nextConfig;
