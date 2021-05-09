import React from "react";
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import img from './img/movieposter.jpg';
export  const  Container  =  styled.div`
   position: relative;
      width: 100%; `;

 export const Nav = styled.nav`
    display: flex;
    position:relative;
    padding: 20px 0 20px 0;
    align-items: center;
    background-color: #181818;
    width: 100%;
    height:25px;
    justify-content: space-between;
    z-index: 1;
      
   @media (max-width: 768px) {
       
    flex-direction: column;
     
   }
   @media (max-width: 480px) {
    flex-direction: column;
    height:12px;
   }
   
      ${props => props.secondary && css`
      background-color: #00000080;
      `}
      `;
export const NavBrand = styled.img`
  width: 13vw;
`;

export const NavItems = styled.ul`list-style: none;
    padding-inline-start: 0;
    display: flex;
    align-items: center;`;

export const NavItem = styled(Link)`
    margin-right: 20px;
    cursor: pointer;
    transition: 250ms;
    cursor: pointer;
    color: #e5e5e5;
    text-decoration: none;

    &:hover {
        transform: scale(1.05);
}`;

export const NavItemButton = styled(NavItem)`
color: #FF2401;
border: 1px solid #FF2401;
font-family: Roboto ,Dancing Script,cursive, sans-serif;
font-weight: bold;
//font-size: 15px;
width: 95px;
padding: 6px 12px;
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
  ${props => props.primary && css`
  font-size: 1em;
  margin-right: 12px;
  color:white;
  `}
  ${props => props.secondary && css`
      font-size: 1em;
      margin-right: 12px;
      color:black;
  `}
  ${props => props.profile && css`
  font-size: 36px;
  margin-right: 38px;
  color: #e48307;
`}
`;




export const IconWrapper = styled.div`
    
    cursor: pointer;
    position: absolute;
    right: 0;
    margin-left:100px
      `;
  



//export default Icon
export const FormInput = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  background:#333;
  height:50px;
  width:100%;
  color: #fff;
  font-size: 16px;
  border: 0;
  outline: none;
  border-radius: 4px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;

  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #a09e9e;
    opacity: 1; /* Firefox */
  }
  
  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: #a09e9e;
  }
  
  ::-ms-input-placeholder { /* Microsoft Edge */
    color: #a09e9e;
  }
  &:focus {
    outline: none;
    border-bottom:2px solid #ffa00a
  }
  ${props => props.checkbox && css`
  // font-size: 1em;
  // margin-right: 12px;
  //padding: 0.5em;
  margin: 0px 16px;
  color:#a09e9e;
  width:20px;
  //height:10px;
  `}
`;

export const FullImage = styled.div`
position: relative;
background-image: url(${img});
background-repeat: no-repeat;
background-size: cover;
width: 100%;
height: 100%;
top:
}
`;
export const ATag = styled.a`
color: #fff;
text-decoration: none;

&:hover {
  color: #737373;
}
`;
export const Profilepic = styled.div`
width: 36px;
height: 36px;
margin-right: 38px;
background: #e48307;
border-radius:8px;
`;