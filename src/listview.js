import React, { Component } from "react";
import ReactPlayer from 'react-player'
import qs from 'qs';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import {
    Card, Row, Col
} from 'antd';
import axios from 'axios';
import {RightList} from "./list";
import {Controls} from "./components/video/controls"
import {Video} from "./components/video/controls"
import { Button } from './components/Button';
import {MainContainer} from "./components/video/controls"
import './index.css';

const { Meta } = Card;

const data =[{"name":"http://localhost:3000/read/5e47f99fb9570d1530799e63"},{"name":"http://localhost:3000/read/5e6df828f86da5030aecead8"},{"name":"http://localhost:3000/read/5e6df87ff86da5030aecf75c"}];
export class listview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          Movielist: []
        };
        this.ref = React.createRef();
      }

      playVideo() {
        this.ref.current.play();
      }
      pauseVideo (){
        this.ref.current.pause();
        return console.log(this.ref.current)
      };
      mute (){
        this.ref.current.muted="true";
      };


  render() { 

    return(

<div>
<MainContainer>
        <Video ref={this.ref} src='http://localhost:3000/read/5ed4c1d2f4a75504b38ac6e5'></Video>
        </MainContainer>
        <Controls>              
            <Button onClick={()=>{this.playVideo()}}>play</Button>
            <Button onClick={()=>{this.pauseVideo()}}>pause</Button>
            <input type="range" min="1" max="100" value={1} class="slider" id="myRange" ></input>
        </Controls>
 </div>


    );

        
    
  }
}