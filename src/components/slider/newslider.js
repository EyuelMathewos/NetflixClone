import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import SliderContent from './SliderContent';
import SlideItem from './Slide';
import Arrow from './Arrow';
import {Icon} from '.././Container'
const SliderCSS = styled.div`
  position: relative;
  height: ${props => props.width>400?props => props.width/6:props => props.width/4}px;
  width: 100%;
  // margin: auto;
  overflow-x: hidden;
  white-space: nowrap;
  transition: all 0ms ease 0s; transform: translate3d(0px, 0px, 0px);
  &:hover {
      background-color: #333;
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
    `;

  



 class NewSlider extends React.Component {
  constructor(props) {
    super(props);
   this.handleMouseHover = this.handleMouseHover.bind(this);
   this.state = {
      width: window.innerWidth,
      isHovering: false
    };
    this.ref = React.createRef();

    
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  scroll = (scrollOffset) => {
    this.ref.current.scrollLeft += scrollOffset;
  };
  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };
  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  render() {
    return (
        <SliderCSS width={this.state.width}>
          <SliderContent ref={this.ref}>
            {this.props.slides.map((_slide, i) => (
              <SlideItem width={this.state.width} key={_slide} content={_slide.cover} featureContent={_slide}/> 
             
            ))
            }
            

                         
          </SliderContent>
          {this.state.width>400 ? <div><Arrow direction="left" onClick={() => this.scroll(-900)} />
          <Arrow direction="right" onClick={() => this.scroll(+900)} /> </div>: ''}
          
    </SliderCSS>
        );
  }
}
export default NewSlider