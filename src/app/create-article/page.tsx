import { UiHeading, UiLink, UiSheet } from '@/shared/ui';
import { ROUTES } from '@/shared/utils/constants';
import { CreateArticleForm } from '@/features/create-article-form';

export default function CreateArticle() {
  return (
    <section>
      <UiSheet>
        <div className='grid gap-4'>
          <UiLink href={ROUTES.INDEX}>...Вернутья</UiLink>
          <UiHeading>Создание поста</UiHeading>
          <CreateArticleForm />
        </div>
      </UiSheet>
    </section>
  );
}
