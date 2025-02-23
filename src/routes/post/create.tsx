import { Controller, useForm } from 'react-hook-form';
import { createFileRoute } from '@tanstack/react-router';
import { Button, Input, Sheet, Textarea } from '@/shared';
import { Post } from '@/stores/queries';

export const Route = createFileRoute('/post/create')({
  component: PostCreate,
});

function PostCreate() {
  const { control, formState } = useForm<Partial<Post>>();

  return (
    <Sheet className='p-4'>
      <h1 className='mb-6 text-xl font-semibold text-center'>Создание поста</h1>
      <form className='space-y-4'>
        <Controller
          control={control}
          name='title'
          defaultValue=''
          rules={{
            required: 'Это поле обязательно',
            maxLength: {
              value: 40,
              message: 'Не более 40 символов',
            },
          }}
          render={({ field }) => (
            <Input
              {...field}
              error={formState.errors.title?.message}
              type='text'
              id='title'
              label='Заголовок'
              placeholder='Заголовок'
            />
          )}
        />
        <Controller
          control={control}
          name='content'
          defaultValue=''
          rules={{
            required: 'Это поле обязательно',
          }}
          render={({ field }) => (
            <Textarea
              {...field}
              error={formState.errors.title?.message}
              id='content'
              label='Содержание'
              placeholder='Содержание'
              rows={6}
            />
          )}
        />
        <Button>Создать</Button>
      </form>
    </Sheet>
  );
}
