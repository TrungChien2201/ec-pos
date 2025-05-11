// This file patches the URL API for older Node.js versions
// Add URL.canParse method if it doesn't exist

if (typeof URL.canParse !== 'function') {
  URL.canParse = function(url, base) {
    try {
      new URL(url, base);
      return true;
    } catch (error) {
      return false;
    }
  };
}

export default {};
