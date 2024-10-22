import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/auth/register')({
  component: AuthRegister,
});

function AuthRegister() {
  return <div></div>;
}
