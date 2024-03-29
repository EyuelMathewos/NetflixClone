import React from "react";
//import { Card } from 'antd';
import axios from 'axios';
import {Player} from "./components/video/player"
import './index.css';



const data =[{"name":"http://localhost:3000/api/read/5e47f99fb9570d1530799e63"},{"name":"http://localhost:3000/read/5e6df828f86da5030aecead8"},{"name":"http://localhost:3000/read/5e6df87ff86da5030aecf75c"}];
export class RightList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          Movielist: []
        };
      }
      componentDidMount () {
        let component = this;
        axios.get('https://movieapiet.herokuapp.com/api/container/Movie/files')
        .then(function (projectResponse) {
          component.setState({ Movielist: projectResponse.data });
          console.log(component.state.Movielist)
          console.log(component.state.Movielist);
         
          
        })
        .catch(function (error) {
          console.log(error);
        });


      }
 

  render() { 

    return(
//         <div class="listview">
//         <Card
//     hoverable
//     style={{ width: 640 }}
//     cover={<ReactPlayer url='http://localhost:3000/read/5e47f99fb9570d1530799e63' playing controls/>}
//   >
//     <Meta title="Europe Street beat" description="www.instagram.com" />
//   </Card>

//   <Card
//     hoverable
//     style={{ width: 640 }}
//     cover={<ReactPlayer url='http://localhost:3000/read/5e47f99fb9570d1530799e63' playing controls/>}
//   >
//     <Meta title="Europe Street beat" description="www.instagram.com" />
//   </Card>
  
//   </div>


<div>
  
      {this.state.Movielist.map(function(d, idx){
          console.log("the value of d");
         
         return (
          <div
          hoverable
          style={{ width: 450 ,backgroundColor:"wight"}}
          cover={<Player src={'https://movieapiet.herokuapp.com/read/'+d._id} width="426" height="240" />}
        >
          <div title={d.filename}/>
        </div>)
       })}
       <Player width="426" height="240" src="https://movieapiet.herokuapp.com/read/5ed36e35c80cb808ee742a2b"></Player>
     </div>  


    );

        
    
  }
}
