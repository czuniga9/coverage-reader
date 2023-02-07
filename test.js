import { getFile } from './utils.js';

console.assert(getFile('https://example.com/index.html') === 'index.html');
console.assert(getFile('https://example.com/Console/Kernel.html') === 'Console/Kernel.html');

// TODO: what if the base url is a subpath: 'https://example.com/something')
console.assert(getFile('https://example.com/something/Console/Kernel.html') === 'Console/Kernel.html');
