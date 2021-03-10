import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { Profilepic } from './Container';
import { Button } from './Button';

const DetailPane = styled.div`
  position: relative;
  z-index: 99;
  
  
`;
const ModalDiv = styled.div`
  display: inline; /* Hidden by default */
  position: fixed; /* Stay in place */
  //z-index: 1; /* Sit on top */
  //padding-top: 100px; /* Location of the box */
  right: 0;
  //top: 0;
  width: 8%; /* Full width */
 // height: 100%; /* Full height */
 // overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
`;


class Profilo extends React.Component {
  constructor(props) {
    super(props);
   this.state = {
      modalState: false,
      height: window.innerHeight,
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
      console.log("this is state form redux open")
//console.log(this.props.modal.open);
        this.setState({
          modalState: !this.state.modalState
        });
       // this.props.updateModal(!this.props.modal.open)
    };  


    handleClickOutside (event){
     // event.preventDefault();
      // let valu=
      console.log("this are the values")
      //  console.log(this.ref.current)
      //  console.log(window.event.target)
     
       if (this.ref.current == window.event.target) {
         console.log(this.ref.current.contains(event.target))
           //alert('You clicked outside of me!');
           this.setState({
            modalState: !this.state.modalState
          });
        return;
        
        // this.props.updateModal(!this.props.modal.open)
       }
       this.setState({
        modalState: false
      });
      //  else {
      //    //alert("this is the other code");
      //    this.setState({
      //     modalState: !this.state.modalState
      //   });
      //  }
     }

     componentDidMount() {
      // document.addEventListener('click', this.handleClickOutside);
      
   }
 
   componentWillUnmount() {
      // document.removeEventListener('click', this.handleClickOutside);
   }

  render() {
    
      return (
       
        <DetailPane>
          {/* <IconM secondary className="fa fa-play-circle" aria-hidden="true" onClick={()=>{this.toggleHoverState()}}/> */}
        <Profilepic onClick={()=>{this.toggleHoverState()}}/>
        {this.state.modalState&&
        
<ModalDiv ref={this.ref} onClick={()=>{this.handleClickOutside()}}>

<Button darkfull>Your Profile </Button>
<Button darkfull>Setting </Button>
<Button darkfull>Sign out </Button>

</ModalDiv>


}
   </DetailPane>
   
      )}
    }

    export default Profilo;