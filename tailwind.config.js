/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#FAF8F5',        // Warm white / Light cream
          dark: '#1C1917',      // Charcoal header/footer
          accent: '#C59B27',    // Champagne Gold CTA buttons
          accentHover: '#B3891F',
          card: '#F4EFE6'       // Soft warm card background
        }
      }
    },
  },
  plugins: [],
}