import styled from "styled-components";

export const Profilepic = styled.div`
<<<<<<< HEAD
  width: 120px;
  height: 115px;
=======
  width: 150px;
  height: 150px;
>>>>>>> 3f937429a7d5db560b85c85472b34b033634f93e
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
<<<<<<< HEAD
  width: 50%;
  height: 900px;
  margin: auto;
=======
  width: 40%;
  height: 900px;
  margin: auto;
  @media (max-width: 480px) {
    width:100%;
    top:60px;
 }
 @media (max-width: 768px) {
  top:60px;
}
>>>>>>> 3f937429a7d5db560b85c85472b34b033634f93e
`;
export const Hr = styled.hr`
  border: 1px solid #333;
`;

export const FormInput = styled.input`
  padding: 0.5em;
<<<<<<< HEAD
  margin: 0.5em;
  background: #333;
  height: 33px;
  width: 90%;
  color: #fff;
  font-size: 16px;
  border: 0;
  outline: none;
  border-radius: 4px;
=======
  margin: 0.5em 0;
  background: #333;
  height: 33px;
  width: ${props => props.width};
  color: #b9b5b5;
  font-size: 16px;
  border: 0;
  outline: none;
 // border-radius: 4px;
>>>>>>> 3f937429a7d5db560b85c85472b34b033634f93e
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
<<<<<<< HEAD
=======
  @media (max-width: 480px) {
    width:100%;
 }
>>>>>>> 3f937429a7d5db560b85c85472b34b033634f93e
`;

export const FlexContainer = styled.div`
  position: relative;
  display: flex;
`;

export const CardContainer = styled.div`
  display: grid;
<<<<<<< HEAD
  grid-template-columns: 20% 80%;
=======
  grid-template-columns: 25% 75%;
>>>>>>> 3f937429a7d5db560b85c85472b34b033634f93e
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
