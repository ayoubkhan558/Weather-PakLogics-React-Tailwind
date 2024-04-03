
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        '24': 'repeat(24, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-22': 'span 22 / span 22',
        'span-21': 'span 21 / span 21',
        'span-20': 'span 20 / span 20',
        'span-19': 'span 19 / span 19',
        'span-18': 'span 18 / span 18',
      },
      borderRadius: {
        '1': '5px',
        '2': '7px',
        '3': '10px',
        '4': '15px',
      },
      boxShadow: {
        'card': '0px 4px 15px 0px rgba(0, 0, 0, 0.06)'
      },
      colors: {
        'white': '#ffffff',
        primary: {
          100: "#d1f1ff",
          200: "#a3e4fe",
          300: "#76d6fe",
          400: "#48c9fd",
          500: "#1abbfd",
          600: "#1596ca",
          700: "#107098",
          800: "#0a4b65",
          900: "#052533"
        },
        body: 'var(--color-body)',
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
