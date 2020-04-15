/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Navigation } from './Navigation.component';
import { MenuButton } from 'theme-ui';

export interface PageProps {
  children: any;
}

export const Layout = ({ children }: PageProps) => {
  const navLinks = [
    { to: '/terms', title: 'Terms' },
    { to: '/index', title: 'Index' },
    { to: '/tags', title: 'tags' },
  ];

  return (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <header
        sx={{
          width: '100%',
          bg: 'primary.dark',
          px: 3,
          color: 'primary.contrast',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Navigation navLinks={navLinks} />
        <MenuButton />
      </header>
      <main
        sx={{
          width: '100%',
          flex: '1 1 auto',
        }}
      >
        {children}
      </main>
    </div>
  );
};
