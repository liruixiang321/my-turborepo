import path from "path";
import { defineConfig, mergeConfig } from "vite";
import baseConfig from "../vite.config.base";

// https://vitejs.dev/config/
const config = defineConfig({
  server: {
    // open: true,
    // port: 8066,
    hmr: true,
  },
  resolve: {
    alias: {
      "@packages": path.resolve(__dirname, "../packages"),
    },
  },
});

export default mergeConfig(baseConfig, config);
