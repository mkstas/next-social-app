import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/auth/')({
  component: AuthIndex,
});

function AuthIndex() {
  return (
    <div>
      <h1>Login</h1>
    </div>
  );
}
