/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // your source files
    "./app/**/*.{js,ts,jsx,tsx}"  // App Router if used
  ],
  theme: {
    extend: {
      backgroundImage: {
        'radial-blue': 'radial-gradient(circle, #0f172a, #1e3a8a, #1e40af)', // dark-blue to indigo
      },
    },
  },
  plugins: [],
}
