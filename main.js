import './style.css'
import { RemoteZipPointer } from '@basisai/remote-zip';
import { getFile, findBasePath } from './utils.js';

const decoder = new TextDecoder("utf-8");
const iframe = document.getElementById("viewer");
const initialPath = findBasePath(window.location.href);

async function start() {
  const url = new URL('/coverage.zip', initialPath);
  const remoteZip = await new RemoteZipPointer({ url }).populate();

  /**
   * @param {string} file
  */
  async function loadFileFromZip(file) {
    window.title = 'Code Coverage - ' + file;
    const uncompressedBytes = await remoteZip.fetch(file);
    iframe.contentWindow.document.open();
    iframe.contentWindow.document.write(decoder.decode(uncompressedBytes));
    iframe.contentWindow.document.close();
    iframe.contentWindow.document.body.addEventListener('click', iframeClick);
  }

  /**
   * @param {Event} event
   */
  function iframeClick(event) {
    if (event.target.tagName !== 'A') return;

    event.preventDefault();

    const href = event.target.href;
    loadFileFromZip(getFile(href));
    history.pushState({ url: href }, null, href);
  }

  window.addEventListener('popstate', function (event) {
    const href = event.target.location.href;
    loadFileFromZip(getFile(href));
  });

  loadFileFromZip('index.html');
}

start();
