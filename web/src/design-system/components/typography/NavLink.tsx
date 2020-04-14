/** @jsx jsx */
import { jsx, Link as ThemeUILink } from 'theme-ui';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { useCallback } from 'react';

export const NavLink = ({ to, href = null, ...props }) => {
  const history = useHistory();

  let match = useRouteMatch({
    path: to,
    exact: false
  });

  const onLinkClick = useCallback(() => {
    if (to && !href) {
      history.push(to);
    }
  }, [to, href, history]);

  return (
    <ThemeUILink
      variant="nav"
      onClick={onLinkClick}
      py={2}
      px={2}
      {...props}
      sx={{
        color: 'inherit',
        textDecoration: 'none',
        letterSpacing: 'tracked',
        textTransform: 'capitalize',
        borderBottom: match ? 3 : 0,
        borderBottomColor: 'primary-variant',
        ':hover': {
          cursor: 'pointer',
          opacity: 0.8,
        },
        ':focus': {
          color: 'inherit',
        },
      }}
    />
  );
};