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
<<<<<<< HEAD

export class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          Movielist: []
        };
      }
=======
import jwt from "jsonwebtoken";

export class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
         userinfo:""
    };
  }
  componentDidMount () {

    let uif = localStorage.getItem("uif");
    var decoded;

  try {
    decoded = jwt.verify(uif, "shhhhh");
  } catch (err) {
    // err
  }
  console.log(decoded);
  this.setState({"userinfo":decoded})
  }
>>>>>>> 3f937429a7d5db560b85c85472b34b033634f93e
      
 
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
<<<<<<< HEAD
            <FormInput placeholder="user name" />
=======
            <FormInput width="50%" placeholder="user name" value={this.state.userinfo.username} />
            <h3 style={{ color: "#b9b5b5", fontFamily: "sans-serif",margin: "8px" }}>Language :</h3>
            <FormInput width="25%"placeholder="Language" /><br/>
            <Hr/>
            <Button white>Save</Button>
            <Button>Cancel</Button>
>>>>>>> 3f937429a7d5db560b85c85472b34b033634f93e
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
