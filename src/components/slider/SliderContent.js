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
transform: translateX(-${props => props.translate}px);
      transition: transform ease-out ${props => props.transition}s;
      height: 100%;
      width: ${props => props.width}px;
      display: flex;
      
    `;
export default SliderContent