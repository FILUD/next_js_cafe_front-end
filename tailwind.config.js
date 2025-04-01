/** @type {import('tailwindcss').Config} */
import scrollbarHide from 'tailwind-scrollbar-hide'

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",

  ],
    theme: {
        extend: {
            colors: {
                'custom_orage': '#FF902A',
                'custom_brown': '#2F2105',
                'custom_peach': '#F9D9AA',
                'custom_bg': '#F6EBDA',
                'custom_light_gray': '#7E7D7A'
            },
            fontFamily: {
              'notosanslao': ['NotoSansLao', 'sans-serif'], 
              'poppins': ['Poppins', 'sans-serif'], 
            },
        },
    },
    plugins: [scrollbarHide]
}