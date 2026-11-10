import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  resolve: {
    // Version 6 publishes a CJS main under type:module; select its valid ESM entry.
    alias: [{ find: /^mdb-react-ui-kit$/, replacement: fileURLToPath(new URL('./node_modules/mdb-react-ui-kit/dist/mdb-react-ui-kit.esm.js', import.meta.url)) }],
  },
  // Preserve CRA's public environment-variable contract without exposing server secrets.
  define: {
    'process.env.PUBLIC_URL': JSON.stringify(''),
    ...Object.fromEntries(Object.entries(loadEnv(mode, process.cwd(), 'REACT_APP_'))
      .map(([key, value]) => ['process.env.' + key, JSON.stringify(value)])),
  },
  build: { outDir: 'build' },
  test: { environment: 'jsdom', globals: true, setupFiles: ['./src/setupTests.js'] },
}));
