import { createServer } from 'http';
import { parse } from 'url';
import next from 'next';

// Set environment variables for SWC
process.env.NEXT_DISABLE_BABEL = 'true';
process.env.NEXT_SWC = 'true';

// Determine the environment
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Define problematic paths that should be handled server-side
const problematicPaths = [
  '/401',
  // '/404', // 404 page không thể có getServerSideProps, xử lý riêng
  '/line-access',
  '/line-friend',
  '/liff/login',
  '/liff/profile',
  '/about-gorilla',
  '/about-maraba',
  '/caviar-selection',
  '/nova-caviar-selection',
  '/contact',
  '/products',
  '/home',
  '/settings',
  '/royal-collection',
  '/premium-wine',
  '/delicacy-selection',
  '/highgrove-selection'
];

app.prepare().then(() => {
  createServer((req, res) => {
    // Parse the URL
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;

    // Check if the path is in the problematic paths list
    const isProblematicPath = problematicPaths.some(path =>
      pathname === path || pathname.startsWith(`${path}/`)
    );

    // Special handling for 404 page
    if (pathname === '/404') {
      // For 404 page, we need to use the default handler
      handle(req, res, parsedUrl);
    } else if (isProblematicPath) {
      // Handle other problematic paths with server-side rendering
      app.render(req, res, pathname, query);
    } else {
      // Let Next.js handle normal paths
      handle(req, res, parsedUrl);
    }
  }).listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
