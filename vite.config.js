/*
 * Author  rhys.zhao
 * Date  2022-09-05 11:46:04
 * LastEditors  rhys.zhao
 * LastEditTime  2023-02-06 11:19:16
 * Description vite 配置
 */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { resolve } from "path";

// import imagemin from "vite-plugin-imagemin";

export default ({ command, mode }) => {
  return defineConfig({
    assetsInclude: ["**/*.gltf"],
    plugins: [react()],
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src")
      },
      extensions: [".jsx", ".js", ".tsx", ".ts", ".json"]
    },
    css: {
      modules: {
        generateScopedName: mode === "development" ? "[path][name]__[local]__[hash:5]" : "[local]-[hash:5]"
      },
      devSourcemap: true
    },
    build: {
      assetsInlineLimit: 8 * 1024,
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            var info = assetInfo.name.split(".");
            var extType = info[info.length - 1];
            if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i.test(assetInfo.name)) {
              extType = "media";
            } else if (/\.(png|jpe?g|gif|svg)(\?.*)?$/.test(assetInfo.name)) {
              extType = "img";
            } else if (/\.(woff2?|eot|ttf|otf)(\?.*)?$/i.test(assetInfo.name)) {
              extType = "fonts";
            }
            return `static/${extType}/[name]-[hash][extname]`;
          },
          chunkFileNames: "static/js/[name]-[hash].js",
          entryFileNames: "static/js/[name]-[hash].js",
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return "vendor";
            }
          }
        }
      }
    },
    server: {
      open: true,
      host: "0.0.0.0",
      port: 9999,
      strictPort: true
      // 下面是本地代理配置
      // proxy: {
      //   "/api": {
      //     target: "http://10.2.2.98:8090",
      //     changeOrigin: true,
      //     rewrite: (path) => path.replace(/^\/api/, "")
      //   }
      // }
    }
  });
};
