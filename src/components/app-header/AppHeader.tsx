import { FC, useEffect, useState } from 'react';
import { UContainer, USheet } from '@/shared/ui';
import { AppHeaderLogo } from './app-header-logo';
import { AppHeaderButton } from './app-header-button';
import { AppHeaderMenu } from './app-header-menu';

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
      <USheet bordered='bottom' rounded={false}>
        <UContainer className='relative flex justify-between items-center'>
          <AppHeaderLogo />
          <AppHeaderButton id='header_button' onClick={onClickButton} />
          <AppHeaderMenu id='header_menu' isOpen={isOpenMenu} />
        </UContainer>
      </USheet>
    </header>
  );
};
