/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#B02990',
        'primary-dark': '#8a1f70',
        'primary-light': '#d43ab3',
        secondary: '#EECFE3',
        'secondary-dark': '#dba8cc',
        'secondary-light': '#f5e4ef',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        lora: ['Lora', 'serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(176, 41, 144, 0.1)',
        'hover': '0 8px 30px rgba(176, 41, 144, 0.2)',
      },
    },
  },
  plugins: [],
}
