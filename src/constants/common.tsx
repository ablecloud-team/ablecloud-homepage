export const headerMenu = [
  {
    title: '제품',
    href: '/products/ablestack-vm',
    subMenu: [
      { title: 'ABLESTACK VM', href: '/products/ablestack-vm' },
      { title: 'ABLESTACK HCI', href: '/products/ablestack-hci' },
    ],
  },
  { title: '적용분야', href: '/applications/infra' },
  { title: '고객사', href: '/interview' },
  {
    title: '파트너',
    href: '/partners',
    subMenu: [
      { title: '프로그램 소개', href: '/partners/program' },
      { title: '파트너 현황', href: '/partners' },
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
  {
    title: '회사소개',
    href: '/company/about',
    subMenu: [
      { title: '회사소개 및 비전', href: '/company/about' },
      { title: '연혁', href: '/company/history' },
      { title: '인증 및 특허', href: '/company/certifications' },
      { title: '찾아오시는 길', href: '/' },
    ],
  },
];

export const pageHeaderHeight = {
  small: 374,
  smallMedium: 404,
  productService: 434,
  common: 506,
};

export const bgGrayPage = ['/interview', '/contact', '/partners'];

export const withoutHeaderPage = ['/resource/blog/'];
