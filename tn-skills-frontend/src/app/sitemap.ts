import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'http://localhost:3000',
      alternates: {
        languages: {
          tn: 'http://localhost:3000/tn',
        },
      },
    },
    {
      url: 'http://localhost:3000/about',
      alternates: {
        languages: {
          tn: 'http://localhost:3000/tn/about',
        },
      },
    },
    {
      url: 'http://localhost:3000/blog',
      alternates: {
        languages: {
          tn: 'http://localhost:3000/tn/blog',
        },
      },
    },
  ]
}