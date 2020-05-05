import React from 'react'
import styled, { css } from 'styled-components';
import leftArrow from '../img/left-arrow.svg'
import rightArrow from '../img/right-arrow.svg'

// const Arrow = ({ direction, handleClick }) => (
//   <div
//     onClick={handleClick}
//     css={`
//       display: flex;
//       position: absolute;
//       top: 50%;
//       ${direction === 'right' ? `right: 25px` : `left: 25px`};
//       height: 50px;
//       width: 50px;
//       justify-content: center;
//       background: white;
//       border-radius: 50%;
//       cursor: pointer;
//       align-items: center;
//       transition: transform ease-in 0.1s;
//       &:hover {
//         transform: scale(1.1);
//       }
//       img {

//         transform: translateX(${direction === 'left' ? '-2' : '2'}px);
//         &:focus {
//           outline: 0;
//         }
//       }
//     `}
//   >
//     {direction === 'right' ? <img src={rightArrow} /> : <img src={leftArrow} />}
//   </div>
// )

const Arrow = styled.div`
      display: flex;
      position: absolute;
      top: 50%;
      ${props => props.direction === 'right' ? `right: 25px` : `left: 25px`};
      height: 50px;
      width: 50px;
      justify-content: center;
      background: white;
      border-radius: 50%;
      cursor: pointer;
      align-items: center;
      transition: transform ease-in 0.1s;
      &:hover {
        transform: scale(1.1);
      }
      img {
        transform: translateX(${props => props.direction === 'left' ? '-2' : '2'}px);
        &:focus {
          outline: 0;
        }
      }
      {direction === 'right' ? <img src={rightArrow} /> : <img src={leftArrow} />}
`;
export default Arrow