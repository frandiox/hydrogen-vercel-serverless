import '@shopify/hydrogen/web-polyfills';
import handleRequest from './src/App.server';
// @ts-ignore
import indexTemplate from './dist/client/index.html?raw';

export default function (req, res) {
  handleRequest(req, {streamableResponse: res, indexTemplate});
}
