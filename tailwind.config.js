/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                lightGrayishBlue: "#f7f8fc",
                blackWith18: "#00000018",
            },
            fontFamily: {
                rubik: ["Rubik", "sans-serif"],
            },
            height: {
                sixtyVH: "60vh",
                sixtyEightVH: "68vh",
            },
        },
    },
    plugins: [],
};
