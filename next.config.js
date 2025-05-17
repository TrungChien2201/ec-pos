/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  basePath: process.env.NEXT_PUBLIC_BASE_URL || '', // Use environment variable for basePath

  // Cấu hình SWC thay thế Babel
  compiler: {
    // Hỗ trợ styled-components
    styledComponents: {
      displayName: true,
      ssr: true,
      fileName: true,
      minify: true,
      transpileTemplateLiterals: true,
      pure: true,
    },
    // Tối ưu hóa cho production
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
    // Xóa các thuộc tính React không cần thiết trong production
    reactRemoveProperties: process.env.NODE_ENV === 'production' ? {
      properties: ['^data-test', '^data-cy', '^data-testid'],
    } : false,
    // Tối ưu hóa emotion (nếu bạn sử dụng)
    emotion: false,
  },

  // Cấu hình experimental - tắt static generation
  experimental: {
    disableStaticImages: false, // Không tắt static images để giữ SEO
  },
  // Tắt hoàn toàn static generation
  output: 'standalone',
  images: {
    domains: [
      'localhost',
      'api.signature-ginza.codeaplha.biz',
      'api.signature-ginza.com',
      'api.signature-ec-pos.codeaplha.biz'
    ],
    // Bật tối ưu hóa hình ảnh trong môi trường production
    unoptimized: process.env.NODE_ENV !== 'production',
    // Cấu hình kích thước hình ảnh phổ biến để cải thiện hiệu suất
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Cấu hình định dạng hình ảnh hiện đại
    formats: ['image/webp'],
    minimumCacheTTL: 60,
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
  webpack: (config, { dev }) => {
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

    // Thêm cấu hình cache để cải thiện hiệu suất biên dịch
    config.cache = {
      type: 'filesystem',
      allowCollectingMemory: true,
      memoryCacheUnaffected: true,
      buildDependencies: {
        config: []
      },
      cacheDirectory: path.resolve(__dirname, '.next/cache/webpack')
    };

    // Tối ưu hóa cho SWC
    if (!dev) {
      // Tối ưu hóa trong môi trường production
      config.optimization.minimize = true;

      // Tối ưu hóa chunk splitting
      config.optimization.splitChunks = {
        chunks: 'all',
        maxInitialRequests: 25,
        minSize: 20000,
        cacheGroups: {
          default: false,
          vendors: false,
          framework: {
            name: 'framework',
            test: /[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
            priority: 40,
            chunks: 'all',
          },
          lib: {
            test: /[\\/]node_modules[\\/]/,
            priority: 30,
            chunks: 'all',
            name(module) {
              if (!module.context) return 'vendors';
              const match = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/);
              if (!match || !match[1]) return 'vendors';
              const packageName = match[1];
              return `npm.${packageName.replace('@', '')}`;
            },
          },
          commons: {
            name: 'commons',
            minChunks: 2,
            priority: 20,
          },
          shared: {
            name: 'shared',
            priority: 10,
            minChunks: 2,
            reuseExistingChunk: true,
          },
        },
      };
    }
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
  ],
  // Tối ưu hóa cho production
  productionBrowserSourceMaps: false, // Tắt source maps trong production
  poweredByHeader: false, // Tắt header X-Powered-By
  compress: true, // Bật nén gzip
};

export default nextConfig;
