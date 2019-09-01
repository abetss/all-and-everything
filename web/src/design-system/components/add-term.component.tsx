import React from 'react';
import { Button } from 'rebass';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

interface AddTermProps {
  pageView?: string;
}

export const AddTerm = ({ pageView }: AddTermProps) => (
  <Link to={'/create'}>
    <Button bg="secondary" px={3} mr={3}>
      +
    </Button>
  </Link>
);
