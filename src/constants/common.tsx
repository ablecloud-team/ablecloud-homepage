export const headerMenu = [
  {
    title: '제품',
    href: '/products/ablestack',
    subMenu: [
      { title: 'ABLESTACK VM', href: '/products/ablestack' },
      { title: 'ABLESTACK HCI', href: '/products/ablestack' },
    ],
  },
  { title: '적용분야', href: '/applications' },
  { title: '고객사', href: '/interview' },
  {
    title: '파트너',
    href: '/',
    subMenu: [
      { title: '프로그램 소개', href: '/' },
      { title: '파트너 현황', href: '/' },
    ],
  },
  {
    title: '리소스',
    href: '/resource/blog',
    subMenu: [
      { title: '소식', href: '/resource/blog' },
      { title: '동영상', href: '/resource/video' },
      { title: '백서/ebook', href: '/resource/ebook' },
    ],
  },
  // { title: '제품문의', href: '/contact' },
  {
    title: '회사소개',
    href: '/',
    subMenu: [
      { title: '회사소개 및 비전', href: '/' },
      { title: '연혁', href: '/' },
      { title: '인증 및 특허', href: '/' },
      { title: '찾아오시는 길', href: '/' },
    ],
  },
];

export const pageHeaderHeight = {
  small: 374,
  smallMedium: 404,
  productDetail: 434,
  common: 506,
};

export const bgGrayPage = ['/interview', '/contact'];

export const withoutHeaderPage = ['/resource/blog/'];
