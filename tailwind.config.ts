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
      //home
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
      'home-main-card-1': "url('/images/home/main-card-1.png')",
      'home-main-card-2': "url('/images/home/main-card-2.png')",
      'home-main-card-3': "url('/images/home/main-card-3.png')",
      'home-application-1': "url('/images/home/application-1.png')",
      'home-application-2': "url('/images/home/application-2.png')",
      'home-application-3': "url('/images/home/application-3.png')",
      'home-application-4': "url('/images/home/application-4.png')",
      'home-application-5': "url('/images/home/application-5.png')",
      //products
      'products-header-ablestack': "url('/images/products/header-ablestack.png')",
      'products-header-cube': "url('/images/products/header-cube.png')",
      'products-header-cell': "url('/images/products/header-cell.png')",
      'products-header-glue': "url('/images/products/header-glue.png')",
      'products-header-mold': "url('/images/products/header-mold.png')",
      'products-header-track': "url('/images/products/header-track.png')",
      'products-header-wall': "url('/images/products/header-wall.png')",
      'products-header-koral': "url('/images/products/header-koral.png')",
      'products-header-genie': "url('/images/products/header-genie.png')",
      'products-header-silo': "url('/images/products/header-silo.png')",
      'products-header-over': "url('/images/products/header-over.png')",
      'products-header-link': "url('/images/products/header-link.png')",
      //application
      'application-header': "url('/images/applications/header-application.png')",
    },
    extend: {
      scale: {
        '102': '1.02',
      },
      animation: {
        bannermovetoleft: 'bannermovetoleft 15s linear infinite',
        bannermovetoright: 'bannermovetoright 15s linear infinite',
      },
      keyframes: {
        bannermovetoleft: {
          '0%': { transform: 'translateX(var(--start-x, 0px))' },
          '100%': { transform: 'translateX(var(--end-x, 0px))' },
        },
        bannermovetoright: {
          '0%': { transform: 'translateX(var(--start-x, 0px))' },
          '100%': { transform: 'translateX(var(--end-x, 0px))' },
        },
      },
      screens: {
        sm: '640px',
        md: '768px', // ~ mobile
        lg: '960px', // ~ tablet
        xl: '1260px', // ~ pc
        max: '1440px', // maxSize
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
export default config;
