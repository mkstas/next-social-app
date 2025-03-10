import { CreateArticleForm } from '@/features/create-article-form';
import { UiSheet } from '@/shared/ui';

export default function Create() {
  return (
    <section>
      <UiSheet>
        <CreateArticleForm />
      </UiSheet>
    </section>
  );
}
