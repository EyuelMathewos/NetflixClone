import styled, { css } from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 112px;
  background: transparent;
  color: white;
  border: 1px solid white;
  outline:none;
  ${props => props.primary && css`
    padding: 8px 12px;
    background: #FF2401;
    color: white;
    border: 1px solid red;
    font-family: Roboto ,Dancing Script,cursive, sans-serif;
    font-size: 18px;
    width: 150px;
  `}
  ${props => props.secondary && css`
  padding: 4px 0px;
  background: #fff;
  color: black;
  border: 1px solid #fff;
  font-family: Roboto ,Dancing Script,cursive, sans-serif;
  font-size: 32px;
  font-weight: bold;
  width: 150px;
`}
  ${props => props.header && css`
    color: #FF2401;
    border: 1px solid #FF2401;
    font-family: Roboto ,Dancing Script,cursive, sans-serif;
    font-weight: bold;
    font-size: 18px;
    width: 95px;
    padding: 8px 12px;
  `}
`