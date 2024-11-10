// vite.config.ts
import { qwikCity } from "file:///mnt/c/Users/jm/OneDrive/Dokumente/PERSONALPROJECT/frontend/node_modules/.pnpm/@builder.io+qwik-city@1.9.0_@types+node@20.11.17_rollup@4.20.0_typescript@5.3.3/node_modules/@builder.io/qwik-city/lib/vite/index.mjs";
import { qwikVite } from "file:///mnt/c/Users/jm/OneDrive/Dokumente/PERSONALPROJECT/frontend/node_modules/.pnpm/@builder.io+qwik@1.9.0_@types+node@20.11.17/node_modules/@builder.io/qwik/dist/optimizer.mjs";
import { defineConfig } from "file:///mnt/c/Users/jm/OneDrive/Dokumente/PERSONALPROJECT/frontend/node_modules/.pnpm/vite@5.4.6_@types+node@20.11.17/node_modules/vite/dist/node/index.js";
import tsconfigPaths from "file:///mnt/c/Users/jm/OneDrive/Dokumente/PERSONALPROJECT/frontend/node_modules/.pnpm/vite-tsconfig-paths@4.3.1_typescript@5.3.3_vite@5.4.6_@types+node@20.11.17_/node_modules/vite-tsconfig-paths/dist/index.mjs";
var vite_config_default = defineConfig(async (config) => {
  return {
    // Enable to analyze via source-map-explorer
    ssr: { target: "webworker" },
    build: {
      sourcemap: config.mode === "development"
    },
    plugins: [qwikCity(), qwikVite(), tsconfigPaths()],
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600"
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvbW50L2MvVXNlcnMvam0vT25lRHJpdmUvRG9rdW1lbnRlL1BFUlNPTkFMUFJPSkVDVC9mcm9udGVuZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL21udC9jL1VzZXJzL2ptL09uZURyaXZlL0Rva3VtZW50ZS9QRVJTT05BTFBST0pFQ1QvZnJvbnRlbmQvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL21udC9jL1VzZXJzL2ptL09uZURyaXZlL0Rva3VtZW50ZS9QRVJTT05BTFBST0pFQ1QvZnJvbnRlbmQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBxd2lrQ2l0eSB9IGZyb20gJ0BidWlsZGVyLmlvL3F3aWstY2l0eS92aXRlJztcbmltcG9ydCB7IHF3aWtWaXRlIH0gZnJvbSAnQGJ1aWxkZXIuaW8vcXdpay9vcHRpbWl6ZXInO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBsb2FkRW52IH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgdHNjb25maWdQYXRocyBmcm9tICd2aXRlLXRzY29uZmlnLXBhdGhzJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKGFzeW5jIChjb25maWcpID0+IHtcblx0cmV0dXJuIHtcblx0XHQvLyBFbmFibGUgdG8gYW5hbHl6ZSB2aWEgc291cmNlLW1hcC1leHBsb3JlclxuXHRcdHNzcjogeyB0YXJnZXQ6ICd3ZWJ3b3JrZXInIH0sXG5cdFx0YnVpbGQ6IHtcblx0XHRcdHNvdXJjZW1hcDogY29uZmlnLm1vZGUgPT09ICdkZXZlbG9wbWVudCcsXG5cdFx0fSxcblx0XHRwbHVnaW5zOiBbcXdpa0NpdHkoKSwgcXdpa1ZpdGUoKSwgdHNjb25maWdQYXRocygpXSxcblx0XHRwcmV2aWV3OiB7XG5cdFx0XHRoZWFkZXJzOiB7XG5cdFx0XHRcdCdDYWNoZS1Db250cm9sJzogJ3B1YmxpYywgbWF4LWFnZT02MDAnLFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9O1xufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW1XLFNBQVMsZ0JBQWdCO0FBQzVYLFNBQVMsZ0JBQWdCO0FBQ3pCLFNBQVMsb0JBQTZCO0FBQ3RDLE9BQU8sbUJBQW1CO0FBRTFCLElBQU8sc0JBQVEsYUFBYSxPQUFPLFdBQVc7QUFDN0MsU0FBTztBQUFBO0FBQUEsSUFFTixLQUFLLEVBQUUsUUFBUSxZQUFZO0FBQUEsSUFDM0IsT0FBTztBQUFBLE1BQ04sV0FBVyxPQUFPLFNBQVM7QUFBQSxJQUM1QjtBQUFBLElBQ0EsU0FBUyxDQUFDLFNBQVMsR0FBRyxTQUFTLEdBQUcsY0FBYyxDQUFDO0FBQUEsSUFDakQsU0FBUztBQUFBLE1BQ1IsU0FBUztBQUFBLFFBQ1IsaUJBQWlCO0FBQUEsTUFDbEI7QUFBQSxJQUNEO0FBQUEsRUFDRDtBQUNELENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
