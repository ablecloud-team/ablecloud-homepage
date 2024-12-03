import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/templates/**/*.{js,ts,jsx,tsx,mdx}',
    './src/constants/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    backgroundImage: {
      'home-header-1': "url('/images/home/header-1.png')",
      'home-header-2': "url('/images/home/header-2.png')",
      'home-header-3': "url('/images/home/header-3.png')",
      'home-header-4': "url('/images/home/header-4.png')",
      'home-header-5': "url('/images/home/header-5.png')",
      'home-mobile-header-1': "url('/images/home/mobile-header-1.png')",
      'home-mobile-header-2': "url('/images/home/mobile-header-2.png')",
      'home-mobile-header-3': "url('/images/home/mobile-header-3.png')",
      'home-mobile-header-4': "url('/images/home/mobile-header-4.png')",
      'home-mobile-header-5': "url('/images/home/mobile-header-5.png')",
    },
    extend: {
      screens: {
        sm: '640px',
        md: '768px', // ~ mobile
        lg: '960px', // ~ tablet
        xl: '1260px', // ~ pc
      },
    },
  },
  plugins: [],
};
export default config;
