import React, { useState } from "react";
import { CardContainer, Card, FlexContainer, Main, Hr } from "./settingstyle";
import  {  Container, Nav ,
    NavBrand,
    NavItems  }  from  "../Container";
import netflixlogo from '../img/netflixlogonew.png'
import {Link} from "react-router-dom";
import Profilo from "../dropProfilo"
import { Button } from '../Button';
import checkauth from '../../service/auth';
import jwt from "jsonwebtoken";

export class Setting extends React.Component {

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
  return (
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
      <h1 style={{ color: "white", fontFamily: "sans-serif" }}>Account</h1>
      <Hr />
      <FlexContainer>
        <CardContainer>
          <Card>
            <h2 style={{ color: "white", fontFamily: "sans-serif" }}>
              Membership
            </h2>
          </Card>

          <Card>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  width: "60%",
                  height: "120px",
                  padding: "15px 10px 0px 0px"
                }}
              >
                <p
                  style={{
                    color: "white",
                    fontFamily: "sans-serif",
                    marginTop: "0px"
                  }}
                >
                 {this.state.userinfo.email}
                </p>
                <p style={{ color: "#585656", fontFamily: "sans-serif" }}>
                  Password: ********
                </p>
              </div>

              <div style={{ width: "40%", height: "120px", padding: "15px" }}>
                <a
                  style={{
                    textDecoration: "none",
                    color: "#de0b0b",
                    fontFamily: "sans-serif"
                  }}
                >
                  Change account email
                </a>
                <br />
                <a
                  style={{
                    textDecoration: "none",
                    color: "#de0b0b",
                    fontFamily: "sans-serif"
                  }}
                >
                  Change password
                </a>
              </div>
            </div>
            <Hr />
          </Card>
        </CardContainer>
      </FlexContainer>
    </Main>
    </Container>
  );
}}

export default Setting;