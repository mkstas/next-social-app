import { FC, useEffect, useState } from 'react';
import { Container, Sheet } from '@/shared';
import { AppHeaderLogo } from './app-header-logo';
import { AppHeaderButton } from './app-header-button';
import { AppHeaderMenu } from './app-header-menu';

export const AppHeader: FC = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const closeMenu = (event: Event) => {
    const headerMenu = (event?.target as HTMLElement).closest('#headerMenu');
    const headerButton = (event?.target as HTMLElement).closest('#headerButton');
    if (!headerMenu && !headerButton) setIsOpenMenu(false);
  };

  useEffect(() => {
    isOpenMenu
      ? window.addEventListener('mousedown', closeMenu)
      : window.removeEventListener('mousedown', closeMenu);
  }, [isOpenMenu]);

  return (
    <header className='fixed top-0 left-0 w-full z-50'>
      <Sheet bordered='bottom' rounded={false}>
        <Container className='relative flex justify-between items-center'>
          <AppHeaderLogo />
          <AppHeaderButton onClickButton={() => setIsOpenMenu(!isOpenMenu)} />
          <AppHeaderMenu isOpenMenu={isOpenMenu} />
        </Container>
      </Sheet>
    </header>
  );
};
