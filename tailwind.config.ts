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
      'home-main-card-1': "url('/images/home/main-card-1.png')",
      'home-main-card-2': "url('/images/home/main-card-2.png')",
      'home-main-card-3': "url('/images/home/main-card-3.png')",
      'home-solution-1': "url('/images/home/solution-1.png')",
      'home-solution-2': "url('/images/home/solution-2.png')",
      'home-solution-3': "url('/images/home/solution-3.png')",
      'home-solution-4': "url('/images/home/solution-4.png')",
      'home-solution-5': "url('/images/home/solution-5.png')",
    },
    extend: {
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
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
export default config;
