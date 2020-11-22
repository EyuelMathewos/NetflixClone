import React, { useState } from "react";
import  {  Container, Nav ,
  NavBrand,
  NavItems,
  NavItem,
  NavItemButton, 
  Title,
  Wrapper, Icon,IconWrapper  }  from  "./Container";

import '../index.css';

import { SplitImg, Split, SplitTitle, Synopsis } from "./Split.js";
import { Button } from './Button';
import {Footer} from './Footer';
import NewSlider from './slider/newslider.js'
import one from './img/one.jpg'
import two from './img/two.jpg'
import three from './img/three.jpg'
import four from './img/four.jpg'
import five from './img/five.jpg'
import six from './img/six.jpg'
import seven from './img/episodeone.jpg'
import eight from './img/episodetwo.jpg'
import nine from './img/episodethree.jpg'
import ten from './img/episodefour.jpg'
import eleven from './img/one.jpg'
import Slider from './slider/Slider.js'
import images from './slider/images'
import Modal from './Detail/DetailPane'
import { movie, movie1, movie2 } from './movie.js';
import titleimg from './img/powerprojecttitle.png'
import netflixlogo from './img/netflixlogonew.png'
import { Grid } from "./Grid/grid"
const content = [one, two, three, four, five, six, seven,eight,nine,ten,eleven]
export class home2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          Movielist: []
        };
      }
      
 
  render() {
    return(
      <Container>
<Nav>
            <NavBrand src={netflixlogo}></NavBrand>
            <NavItems>
                {/* <NavItem to="/">Pricing</NavItem>
                <NavItem to="/">Docs</NavItem> */}
                <Button primary>JOIN NOW</Button>
                <Button header>SIGN IN</Button>
                <Icon type="search"/>
            </NavItems>
        </Nav>
        <Split>
        <Synopsis>
            <div>
              <SplitImg src={titleimg}></SplitImg>
             <SplitTitle>Project Power</SplitTitle>
                <p>
                An ex-soldier, a teen and a cop collide in New Orleans as they hunt for the source behind a dangerous new pill that grants users temporary superpowers.
                </p>
            <Button dark><Icon primary className="fa fa-play" aria-hidden="true"/>Play</Button>
            <Button dark><Icon primary className="fa fa-info" aria-hidden="true"/>More info</Button>

            </div>
            </Synopsis>
        </Split>
        {/* <DetailPaneCSS>    <IconWrapper><Icon secondary className="fa fa-times"/> </IconWrapper>  </DetailPaneCSS>   */}
        
{/* <NewSlider slides={movie} /> */}
<Wrapper>
<Title>New Relases</Title></Wrapper>
<NewSlider slides={movie}/>

<Wrapper>
<Title>Action</Title></Wrapper>
<NewSlider slides={movie1}/>
<Wrapper>
<Title>Action & Adventure</Title></Wrapper>
<NewSlider slides={movie2}/>
<Modal/>
<Footer></Footer>
{/* <Grid/> */}
</Container>

    );
  }
}
