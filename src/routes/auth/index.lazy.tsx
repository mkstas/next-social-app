import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/auth/')({
  component: AuthIndex,
});

function AuthIndex() {
  return <div></div>;
}
