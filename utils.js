
/**
 * @param {string} href
 * @returns string
 */
export function getFile(href) {
  const url = new URL(href);
  if (url.pathname === '/') {
    return 'index.html';
  }
  return url.pathname.slice(1); // removes initial '/'
}

/**
 * @param {string} url
 * @returns {string}
 */
export function findBasePath(url) {
  const lastSlash = url.lastIndexOf('/');
  return url.slice(0, lastSlash + 1);
}
