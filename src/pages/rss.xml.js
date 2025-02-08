import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('book');

  return rss({
    title: 'Great litterature | Blog',
    description: 'My journey reading books',
    site: context.site,
    //items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    items: posts.map((book) => ({
      title: book.data.title,
      pubDate: book.data.pubDate,
      description: book.data.description,
      link: `/books/${book.id}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
