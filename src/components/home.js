import React from "react";
import  {  Container, Nav ,
  NavBrand,
  NavItems,
  Title,
  Wrapper, Icon  }  from  "./Container";

import '../index.css';

import { SplitImg, Split, SplitTitle, Synopsis } from "./Split.js";
import { Button } from './Button';
import {Footer} from './Footer';
import NewSlider from './slider/newslider.js'
import Modal from './Detail/DetailPane'
import { movie, movie1, movie2 } from './movie.js';
import titleimg from './img/powerprojecttitle.png'
import netflixlogo from './img/netflixlogonew.png'
import {Link} from "react-router-dom";
import Profilo from "./dropProfilo"
import checkauth from '../service/auth';
export class home extends React.Component {
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
                {/* <Link to="/signup"><Button primary>JOIN NOW</Button></Link>
                <Link to="/signin"><Button header>SIGN IN</Button></Link>  */}
                {/* <Icon className="fa fa-search" aria-hidden="true"/> */}
                {/* <Icon profile className="fa fa-square" aria-hidden="true"/> */}
                
                {checkauth()?<Profilo/>: <div><Link to="/signup"><Button primary>JOIN NOW</Button></Link>
                <Link to="/signin"><Button header>SIGN IN</Button></Link> </div>}
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
