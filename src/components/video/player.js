import React from "react";


import {Controls} from "./controls"
import {Video} from "./controls"
import {MainContainer, Items} from "./controls"
import { Icon, IconWrapper  } from '../Container'
import styled from "styled-components";

// excess height to improve interactive area / accessibility
const height = "6px";
const thumbHeight = "12px";
const trackHeight = "16px";
// const height = "36px";
// const thumbHeight = 36;
// const trackHeight = "16px";


// colours
const upperColor = "#edf5f9";
const lowerColor = "#FF2401";
const thumbColor = "#fff";
const thumbHoverColor = "#FF2401";
const upperBackground = `linear-gradient(to bottom, ${upperColor}, ${upperColor}) 100% 50% / 100% ${trackHeight} no-repeat transparent`;
const lowerBackground = `linear-gradient(to bottom, ${lowerColor}, ${lowerColor}) 100% 50% / 100% ${trackHeight} no-repeat transparent`;
// Webkit cannot style progress so we fake it with a long shadow on the thumb element
const makeLongShadow = (color, size) => {
  let i = 1;
  let shadow = `${i}px 0 0 ${size} ${color}`;

  for (; i < 394; i++) {
    shadow = `${shadow}, ${i}px 0 0 ${size} ${color}`;
  }

  return shadow;
};

const StyledSeekBar = styled.input`
  width: 400px;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: ${height};
    background: ${lowerBackground};
  }

  &::-webkit-slider-thumb {
    position: relative;
    appearance: none;
    height: ${thumbHeight}px;
    width: ${thumbHeight}px;
    background: ${thumbColor};
    border-radius: 100%;
    border: 0;
    top: 50%;
    transform: translateY(-50%);
    box-shadow: ${makeLongShadow(upperColor, "-5px")};
    transition: background-color 150ms;
  }

  &::-moz-range-track{
    background:${upperBackground};
  },
  &::-moz-range-progress {
    width: 100%;
    height: ${height};
    background: ${upperBackground};
  }

  &::-moz-range-progress {
    background: ${lowerBackground};
  }

  &::-moz-range-thumb {
    appearance: none;
    margin: 0;
    height: ${thumbHeight};
    width: ${thumbHeight};
    background: ${thumbColor};
    border-radius: 100%;
    border: 0;
    transition: background-color 150ms;
  }

  &::-ms-track {
    width: 100%;
    height: ${height};
    border: 0;
    /* color needed to hide track marks */
    color: transparent;
    background: transparent;
  }

  &::-ms-fill-lower {
    background: ${lowerBackground};
  }

  &::-ms-fill-upper {
    background: ${upperBackground};
  }

  &::-ms-thumb {
    appearance: none;
    height: ${thumbHeight};
    width: ${thumbHeight};
    background: ${thumbColor};
    border-radius: 100%;
    border: 0;
    transition: background-color 150ms;
    /* IE Edge thinks it can support -webkit prefixes */
    top: 0;
    margin: 0;
    box-shadow: none;
  }

  &:hover,
  &:focus {
    &::-webkit-slider-thumb {
      background-color: ${thumbHoverColor};
    }
    &::-moz-range-thumb {
      background-color: ${thumbHoverColor};
    }
    &::-ms-thumb {
      background-color: ${thumbHoverColor};
    }
  }
`;
export const Vol = styled.div`
position: relative;
display:flex;
width: 60px;
}
`;
const Volume = styled.input`
  width: 60px;
  `;

let hour=0, minutes=0, durHour=0, durMin=0;
export class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          Movielist: [],
          playingstatus:"Pause",
          isMute:true,
          fulls:"min",
          duration:0.0,
          seekBarValue:0.0,
          volume:1,
          isHovering: false
        };
        this.ref = React.createRef();
        this.seekbar= React.createRef();
        this.handleClick = this.handleClick.bind(this);
        this.handleVolume = this.handleVolume.bind(this);
        this.handleMouseHover = this.handleMouseHover.bind(this); 
      }
