import React from 'react'
import styled, { css } from 'styled-components';

const SliderContent = props => (
  <div
    css={css`
      transform: translateX(-${props.translate,console.log(props.translate)}px);
      transition: transform ease-out ${props.transition};
      height: 100%;
      width: ${props.width}px;
      display: flex;
    `}
  >
    {props.children}
  </div>
)

export default SliderContent