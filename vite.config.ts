import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.tsx"),
      name: "react-calendify",
      fileName: (format) => `react-calendify.${format}.js`,
    },
    rollupOptions: {
      external: ["react"],
      output: {
        globals: {
          react: "react",
        },
      },
    },
  },
  plugins: [checker({ typescript: true }), react()],
});
