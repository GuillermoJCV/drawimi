import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default defineConfig((configEnv) =>
  mergeConfig(
    viteConfig(configEnv),
    defineConfig({
      test: {
        environment: "happy-dom",
        globals: true,
        setupFiles: ["./__mocks__/window.ts", "./__mocks__/zustand.ts"],
      },
    }),
  ),
);
