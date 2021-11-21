import styled from "styled-components";

export const Split = styled.div`
position: relative;
background-image: url('${props => props.content}');
background-repeat: no-repeat;
background-size: cover;
width: 100%;
height: 100%;
top:
}
`;

export const Synopsis= styled.div`
  position:relative;
  top:0;
  bottom:0;
  left:0;
  padding-top: 150px;
  padding-left: 20px;
  width: 40%;
  color: white;
  background: linear-gradient(to right,#171717 0,rgba(23,23,23,.98) 20%,rgba(23,23,23,.97) 25%,rgba(23,23,23,.95) 35%,rgba(23,23,23,.94) 40%,rgba(23,23,23,.92) 45%,rgba(23,23,23,.9) 50%,rgba(23,23,23,.87) 55%,rgba(23,23,23,.82) 60%,rgba(23,23,23,.75) 65%,rgba(23,23,23,.63) 70%,rgba(23,23,23,.45) 75%,rgba(23,23,23,.27) 80%,rgba(23,23,23,.15) 85%,rgba(23,23,23,.08) 90%,rgba(23,23,23,.03) 95%,rgba(23,23,23,0) 100%);
  `;

export const SplitTitle = styled.h1`
  font-size: 2.9vw;
`;

export const SplitImg = styled.img`
  height: 125px;
  width: 90%;
`;
