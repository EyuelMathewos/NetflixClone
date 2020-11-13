import React, { useCallback, useLayoutEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { LinkS, Wrapper, Title} from '.././Container';
import Modal from '../Detail/DetailPane'
import { connect } from 'react-redux';
import updateMovies from '../../redux/Action/addMovie'
import updateModal from '../../redux/Action/modalAction'
//const Modaltype = <Modal status={true}/>;
export const Slide = styled.div`
background-image: url('${props => props.content}');
background-repeat: no-repeat;
background-size: cover;
background-position: center; 
flex-shrink: 0;
width: ${props => props.width>400?props => props.width/4:props => props.width/3}px;
height: 100%;
margin: 40px 10px 0px 0px;
transition: 0.4s;
transition-delay: 0.2s;
&:hover {
  width: 40vw;
  height: 22vw;
  opacity:1;
  transition: 0.4s;
  transition-delay: 0.4s;
  margin:0px 10px 0px 20px;

}


}
`;
const IconDiv = styled.div`
position: relative;
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    justify-content: center;

    // &:hover {
    //   background-color: rgba(0, 0, 0, 0.65);
    //   cursor: pointer;
    // }
    .IconStyled {
      font-size: 15px;
    }
    .IconStyled:first-of-type {
      color: red;
      margin-right: 25px;
    }
    .IconStyled:last-of-type {
      color: white;
    }
    `;
   const Icon = styled.i`
    font-size: 80px;
    margin-right: 25px;
    color:red;
    
      ${props => props.secondary && css`
        color: white;
      `}
      
    `;
    // useCallback(e => {
    //     const pos = e.target.parentElement.getBoundingClientRect()
    //     // setActive({ category, pos })
    //   }, [])
    
    
class SlideItem extends React.Component {
    constructor(props) {
      super(props);
      this.handleMouseHover = this.handleMouseHover.bind(this);
     this.state = {
        width: window.innerWidth,
        catagory:props.catagory,
        isHovering: false
      };

    }  

    handleMouseHover() {
        this.setState(this.toggleHoverState);
      }
    
      toggleHoverState(state) {
        return {
          isHovering: !state.isHovering,
        };
      }


    render() {
        return (
              <Wrapper><Title>{this.props.catagory}</Title></Wrapper>,
            <Slide width={this.props.width} key={this.props.key} content={this.props.content} onMouseEnter={this.handleMouseHover}
                       onMouseLeave={this.handleMouseHover} onClick={()=>{this.props.updateModal({"open":true,"content":this.props.content})}}>   
            </Slide>
            
        )
    }

}
const MapStateToProps = (state) => {
  return {
    modal: state.modal
};
};
const MapDispatchToProps = (dispatch) => {
  return{
    updateModal: (m)=> dispatch(updateModal(m))
  }
    
  
};
export default connect(MapStateToProps, MapDispatchToProps)(SlideItem);