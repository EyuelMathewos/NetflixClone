import React from 'react'
import styled, { css } from 'styled-components';


export const Slide = styled.div`
background-image: url('${props => props.content}');
background-repeat: no-repeat;
background-size: cover;
background-position: center; 
flex-shrink: 0;
width: ${props => props.width>400?props => props.width/4:props => props.width/3}px;
height: 100%;
&:hover {
    transform: scale(1.05);
}
}
`;

export default Slide