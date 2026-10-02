// Goodreads closed its API to new keys in 2020, but each shelf still has a
// public RSS feed. It sends no CORS headers, so it's read at build time; the
// deploy workflow rebuilds on a schedule to keep it current.
const FEED_URL =
  'https://www.goodreads.com/review/list_rss/138802846?shelf=currently-reading';

export interface Book {
  title: string;
  author: string;
  url: string;
  cover: string;
}

const field = (xml: string, tag: string) =>
  xml
    .match(new RegExp(String.raw`<${tag}>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?</${tag}>`))?.[1]
    ?.trim();

/** Most recently shelved book on the currently-reading shelf, or null. */
export async function getCurrentlyReading(): Promise<Book | null> {
  try {
    const res = await fetch(FEED_URL);
    if (!res.ok) return null;
    const item = (await res.text()).match(/<item>([\s\S]*?)<\/item>/)?.[1];
    if (!item) return null;

    const title = field(item, 'title');
    const author = field(item, 'author_name');
    const bookId = field(item, 'book_id');
    const cover = field(item, 'book_large_image_url');
    if (!title || !author || !bookId || !cover) return null;

    return {
      title,
      author,
      url: `https://www.goodreads.com/book/show/${bookId}`,
      cover,
    };
  } catch {
    return null;
  }
}
