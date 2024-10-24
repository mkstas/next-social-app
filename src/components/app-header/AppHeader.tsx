import { useState } from 'react';
import { Container, Sheet } from '@/shared/ui';
import { AppHeaderLogo } from './app-header-logo';
import { AppHeaderButton } from './app-header-button';
import { AppHeaderMenu } from './app-header-menu';

export const AppHeader = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const onClickButton = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <header className='fixed top-0 left-0 w-full'>
      <Sheet bordered='bottom' rounded={false}>
        <Container classname='flex justify-between items-center relative'>
          <AppHeaderLogo />
          <AppHeaderButton onClick={onClickButton} />
          {isOpenMenu && <AppHeaderMenu />}
        </Container>
      </Sheet>
    </header>
  );
};
