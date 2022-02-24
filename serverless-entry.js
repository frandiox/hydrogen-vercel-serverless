import '@shopify/hydrogen/dist/node/utilities/web-api-polyfill';
import handleRequest from './src/App.server';
// @ts-ignore
import indexTemplate from './dist/client/index.html?raw';

export default function (req, res) {
  handleRequest(req, {streamableResponse: res, indexTemplate});
}
