import { createFileRoute } from '@tanstack/react-router';
import { FeedItem } from '@/components/feed-item';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <section className='space-y-4'>
      <FeedItem />
      <FeedItem />
      <FeedItem />
    </section>
  );
}
