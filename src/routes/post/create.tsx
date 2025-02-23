import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/post/create')({
  component: () => <div>Hello /post/create!</div>,
});
