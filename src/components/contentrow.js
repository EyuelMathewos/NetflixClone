import styled, { css } from 'styled-components';
  export const ContentRow = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;
export const ContentBlock = styled.div`
  
display: flex;
width: 100%;
position: relative;
overflow: hidden; 
`


export const SliderContent = styled.div`
  transform: translateX(-${props => props.translate}px);
  transition: transform ease-out ${props => props.transition}s;
  height: 100%;
  width: ${props => props.width}px;
  display: flex;
`