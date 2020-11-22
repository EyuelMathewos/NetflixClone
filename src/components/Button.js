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

  ${props => props.primary && css`
    padding: 6px 12px;
    background: #e50914;
    color: white;
    border: 1px solid red;
    font-family: Roboto ,Dancing Script,cursive, sans-serif;
    //font-size: 15px;
    width: 112px;
  `}
  ${props => props.secondary && css`
  padding: 6px 12px;
  background: #ddd5d5d6;
  color: black;
  border: none;
  outline:none;
  font-family: Roboto ,Dancing Script,cursive, sans-serif;
  font-size: 1em;
  font-weight:bold;
  margin:1em;
  padding: 0.25em 1em;
  width: 90px;
`}
  ${props => props.header && css`
    color: #FF2401;
    border: 1px solid #FF2401;
    font-family: Roboto ,Dancing Script,cursive, sans-serif;
    font-weight: bold;
    //font-size: 15px;
    width: 95px;
    padding: 6px 12px;
  `}
  ${props => props.dark && css`
    color: white;
    background:#1f1f1f;
    border: 1px solid #1f1f1f;
    font-family: Roboto ,Dancing Script,cursive, sans-serif;
    outline:none;
  `}
`;