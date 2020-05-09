import React from 'react'
import styled, { css } from 'styled-components';

// const Slide = ({ content, width }) => (
//   <div
//     css={css`
//       height: 100%;
//       width: ${width}px;
//       background-image: url('${content}');
//       background-size: cover;
//       background-repeat: no-repeat;
//       background-position: center;
//     `}
//   />
// )

const Slide=styled.img`
height: 100%;
width: ${props => props.width}px;
background-image: url('${props => props.content}');
background-size: cover;
background-repeat: no-repeat;
background-position: center;     
`;

export default Slide