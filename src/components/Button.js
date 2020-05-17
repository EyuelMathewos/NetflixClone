import styled, { css } from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 8rem;
  background: transparent;
  color: white;
  border: 1px solid white;

  ${props => props.primary && css`
    background: white;
    color: palevioletred;
  `}
  ${props => props.header && css`
    color: #FF2401;
    border: 1px solid #FF2401;
    font-family: Roboto ,Dancing Script,cursive, sans-serif;
    font-weight: bold;
    font-size: 12px;
  `}
`