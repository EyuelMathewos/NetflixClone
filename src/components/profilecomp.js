import styled from "styled-components";

export const Profilepic = styled.div`
  width: 120px;
  height: 115px;
  margin-right: 38px;
  background: #e48307;
  /* border-radius: 8px; */
  margin: auto;
  background-image: url("https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png");
  background-repeat: no-repeat;
  background-size: cover;
`;
export const Main = styled.div`
  position: relative;
  background: #060606;
  width: 50%;
  height: 900px;
  margin: auto;
`;
export const Hr = styled.hr`
  border: 1px solid #333;
`;

export const FormInput = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  background: #333;
  height: 33px;
  width: 90%;
  color: #fff;
  font-size: 16px;
  border: 0;
  outline: none;
  border-radius: 4px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #a09e9e;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #a09e9e;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #a09e9e;
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid #ffa00a;
  }
`;

export const FlexContainer = styled.div`
  position: relative;
  display: flex;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  height: 100%;
  width: 100%;

  @media (max-width: 1440px) {
    grid-template-columns: 25% 75%;
  }
  @media (max-width: 1200px) {
    grid-template-columns: 100%;
  }
  @media (max-width: 1024px) {
    grid-template-columns: 100%;
  }
  @media (max-width: 768px) {
    grid-template-columns: 100%;
  }
  @media (max-width: 480px) {
    grid-template-columns: 100%;
  }
`;

export const Card = styled.div`
  background-size: cover;
  background-position: center;
  margin: 6px;
  width: 100%;
  border-radius: 1px;
`;
