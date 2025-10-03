import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import UnpluginInjectPreload from "unplugin-inject-preload/vite";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/cv",
  plugins: [
    UnpluginInjectPreload({
      injectTo: "head",
      files: [
        {
          entryMatch: /.*\.(png|jpg|ico|svg)$/,
          outputMatch: /.*\.(png|jpg|ico|svg)$/,
        },
      ],
    }),
    react(),
    tailwindcss(),
  ],
});
