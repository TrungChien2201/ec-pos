import { createServer } from 'http';
import { parse } from 'url';
import next from 'next';

// Determine the environment
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Define problematic paths that should be handled server-side
const problematicPaths = [
  '/401',
  '/404',
  '/line-access',
  '/line-friend',
  '/liff/login',
  '/liff/profile',
  '/about-gorilla',
  '/about-maraba',
  '/caviar-selection',
  '/products'
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

    if (isProblematicPath) {
      // Handle problematic paths with server-side rendering
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
