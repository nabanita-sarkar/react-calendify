import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import checker from "vite-plugin-checker";
import path from "path";
import external from "rollup-plugin-node-externals";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.tsx"),
      name: "react-calendify",
      fileName: (format) => `react-calendify.${format}.js`,
    },
    rollupOptions: {
      treeshake: "smallest",
      external: ["react", "dayjs", "dayjs/plugin/isBetween"],
      output: [
        {
          format: "es",
          dir: "dist",
          preserveModules: true,
          globals: {
            react: "React",
            dayjs: "dayjs",
            "dayjs/plugin/isBetween": "isBetween",
          },
        },
        {
          format: "umd",
          globals: {
            react: "React",
            dayjs: "dayjs",
            "dayjs/plugin/isBetween": "isBetween",
          },
        },
      ],
    },
  },
  plugins: [external()],
});
