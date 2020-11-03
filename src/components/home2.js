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
            <NavBrand to="/">Netflix</NavBrand>
            <NavItems>
                {/* <NavItem to="/">Pricing</NavItem>
                <NavItem to="/">Docs</NavItem> */}
                <Button primary>Join Now</Button>
                <Button header>Log in</Button>
                <Icon type="search"/>
            </NavItems>
        </Nav>
        <Split>
        <Synopsis>
            <div>
             <SplitTitle>Cool, Catchy Slogan</SplitTitle>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Error, fugit provident. Fugit, distinctio dolor nesciunt
                    natus quidem laborum beatae ratione accusantium hic illo
                    quas id numquam possimus, similique odit alias.
                </p>
            <Button>Play</Button>
            <Button>More info</Button>

            </div>
            </Synopsis>
        </Split>
        {/* <DetailPaneCSS>    <IconWrapper><Icon secondary className="fa fa-times"/> </IconWrapper>  </DetailPaneCSS>   */}

<NewSlider slides={content} />
<Wrapper>
<Title>New Relases</Title></Wrapper>
<NewSlider slides={images}/>
<Modal/>
<Footer></Footer>
{/* <Grid/> */}
</Container>

    );
  }
}
