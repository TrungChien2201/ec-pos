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
