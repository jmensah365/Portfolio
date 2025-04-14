/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './index.html', // Adjust paths to match your project structure
    './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {}, // Add your customizations here
    },
    plugins: [icons],
};
