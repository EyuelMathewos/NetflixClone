import styled from "styled-components";
import wallpaper from './image.jpg';
export const Split = styled.div`
position: relative;
background-image: url('${wallpaper}');
background-repeat: no-repeat;
background-size: cover;
width: 100%;
height: 100%;
top:
}
`;

export const Synopsis= styled.div`
  padding-top: 200px;
  paddingLeft: 20px;
  max-width: 500px;
  color: white;`;

export const SplitTitle = styled.h1`
  font-size: 42px;
`;

export const SplitImg = styled.img`
  height: 100%;
  width: 100%;
`;
