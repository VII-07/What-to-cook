/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // Для файлів у `app`
    "./src/components/**/*.{js,ts,jsx,tsx}", // Для компонентів

  ],
  theme: {
    extend: {
    }, // Тут можна додати свої кастомізації
  },
  plugins: [],
};