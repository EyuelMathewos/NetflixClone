import React from 'react'
import styled, { css } from 'styled-components';

// const SliderContent = props => (
//   <div
//     css={css`
//       transform: translateX(-${props.translate}px);
//       transition: transform ease-out ${props.transition}s;
//       height: 100%;
//       width: ${props.width}px;
//       display: flex;
//     `}
//   >
//     {props.children}
//   </div>
// )

const SliderContent=styled.div`
      position: relative;
      transform: translateX(-${props => props.translate}px);
      transition: transform ease-out ${props => props.transition};
      height: 100%;
      width: 100%;
      display: flex;
      background-color: #181819;
      overflow-x: auto;
      overflow-y: hidden;
      scroll-behavior: smooth;
      ::-webkit-scrollbar {
        width: 0px;  /* Remove scrollbar space */
        background: transparent;  /* Optional: just make scrollbar invisible */
        display: none;
    }
    /*FireFox*/
  scrollbar-width: none;
  /*IE10+*/
  -ms-overflow-style: -ms-autohiding-scrollbar;
    `;
export default SliderContent