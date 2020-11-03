import React from "react";
import "./gridStyle.css";
//import images from '../slider/images'
import styled from "styled-components";
export  const  FlexContainer  =  styled.div`
    position: relative;
    display: flex;
    border: 5px solid rgb(7, 1, 1);`;
    export  const  CardContainer  =  styled.div`
    position: relative;
    display: flex;
    border: 5px solid rgb(7, 1, 1);
    @media (max-width: 1440px) {
         grid-template-columns: 25% 25% 25% 25%; 
        
      }
      @media (max-width: 1200px) {
          grid-template-columns: 25% 25% 25% 25%; 
        
      }
      @media (max-width: 1024px) {
       
          grid-template-columns: 50% 50%;
        
      }
      @media (max-width: 768px) {
 
          grid-template-columns: 50% 50%;
      }
      @media (max-width: 480px) {
          grid-template-columns: 100%;
      }

    `;

    export  const  Card  =  styled.div`
    background-size: cover;
    background-position: center;
    font-size: 24px;
    font-weight: bold;
    text-shadow: 0 0 10px rbga(0, 0, 0, 0.2);
    color: red;
    text-align: center;
    /* padding: 50px 0px;*/
    margin: 6px;
    width:300px;
    height:300px;
    background-color: white;
    border-radius: 1px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
    &:hover {
        margin-top: -5px;
      }`;

export class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          
        };
       }
      


  render() { 
    
    return(

        <div className="flexContainer">
        <div className="card-container">
          <div className="card" style={{"background-image": "url(https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80)"}}>
            Shanghai
          </div>
          <div className="card" style={{"background-image": "url(https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80)"}}>
            Shanghai
          </div>
          <div className="card" style={{"background-image": "url(https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80)"}}>
            Shanghai
          </div>
          <div className="card" style={{"background-image": "url(https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80)"}}>
            Shanghai
          </div>
          <div className="card" style={{"background-image": "url(https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80)"}}>
            Shanghai
          </div>
          <div className="card" style={{"background-image": "url(https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80)"}}>
            Shanghai
          </div>
          <div className="card" style={{"background-image": "url(https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80)"}}>
            Shanghai
          </div>
          <div className="card" style={{"background-image": "url(https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80)"}}>
            Shanghai
          </div>
          <div className="card" style={{"background-image": "url(https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80)"}}>
            Shanghai
          </div>
          <div className="card" style={{"background-image": "url(https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80)"}}>
            Shanghai
          </div>
          


        </div>
        </div>
    );

        
    
  }
}