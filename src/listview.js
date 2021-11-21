import React from "react";
import './index.css';
import { Grid } from "./components/Grid/grid"
export class listview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         
        };
         }

  render() { 
    
    return(
<div>
  {/* <div style={{"padding":"0px 100px","background-color":"#151515"}}>
<Player width="100%" height="500" src="http://localhost:3000/read/5ed36e35c80cb808ee742a2b"/>
 </div> */}

 <Grid/>

</div>


    );

        
    
  }
}