import React, { Component } from "react";
import ReactPlayer from 'react-player';
import  {  Nav, NavBrand, FormInput, FullImage }  from  "./components/Container";
import {Button} from "./components/Button";
import netflixlogo from './components/img/netflixlogonew.png';
import { Grid } from "./components/Grid/grid"

export class watch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         url: ""
        };
         }
         componentDidMount () {
          let val= this.props.match.params.id;
          val=val.replace(/:/,"")
          console.log(val)
          this.setState({
            url:val
          })
      
          
        };
  render() { 
    
    return(

<div style={{"position":"relative"}}>
<Nav><NavBrand src={netflixlogo}></NavBrand></Nav>

<div style={{"margin":"30px auto","background-color":"#000000bf","color":"#fff","width":"90%","height":"40%"}}>

<ReactPlayer style={{
":focus":{"outline": "none"}}} config={{ file: { attributes: { controlsList: 'nodownload' } } }} width="100%" height='100%' url={"http://localhost:3000/read/"+this.state.url} controls/>
<div>
<h1 style={{"color":"#737373"}}>Type of movie</h1>
</div>
</div>

<Grid/>
</div>

    );

        
    
  }
}