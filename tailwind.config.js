/** @type {import('tailwindcss').Config} */
module.exports = {
content: ["./src/**/*.{js,jsx,ts,tsx}"],
theme: {
extend: {
  width: {
    '192' : '48rem',
    '288' : '72rem',
    '300' : '75rem',
    '360' : '90rem'
  }
},
},
plugins: [],
};