import { FC, useEffect, useState } from 'react';
import { Container, Sheet } from '@/shared/ui';
import { AppHeaderMenu } from './app-header-menu';
import { AppHeadaerLogo } from './app-header-logo';
import { AppHeaderButton } from './app-haeder-button';

export const AppHeader: FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const onClickButton = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const closeMenu = (e: Event) => {
    if (
      !(e?.target as HTMLElement).closest('#header_menu') &&
      !(e?.target as HTMLElement).closest('#header_button')
    ) {
      setIsOpenMenu(false);
    }
  };

  useEffect(() => {
    if (isOpenMenu) {
      window.addEventListener('mousedown', closeMenu);
    } else {
      window.removeEventListener('mousedown', closeMenu);
    }
  }, [isOpenMenu]);

  return (
    <header className='fixed top-0 left-0 w-full'>
      <Sheet bordered='bottom' rounded={false}>
        <Container className='relative flex justify-between items-center'>
          <AppHeadaerLogo />
          <AppHeaderButton onClickButton={onClickButton} />
          <AppHeaderMenu isOpenMenu={isOpenMenu} />
        </Container>
      </Sheet>
    </header>
  );
};
