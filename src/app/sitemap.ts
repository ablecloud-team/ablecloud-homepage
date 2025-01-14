import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.ablecloud.io/',
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: 'https://www.ablecloud.io/products/ablestack-vm',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://www.ablecloud.io/products/ablestack-hci',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://www.ablecloud.io/products/service/cube',
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: 'https://www.ablecloud.io/products/service/cell',
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: 'https://www.ablecloud.io/products/service/glue',
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: 'https://www.ablecloud.io/products/service/mold',
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: 'https://www.ablecloud.io/products/service/track',
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: 'https://www.ablecloud.io/products/service/wall',
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: 'https://www.ablecloud.io/products/service/koral',
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: 'https://www.ablecloud.io/products/service/genie',
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: 'https://www.ablecloud.io/products/service/silo',
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: 'https://www.ablecloud.io/products/service/over',
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: 'https://www.ablecloud.io/products/service/link',
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: 'https://www.ablecloud.io/applications/infra',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://www.ablecloud.io/applications/application',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://www.ablecloud.io/applications/dev',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://www.ablecloud.io/interview',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://www.ablecloud.io/partners',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://www.ablecloud.io/partners/program',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://www.ablecloud.io/resource/blog',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://www.ablecloud.io/resource/video',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://www.ablecloud.io/resource/ebook',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://www.ablecloud.io/company/about',
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: 'https://www.ablecloud.io/company/history',
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: 'https://www.ablecloud.io/company/certifications',
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: 'https://www.ablecloud.io/company/location',
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: 'https://www.ablecloud.io/contact',
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}
