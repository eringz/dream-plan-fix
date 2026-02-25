import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class", '[data-theme="dark"]'],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--bg-main)",
                foreground: "var(--text-main)",
                accent: "var(--grid-color)",
                grid: "var(--grid-color)",
                neonCyan: "#00f3ff",
                neonMagenta: "#ff00ff",
            },
            boxShadow: {
                'neon-cyan': '0 0 15px rgba(0, 243, 255, 0.5)',
                'neon-magenta': '0 0 15px rgba(255, 0, 255, 0.5)',
            },
        },
    },
    plugins: [],
};

export default config;