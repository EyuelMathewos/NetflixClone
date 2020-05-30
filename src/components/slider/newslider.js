import React from 'react';
import styled from 'styled-components';
import SliderContent from './SliderContent';
import Slide from './Slide';
import Arrow from './Arrow';


const SliderCSS = styled.div`
  position: relative;
  height: ${props => props.width>400?props => props.width/5:props => props.width/4}px;
  width: 100%;
  margin: 0 auto;
  overflow-x: hidden;
  white-space: nowrap;
`;



 class NewSlider extends React.Component {
  constructor(props) {
    super(props);
   this.state = {
      width: window.innerWidth
    };
    this.ref = React.createRef();
  }


  scroll = (scrollOffset) => {
    this.ref.current.scrollLeft += scrollOffset;
  };
  

  render() {
    return (
        <SliderCSS width={this.state.width}>
          <SliderContent ref={this.ref}>
            {this.props.slides.map((_slide, i) => (
              <Slide width={this.state.width} key={_slide + i} content={_slide} />
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