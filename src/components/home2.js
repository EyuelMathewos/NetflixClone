import React, { useState } from "react";
import  {  Container, Nav ,
  NavBrand,
  NavItems,
  NavItem,
  NavItemButton, 
  Title,
  Wrapper  }  from  "./Container";
import '../index.css';

import { SplitImg, Split, SplitTitle, Synopsis } from "./Split.js";
import computer from './computer.png';
import {
  Pricing,
  PricingCard,
  PricingTitle,
  Price,
  PricingFeatures
} from './Pricing';
import { Button } from './Button';
import {Footer} from './Footer';
import {ContentRow} from './contentrow';
import {ContentBlock} from './contentrow';
import {SliderContent} from './contentrow';
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
            <NavBrand to="/">Movie</NavBrand>
            <NavItems>
                <NavItem>Pricing</NavItem>
                <NavItem>Docs</NavItem>
                <NavItemButton>Log in</NavItemButton>
                <NavItemButton>Get Started For Free</NavItemButton>
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
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Error, fugit provident. Fugit, distinctio dolor nesciunt
                    natus quidem laborum beatae ratione accusantium hic illo
                    quas id numquam possimus, similique odit alias.
                </p>
            </div>
            <div>
            <Button>Play</Button>
            <Button>More info</Button>
            </div>
            </Synopsis>
        </Split>
        {/* <Pricing>
    <PricingCard>
        <PricingTitle>Free</PricingTitle>
        <p>
            <Price>$0</Price>/month
        </p>{' '}
        <PricingFeatures>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
        </PricingFeatures>
        <Button>Get Started</Button>
    </PricingCard>
    <PricingCard>
        <PricingTitle>Standard</PricingTitle>
        <p>
            <Price>$10</Price>/month
        </p>{' '}
        <PricingFeatures>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
        </PricingFeatures>
        <Button primary>Get Started</Button>
    </PricingCard>
    <PricingCard>
        <PricingTitle>Enterprise</PricingTitle>
        <p>
            <Price>$100</Price>/month
        </p>
        <PricingFeatures>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
        </PricingFeatures>
        <Button>Get Started</Button>
    </PricingCard>
</Pricing> */}

     
{/* <ContentRow>

          {content.map(img => (
            <SliderContent
              key={img}
              data-img={img}
            >

              <img src={img} />
             </SliderContent>
          ))}

</ContentRow> */}
<Wrapper>
<Title>Action & Adventure</Title></Wrapper>
<Slider slides={content} />
<Wrapper>
<Title>New Relases</Title></Wrapper>
<Slider slides={images} />
<Footer></Footer>
</Container>

    );

        
    
  }
}
