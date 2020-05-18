import React from "react";
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export  const  Container  =  styled.div`
   position: relative;
      width: 100%; `;

 export const Nav = styled.nav`
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
    @media (max-width: 1024px) {
        flex-direction: column;
      }
`;

export const NavBrand = styled(Link)`
    flex-grow: 1;
    font-family: Roboto ,Dancing Script,cursive, sans-serif;
    font-weight: bold;
    font-size: 24px;
    font-weight: 700;
    color: #FF2401;
    text-decoration: none;
    padding-left: 20px;
`;

export const NavItems = styled.ul`list-style: none;
    padding-inline-start: 0;
    display: flex;
    align-items: center;`;

export const NavItem = styled(Link)`margin-right: 20px;
    cursor: pointer;
    transition: 250ms;
    cursor: pointer;
    color: #e5e5e5;
    text-decoration: none;

    &:hover {
        transform: scale(1.05);
}`;

export const NavItemButton = styled(NavItem)`padding: 10px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    border: 1px solid #663399;
    /* add additional styles for primary*/
    ${(props) =>
        props.primary &&
        css`
            background-color: #663399;
            color: white;
        `}
    `;
 export const Title = styled.h2`
    padding-left: 20px;
    margin: 8px 0 2px;
    font-family: Helvetica ,Roboto ,Dancing Script,cursive, sans-serif;
    font-weight: 500;
    font-size:20px;
    color: #ffffff;
  `;
 export const Wrapper = styled.section`
  padding:2px;
  background: #181818;
`;

export const Icon = styled.div`
      height: 50px;
      width: 50px;
      background-image: url('${props => props.content}');
      background-repeat: no-repeat;
      background-position: center;
`;