seekbarcal(e){
   hour=Math.floor(this.ref.current.currentTime/60);
   minutes=Math.floor(this.ref.current.currentTime%60);
   durHour=Math.floor(this.ref.current.duration/60);
   durMin=Math.floor(this.ref.current.duration%60);
 // console.log(hour+":"+minutes+" /"+durHour+":"+durMin)

  this.setState({seekBarValue:this.ref.current.currentTime})
   //console.log("this is form seek bar")
   this.seekbar.current.value=this.ref.current.currentTime;
   
}
      playVideo() {
        this.ref.current.play();
        this.setState({playingstatus:"play"})
        this.setState({duration:this.ref.current.duration});
        this.setState({seekBarValue:this.ref.current.currentTime})
      //  console.log("the video Current time")
     //   console.log(this.state.currentTime)
      }
      pauseVideo (){
        this.ref.current.pause();
        this.setState({playingstatus:"Pause"})
        // return console.log(this.ref.current.currentTime)
      };
      mute (){
        this.setState({isMute:!this.state.isMute})
        console.log(this.state.isMute)
        this.ref.current.muted=this.state.isMute;
        if(this.state.isMute){
         // this.volume.current.volume=0.0
          this.setState({volume:0})
        }
        else{
          this.setState({volume:1})
          //this.volume.current.volume=1
        }
      };
      fullscrean (){
        this.ref.current.requestFullscreen();
        this.setState({fulls:"full"})
        return console.log(this.ref.current)
      };
      handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
        console.log(e.target.value);
        this.ref.current.currentTime=e.target.value
        this.setState({seekBarValue:e.target.value})
      }
      onChangeseek(e) {
        e.preventDefault();
        console.log('The seek was clicked.');
        console.log(e.target.value);
        e.target.value=this.state.seekBarValue
        return e.traget.value;
         }
         handleVolume(e) {
          e.preventDefault();
          console.log('the voice');
          console.log(e.target.value);
          //this.ref.current.volume=e.target.value
          this.setState({volume:e.target.value})
          console.log(this.state.volume)
          this.ref.current.volume=e.target.value
        }
        handleMouseHover() {
          this.setState({isHovering:!this.state.isHovering});
         // console.log(this.state.isHovering);
        }
      

         componentDidMount() {
        this.timerID = setInterval( () =>this.seekbarcal(),1000);
      }
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
      


  render() { 
    
    return(

<div>
<MainContainer width={this.props.width} height={this.props.height}>

        <Video width={this.props.width} height={this.props.height} ref={this.ref} src={this.props.src}/>
        <Controls width={this.props.width}> 
          <div style={{"paddingLeft":"16px"}}> <StyledSeekBar ref={this.seekbar}   type="range" max={500} onChange={this.handleClick}  />    
       </div>       
         
          <Items>
              {this.state.playingstatus==="Pause"?<Icon secondary style={{"font-size":"18px", "paddingLeft":"20px"}} onClick={()=>{this.playVideo()}} className="fa fa-play"  />:<Icon secondary style={{"font-size":"18px", "paddingLeft":"20px"}} onClick={()=>{this.pauseVideo()}} className="fa fa-pause"  />}
              
              <p style={{"color":"#fff","font-size":"12px", "margin":"0px"}}>{hour+":"+minutes+" / "+durHour+":"+durMin}</p>
              <Vol >
              {this.state.isMute?<Icon secondary style={{"font-size":"18px", "paddingLeft":"20px", "margin":"2px 8px 0px 0px"}} onMouseEnter={this.handleMouseHover}  onMouseLeave={this.handleMouseHover} onClick={()=>{this.mute()}} className="fa fa-volume-up"  />:<Icon secondary style={{"font-size":"18px", "paddingLeft":"20px", "margin":"2px 8px 0px 0px"}} onClick={()=>{this.mute()}} className="fa fa-volume-off"  />}
              <Volume type="range" min= {0} max={1} step={0.01} value={this.state.volume} onChange={this.handleVolume}/>
              </Vol>
              <IconWrapper>
              
              {this.state.fulls==="min"?<Icon secondary style={{"font-size":"18px"}}  onClick={()=>{this.fullscrean()}} className="fa fa-expand"  />:<Icon secondary style={{"font-size":"18px"}}  onClick={()=>{this.fullscrean()}} className="fa fa-compress"  />}</IconWrapper>
          </Items>
        </Controls>
       
        </MainContainer>
        
 </div>


    );

        
    
  }
}