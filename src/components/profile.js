import React from "react";
import  {  Container, Nav ,
  NavBrand,
  NavItems  }  from  "./Container";
import { Profilepic, Main, Hr, FormInput, CardContainer, Card, FlexContainer } from "./profilecomp";

import '../index.css';

import { Button } from './Button';
import {Footer} from './Footer';
import netflixlogo from './img/netflixlogonew.png'
import {Link} from "react-router-dom";
import Profilo from "./dropProfilo"
import checkauth from '../service/auth';
import jwt from "jsonwebtoken";

export class profile extends React.Component {
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
            <FormInput width="50%" placeholder="user name" value={this.state.userinfo.username} />
            <h3 style={{ color: "#b9b5b5", fontFamily: "sans-serif",margin: "8px" }}>Language :</h3>
            <FormInput width="25%"placeholder="Language" /><br/>
            <Hr/>
            <Button white>Save</Button>
            <Button>Cancel</Button>
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
