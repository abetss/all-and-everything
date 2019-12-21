import React, { useState, useEffect } from 'react';
import { Button, Card, Flex, Box } from 'rebass';
import { TextField } from '@material-ui/core';
import styled from 'styled-components';

export const Input = styled.input`
  font-size: 16px;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  color: #262626;
  border-radius: 3px;
  color: #999;
  cursor: text;
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  background: #fafafa;
  margin: 4px;
  &:active,
  &:focus {
    text-align: left;
  }
`;
// { name, label, type, variant, onChange, value }
export { TextField };
