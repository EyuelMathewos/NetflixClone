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
export const Slide = styled.div`
background-image: url('${props => props.content}');
background-repeat: no-repeat;
background-size: cover;
background-position: center; 
flex-shrink: 0;
width: 300px;
height: 300px;
&:hover {
    transform: scale(1.05);
}
}
`;
// const Slide=styled.img`
// height: 300px;
// width: 300px;
// background-image: url('${props => props.content}');
// background-size: cover;
// background-repeat: no-repeat;
// background-position: center;   
// display: flex;
// &:hover {
//     transform: scale(1.05);
// }
// `;

export default Slide