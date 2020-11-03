import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components';
import {Icon} from '.././Container';
import { SplitImg, Split, SplitTitle, Synopsis } from "./Split.js";
import { Button } from '.././Button';
const DetailPane = styled.div`
  //height: 475px;
  //background: #00000094;
  width: 100%;
  position: relative;
  border: 2px solid white;
  z-index: 99;
  color: white;
  
  
`;
const ModalDiv = styled.div`
  display: flex; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  //padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
`;
const Info = styled.span`
border-right:1px solid #a3a3a3;
margin-right:9px;
padding-right: 11px;
`;

  const ModalContent = styled.div`

  position: relative;
  background-color: #181819;
  margin: auto;
  //padding: 20px;
  //border: 1px solid #888;
  width: 100%;
  height:500px;
`;
const IconM = styled.i`
  //color: #fbf6f696;
  color:#333;
  float: right;
  font-size: 28px;
  font-weight: bold;
  padding: 20px;
  ${props => props.secondary && css`
  font-size: 80px;
  margin-right: 25px;
  color:red;
`}
`;

class Modal extends React.Component {
  constructor(props) {
    super(props);
   this.state = {
      modalState: false
    };
    this.ref = React.createRef();
   // this.handleMouseHover = this.handleMouseHover.bind(this);


        // this.setWrapperRef = this.setWrapperRef.bind(this);
        // this.handleClickOutside = this.handleClickOutside.bind(this);

  }  
  handleMouseHover() {

    //   console.log("this is the ref value");
    //  console.log(this.ref.current);
    let valnull= null
     console.log(typeof(this.ref.current))
     console.log(this.ref.current)
     if(this.ref.current<0){
    //  this.ref.current.div.style.display = "none";
     console.log("this is the insed of condition")
     this.setState({
      modalState: !this.state.modalState
    });
    }else{
      this.setState({
        modalState: true
      });
    }
    
    }
  
    toggleHoverState() {
      

        this.setState({
          modalState: !this.state.modalState
        });
      
    };  


    handleClickOutside (){
      // event.preventDefault();
      // let valu=
      console.log("this are the values")
       console.log(this.ref.current)
       console.log(window.event.target)
     
       if (this.ref.current == window.event.target) {
          //  alert('You clicked outside of me!');
        this.setState({
          modalState: !this.state.modalState
        });
       }
      //  else{
      //    alert("this is the other code");
      //    this.setState({
      //     modalState: !this.state.modalState
      //   });
      //  }
     }

  componentDidMount() {
     // document.addEventListener('mousedown', this.handleClickOutside);
     
  }

  componentWillUnmount() {
    //  document.removeEventListener('mousedown', this.handleClickOutside);
  }


  render() {
    
      return (
       
        <div>
          <IconM secondary className="fa fa-play-circle" aria-hidden="true" onClick={()=>{this.toggleHoverState()}}/>
        {/* <button onClick={()=>{this.toggleHoverState()}}>Hello world</button> */}
        {this.state.modalState&&
        <DetailPane>
<ModalDiv ref={this.ref} onClick={()=>{this.handleClickOutside()}}>
  <ModalContent>

  <Split>
  <IconM className="fa fa-times-circle" aria-hidden="true" onClick={()=>{this.toggleHoverState()}}/>
        <Synopsis>
            <div>
             <SplitTitle>Cool, Catchy Slogan</SplitTitle>
          <Info>Year</Info>
          <Info>11+</Info>
          <Info>1h37m</Info>
          <a>movietype</a>
          <p>Fueled by memories of her mother, resourceful Fei Fei builds a rocket to the moon on a mission to prove the existence of a legendary moon goddess.</p>

                <Button secondary><Icon secondary className="fa fa-play" aria-hidden="true"/>Play</Button>
            </div>
            </Synopsis>
        </Split>
      
  </ModalContent>
</ModalDiv>
</DetailPane>

}
   </div>
   
      )}
    }
    export default Modal