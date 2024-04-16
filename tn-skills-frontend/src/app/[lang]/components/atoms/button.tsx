import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../../../../context/Theme';

const ButtonContainer = styled.button<{ theme: string }>`
  background-color: ${({ theme }) => (theme === 'light' ? '#007bff' : '#6c757d')};
  color: ${({ theme }) => (theme === 'light' ? '#fff' : '#000')};
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Button = (props: {onClick: () => void; children: React.ReactNode}) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ButtonContainer theme={theme} onClick={() => {toggleTheme(); props.onClick;}}>
      Switch to {theme === 'light' ? 'dark' : 'light'} theme
      {props.children}
    </ButtonContainer>
  );
};

export default Button;
