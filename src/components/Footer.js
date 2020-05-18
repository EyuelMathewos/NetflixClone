import styled, { css } from 'styled-components';
  export const Footer = styled.nav`
  display: flex;
  padding: 20px 0 20px 0;
  align-items: center;
  background-color: #181818;
  width: 100%;
  height:25px;
  justify-content: space-between;

  

  @media (max-width: 786px) {
      flex-direction: column;
  }
`;