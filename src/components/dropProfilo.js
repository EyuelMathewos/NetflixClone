import React from "react";
import styled, { css } from "styled-components";
import {removeAuth} from "../service/auth";
export const Profilepic = styled.div`
  width: 36px;
  height: 36px;
  margin-right: 38px;
  background: #e48307;
  border-radius: 8px;
  margin: auto;
  background-image: url("https://avatars3.githubusercontent.com/u/31162254?v=4");
  background-repeat: no-repeat;
  background-size: cover;
`;

const DetailPane = styled.div`

  position: relative;
  z-index: 1;
  width: 100px;
`;
const ModalDiv = styled.div`
  display: inline; /* Hidden by default */
  position: absolute; /* Stay in place */
  //z-index: 1; /* Sit on top */
  //padding-top: 100px; /* Location of the box */
  //right: 0;
  //top: 0;
  width: 8%; /* Full width */
  // height: 100%; /* Full height */
  // overflow: auto; /* Enable scroll if needed */
  
`;

export const Icon = styled.i`
  font-size: 32px;
  //margin-right: 25px;
  color:red;
  ${(props) =>
    props.primary &&
    css`
      font-size: 1em;
      margin: 0 6px;
      color: #afacac;
      float: left;
    `}
  ${(props) =>
    props.secondary &&
    css`
      font-size: 1em;
      margin-right: 12px;
      color: black;
    `}
  ${(props) =>
    props.profile &&
    css`
      font-size: 36px;
      margin-right: 38px;
      color: #e48307;
    `}

`;
export const Button = styled.button`
  color: #afacac;
  background: #040303;
  border: none;
  font-family: Arial;
  outline: none;
  width: 100px;
  padding: 8px 0;
  &:hover {
    color: white;
    background: #e50914;
    outline: none;
    ${Icon} {
      color: white;
    }
  }
`;
class Profilo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalState: false,
      height: window.innerHeight
    };
    this.ref = React.createRef();
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  toggleHoverState() {
    this.setState({
      modalState: !this.state.modalState
    });
  }

  handleClickOutside(event) {
    console.log(this.ref.current);
    console.log(event.target);

    // if (this.ref.current !== event.target) {
    //   if (this.state.modalState === true) {
    //     console.log("they are not equal ===");
    //     this.setState({
    //       modalState: !this.state.modalState
    //     });
    //   }
    // }
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  render() {
    return (
      <DetailPane>
        <Profilepic
          onClick={() => {
            this.toggleHoverState();
          }}
        />
        {this.state.modalState && (
          <ModalDiv ref={this.ref}>
            <Button>
              <Icon primary className="fa fa-user" aria-hidden="true" />
              Your Profile
            </Button>
            <Button>
              <Icon primary className="fa fa-cog" aria-hidden="true" />
              Setting
            </Button>
            <Button onClick={()=>{removeAuth()}}>
              <Icon primary className="fa fa-sign-out" aria-hidden="true" />
              Sign out
            </Button>
          </ModalDiv>
        )}
      </DetailPane>
    );
  }
}

export default Profilo;
