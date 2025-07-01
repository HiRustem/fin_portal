import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: 'https://finformulas.ru' });

  sitemap.write({ url: '/', changefreq: 'monthly', priority: 1.0 });

  sitemap.end();

  const data = await streamToPromise(sitemap);
  createWriteStream('public/sitemap.xml').write(data);
}

generateSitemap();
