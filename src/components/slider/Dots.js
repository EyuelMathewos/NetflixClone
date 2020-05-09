import React from 'react'
import styled, { css } from 'styled-components';

const Dot = styled.div`
      padding: 10px;
      margin-right: 5px;
      cursor: pointer;
      border-radius: 50%;
      background: ${props => props.active ? 'black' : 'white'};
    `;

const Dots = styled.div`
      position: absolute;
      bottom: 25px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      ${props => props.slides.map((slide, i) => (
        <Dot key={props => props.slide} active={props => props.activeSlide === i} />
      ))}
    `




// const Arrow = styled.div`
//       display: flex;
//       position: absolute;
//       top: 50%;
//       ${props => props.direction === 'right' ? `right: 25px` : `left: 25px`};
//       height: 50px;
//       width: 50px;
//       justify-content: center;
//       background-image: url('${props => props.direction === 'right' ? rightArrow  : leftArrow}');
//       background-repeat: no-repeat;
//       background-position: center;
//       border-radius: 50%;
//       cursor: pointer;
//       align-items: center;
//       transition: transform ease-in 0.1s;
//       &:hover {
//         transform: scale(1.1);
//       }
//       img {
//         transform: translateX(${props => props.direction === 'left' ? '-2' : '2'}px);
//         &:focus {
//           outline: 0;
//         }
//       }

// `;

export default Dots