import React from "react";
import styled from "styled-components";
import images from '../slider/images'
import one from '../img/one.jpg'
import two from '../img/two.jpg'
import three from '../img/three.jpg'
import four from '../img/four.jpg'
import five from '../img/five.jpg'
import six from '../img/six.jpg'
import seven from '../img/episodeone.jpg'
import eight from '../img/episodetwo.jpg'
import nine from '../img/episodethree.jpg'
import ten from '../img/episodefour.jpg'
import eleven from '../img/one.jpg'
import Slider from '../slider/Slider.js'
import {movie} from '../movie';
const content = [one, two, three, four, five, six, seven,eight,nine,ten,eleven]
export  const  FlexContainer  =  styled.div`
    position: relative;
    display: flex; `;
    export  const  CardContainer  =  styled.div`
    display:grid;
    grid-template-columns: 33% 33% 33%; 
    height: 100%;
    width:100%;
    // background: #ddd5d5;

    @media (max-width: 1440px) {
         grid-template-columns:  33% 33% 33%; 
        
      }
      @media (max-width: 1200px) {
          grid-template-columns:  33% 33% 33%; 
        
      }
      @media (max-width: 1024px) {
       
          grid-template-columns:  33% 33% 33%;
        
      }
      @media (max-width: 768px) {
          
          grid-template-columns: 33% 33% 33%;
        
      }
      @media (max-width: 480px) {
          grid-template-columns: 100%;
      }

    `;

    export  const  Card  =  styled.div`
    background-size: cover;
    background-position: center;
    background-image: url('${props => props.content}');
    font-size: 24px;
    font-weight: bold;
    text-shadow: 0 0 10px rbga(0, 0, 0, 0.2);
    color: red;
    text-align: center;
    /* padding: 50px 0px;*/
    margin: 16px;
    width: 98%;
    height:230px;
    background-color: white;
    border-radius: 1px;
      `;
    const In = styled.span`
    border-right:1px solid #a3a3a3;
    margin-right:9px;
    padding-right: 11px;
    font-size: 0.7vw;
    color: #737373;
    `;
    const Title = styled.h1`
     font-size: 0.9vw;
     color:#737373;
    `;
    const Detail = styled.h1`
    font-size: 0.7vw;
    color: #737373;
   `;

export class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth
        };
       }
      
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
    
    return(

        <FlexContainer>
        <CardContainer>

          {movie.map((_slide, i) => (
            <div>
              <Card swidth={this.state.width} width={this.state.width} key={i} content={_slide.cover} onClick={()=>{window.location.href='/watch/'+_slide.url;}}/> 
              <div style={{"margin": "16px"}}>
                <Title>{_slide.title}</Title>
                <In>{_slide.year}</In>
                <In>{_slide.movietype}</In>
                <In>{_slide.hours}</In>
                <Detail>{_slide.about}</Detail>
                </div>
            </div>
            ))
            }


        </CardContainer>
        </FlexContainer>
    );

        
    
  }
}