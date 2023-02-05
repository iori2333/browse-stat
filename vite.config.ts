import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react-swc';
import webExtension, { readJsonFile } from 'vite-plugin-web-extension';

function loadWebExtConfig() {
  try {
    return require('./.web-ext.config.json');
  } catch {
    return undefined;
  }
}

function generateManifest() {
  const manifest = readJsonFile('src/manifest.json');
  const pkg = readJsonFile('package.json');
  return {
    name: pkg.name,
    description: pkg.description,
    version: pkg.version,
    ...manifest
  };
}

function getTargetBrowser() {
  const target = process.env.TARGET_BROWSER;
  if (target) {
    return target;
  }
  return 'firefox';
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    webExtension({
      assets: 'public',
      webExtConfig: loadWebExtConfig(),
      manifest: generateManifest,
      browser: getTargetBrowser()
    })
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, './src')
      }
    ]
  }
});
