export default {
    content: ["./index.html", "./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#00f0ff",
                secondary: "#0085ff",
                dark: "#0a0a0f",
                darker: "#050508",
                light: "#f0f0f0",
                gray: "#1a1a23",
            },
            animation: {
                float: "float 6s ease-in-out infinite",
                fade: "fadeIn 1s ease forwards",
                pulseTg: "pulse 2s infinite",
                "spin-slow": "spin 20s linear infinite",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0", transform: "translateY(30px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                float: {
                    "0%,100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-15px)" },
                },
                gradientFlow: {
                    "0%,100%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                },
                pulse: {
                    "0%": { boxShadow: "0 0 0 0 rgba(0,240,255,.4)" },
                    "70%": { boxShadow: "0 0 0 15px rgba(0,240,255,0)" },
                    "100%": { boxShadow: "0 0 0 0 rgba(0,240,255,0)" },
                },
            },
        },
    },
    plugins: [],
};
