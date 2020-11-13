import React from "react";
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export  const  Container  =  styled.div`
   position: relative;
      width: 100%; `;

 export const Nav = styled.nav`
    display: flex;
    padding: 20px 0px;
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
    paddingLeft: 20px;
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

// const Icon = ({ type, onClick }) => (
//     <i className={`Icon fa fa-${type} ${type}`} onClick={onClick} />
//   )
  
//   Icon.defaultProps = {
//     onClick: null
//   }
//   export default Icon
export const LinkS = styled.button`
  background: Transparent;
  border: none;
  &:hover {
    border: none;
}
.LinkS:focus {
    outline: none;
    box-shadow: none;
    border: none;
  }
`;
export const Icon = styled.i`
font-size: 32px;
margin-right: 25px;
color:red;

  ${props => props.secondary && css`
      //font-size: 32px;
      margin-right: 25px;
      color:black;
  `}
`;




export const IconWrapper = styled.div`
    
    cursor: pointer;
    position: absolute;
    right: 0;
    margin-left:100px
      `;
  



//export default Icon