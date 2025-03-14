import { TheArticleCreate } from '@/widgets/the-article-create';
import { TheArticleFeed } from '@/widgets/the-article-feed';

export default function Root() {
  return (
    <section className='grid gap-4'>
      <TheArticleCreate />
      <TheArticleFeed />
    </section>
  );
}
