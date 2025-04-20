import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
    css: {
        transformer: "lightningcss",
        lightningcss: {
            drafts: {
                customMedia: true,
            },
        },
    },
    build: {
        cssMinify: "lightningcss",
    },
    plugins: [
        react(),
        svgr(),
        VitePWA({
            registerType: "autoUpdate",
            injectRegister: false,

            pwaAssets: {
                disabled: false,
                config: true,
            },

            manifest: {
                name: "Name Indian State",
                short_name: "name-indian-state",
                description:
                    "A quiz webapp about naming India's states & union territories from shown map.",
                theme_color: "#1971c2",
                background_color: "#212529",
            },

            workbox: {
                globPatterns: ["**/*.{js,css,html,svg,png,ico}"],
                cleanupOutdatedCaches: true,
                clientsClaim: true,
                maximumFileSizeToCacheInBytes: 100_000_000,
            },

            devOptions: {
                enabled: false,
                navigateFallback: "index.html",
                suppressWarnings: true,
                type: "module",
            },
        }),
    ],
});
