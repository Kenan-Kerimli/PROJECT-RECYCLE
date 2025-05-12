import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  outline: none;
  
  ${props => props.variant === 'secondary' 
    ? css`
      background-color: transparent;
      border: 2px solid #1a1a1a;
      color: #1a1a1a;
      
      &:hover {
        background-color: #1a1a1a;
        color: white;
      }
    `
    : css`
      background-color: #1a1a1a;
      color: white;
      
      &:hover {
        background-color: #333;
        transform: translateY(-2px);
      }
    `
  }
`;

export const Button = ({ children, variant, ...props }) => {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};
