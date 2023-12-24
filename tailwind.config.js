/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        "custom-gradient": "linear-gradient(90deg, #D20653 0%, #FF951D 100%)"
      },
      colors: {
        "primary": "#D20653",
        "secondary": {
          500: "#FF951D",
          100: "#FFF5E9"
        },
      },
      borderRadius: {
        "21px": "21px",
      },
      fontSize: {
        "32px": "32px",
        "xxs": "10px",
        "xxxs": "8px"
      }
    },
  },
  plugins: [],
}
