/** @jsx jsx */
import { jsx, useColorMode, Flex, IconButton } from 'theme-ui';
import { Navigation } from './Navigation.component';
import { MenuButton } from 'theme-ui';

export interface PageProps {
  children: any;
}

const ColorToggle = (props: any) => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <IconButton
      {...props}
      onClick={e => {
        setColorMode(colorMode === 'default' ? 'dark' : 'default');
      }}
      aria-label="Toggle dark mode"
    >
      <svg
        viewBox="0 0 32 32"
        fill="currentcolor"
        sx={{
          width: '1.6em',
          height: '1.6em',
          display: 'block',
          color: 'primary.contrast',
        }}
      >
        <circle cx="16" cy="16" r="14" fill="none" stroke="currentcolor" strokeWidth="4"></circle>
        <path d=" M 16 0 A 16 16 0 0 0 16 32 z "></path>
      </svg>
    </IconButton>
  );
};

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
        <Flex>
          <ColorToggle mr={2} />
          <MenuButton />
        </Flex>
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
