/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        colors: {
            primary: {
                "lime-green": "hsl(163, 72%, 41%)",
                "bright-red": "hsl(356, 69%, 56%)",
                facebook: "hsl(208, 92%, 53%)",
                twitter: "hsl(203, 89%, 53%)",
                youtube: "hsl(348, 97%, 39%)",
            },
            darkTheme: {
                toggle: "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))",
            },
            lightTheme: {
                toggle: "hsl(230, 22%, 74%)",
            },
            neutralDarkTheme: {
                "very-dark-blue-bg": "hsl(230, 17%, 14%)",
                "very-dark-blue-top-bg-pattern": "hsl(232, 19%, 15%)",
                "dark-desaturated-blue-card-bg": "hsl(228, 28%, 20%)",
                "dark-desaturated-blue-card-hover-bg": "hsl(228, 28%, 25%)",
                "desaturated-blue-text": "hsl(228, 34%, 66%)",
                "white-text": "hsl(0, 0%, 100%)",
            },
            neutralLightTheme: {
                "white-bg": "hsl(0, 0%, 100%)",
                "very-pale-blue-top-bg-pattern": "hsl(225, 100%, 98%)",
                "light-grayish-blue-card-bg": "hsl(227, 47%, 96%)",
                "light-grayish-blue-card-hover-bg": "hsl(227, 47%, 92%)",
                "dark-grayish-blue-text": "hsl(228, 12%, 44%)",
                "very-dark-blue-text": "hsl(230, 17%, 14%)",
            },
        },
        extend: {
            fontFamily: {
                inter: ["Inter", "sans-serif"],
            },
            backgroundImage: {
                instagram:
                    "linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%))",
                "toggle-gradient":
                    "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))",
            },
            screens: {
                tablet: "725px",
                desktop: "1175px",
            },
        },
    },
    plugins: [],
};
