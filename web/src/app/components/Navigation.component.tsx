import React from 'react';

import { Flex, NavLink } from 'src/design-system';

type NavLinkProps = {
  to?: string;
  href?: string;
  title: string;
};

type NavigationProps = {
  navLinks: NavLinkProps[];
};

export const Navigation = ({ navLinks }: NavigationProps) => (
  <Flex as="nav">
    {navLinks.map(({ to, title, href }) => (
      <NavLink to={to} href={href} mr={3} key={`nav-link-${title}`}>
        {title}
      </NavLink>
    ))}
  </Flex>
);
