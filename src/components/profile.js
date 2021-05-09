import React, { useState } from "react";
import  {  Container, Nav ,
  NavBrand,
  NavItems  }  from  "./Container";
import { Profilepic, Main, Hr, FormInput, CardContainer, Card, FlexContainer } from "./profilecomp";

import '../index.css';


import { Button } from './Button';
import {Footer} from './Footer';
import NewSlider from './slider/newslider.js'
import Slider from './slider/Slider.js'
import images from './slider/images'
import Modal from './Detail/DetailPane'
import { movie, movie1, movie2 } from './movie.js';
import titleimg from './img/powerprojecttitle.png'
import netflixlogo from './img/netflixlogonew.png'
import { Grid } from "./Grid/grid"
import {Link} from "react-router-dom";
import Profilo from "./dropProfilo"
import checkauth from '../service/auth';

export class Profile extends React.Component {
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
            <NavBrand src={netflixlogo} onClick={()=>{window.location.href='/'}}></NavBrand>
            <NavItems>
                {/* <NavItem to="/">Pricing</NavItem>
                <NavItem to="/">Docs</NavItem> */}
                {/* <Link to="/signup"><Button primary>JOIN NOW</Button></Link>
                <Link to="/signin"><Button header>SIGN IN</Button></Link>  */}
                {/* <Icon className="fa fa-search" aria-hidden="true"/> */}
                {/* <Icon profile className="fa fa-square" aria-hidden="true"/> */}
                
                {checkauth()?<Profilo/>: <div><Link to="/signup"><Button primary>JOIN NOW</Button></Link>
                <Link to="/signin"><Button header>SIGN IN</Button></Link> </div>}
            </NavItems>
        </Nav>
      

        <Main>
      <h1 style={{ color: "white", fontFamily: "sans-serif" }}>
        Editing Profile
      </h1>
      <Hr />
      <FlexContainer>
        <CardContainer>
          <Card>
            <Profilepic />
          </Card>

          <Card>
            <FormInput placeholder="user name" />
          </Card>
        </CardContainer>
      </FlexContainer>
    </Main>


<Footer></Footer>
{/* <Grid/> */}
</Container>

    );
  }
}
