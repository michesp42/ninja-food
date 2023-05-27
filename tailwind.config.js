/** @type {import('tailwindcss').Config} */
export const content = ["./public/*.html"];
export const theme = {
  extend: {
    colors: {
      primary: "#ff6363",
      secondary: {
        100: "#e2e2e5",
        200: "#888883",
      },
    },
    fontFamily: {
      body: ["Nunito"],
    },
  },
};
export const plugins = [];
