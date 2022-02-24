# Hydrogen App in Vercel Serverless Function

Hydrogen is a React framework and SDK that you can use to build fast and dynamic Shopify custom storefronts.

[Check out the docs](https://shopify.dev/custom-storefronts/hydrogen)

## Getting started

**Requirements:**

- Node.js version 16.5.0 or higher
- Yarn

```bash
yarn
yarn dev
```

Remember to update `shopify.config.js` with your shop's domain and Storefront API token!

### Vercel project

Link this directory to a Vercel project and set the following configuration in Vercel Dashboard:

- Output directory: set it to `dist/client`.
- Build command: set it to `override: true` and leave it empty to skip cloud build.

## Building for production

Build for production with the following command:

```bash
yarn build
```

This generates a Vercel Serverless Function that is consumed in `api/index.js`.
