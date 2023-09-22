import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-30': '#FADFA1',
        'primary-50': '#F3AE15',
        'secondary-50': '#74C3E5',
        'gray-50': '#D9D9D9',
        'black-50': '#515255',
        background: '#ffffff',
        'background-header': 'rgba(255, 255, 255, 0.8)',
        'buttom-shadow-primary': 'rgb(243, 173, 21) 0px 20px 50px 4px',
        'buttom-shadow-secondary': 'rgb(116, 195, 229) 0px 20px 50px 4px',
        'buttom-shadow-tertiary': 'rgb(244, 153, 156) 0px 20px 50px 4px',
      },
    },
  },
  plugins: [],
};
export default config;
