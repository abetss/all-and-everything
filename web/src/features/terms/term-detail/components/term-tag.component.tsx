import React from 'react';
import { Badge } from '../../../../design-system';

interface TermTagProps {
  children: string | number;
  onClick: () => void;
}

export const TermTag = ({ children, onClick }: TermTagProps) => (
  <Badge onClick={onClick} bg="primary-variant">{`#${children}`}</Badge>
);
