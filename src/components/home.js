import React, { useState } from "react";
import ReactPlayer from 'react-player';
import {
    Card, Row, Col, List
} from 'antd';
import { Box, Button, Heading, Grommet, Grid, Text, ResponsiveContext, Video ,Carousel, Image} from 'grommet';
import { Notification } from 'grommet-icons';
import { dark, grommet } from 'grommet/themes';
import { deepMerge } from "grommet/utils";
import axios from 'axios';
import '../index.css';


// set custom breakpoints so we can see the changes
const customBreakpoints = deepMerge(grommet, {
  global: {
    breakpoints: {
      small: {
        value: 600
      },
      medium: {
        value: 900
      },
      large: 3000
    }
  }
});

// columns, rows and areas are for Grid with a known number of contents / boxes.

// if size if small, we only 1 column
// if size if medium, we only 2 column
// if size if large or xlarge, we 3 three columns
const columns = {
  small: ["auto"],
  medium: ["auto", "auto"],
  large: ["auto", "auto", "auto"],
  xlarge: ["auto", "auto", "auto"]
};

// if size if small, we have 3 rows
// if size if medium, we have 2 rows
// if size if large or xlarge, we have 1 row
const rows = {
  small: ["xsmall", "xsmall", "xsmall"],
  medium: ["xsmall", "xsmall"],
  large: ["xsmall"],
  xlarge: ["xsmall"]
};

// set the different areas you need for every size
const areas = {
  // small: [
  //   { name: "header", start: [0, 0], end: [0, 0] },
  //   { name: "test", start: [0, 1], end: [0, 1] },
  //   { name: "test1", start: [0, 2], end: [0, 2] }
  // ],
  medium: [
    { name: "header", start: [0, 0], end: [1, 0] },
    { name: "test", start: [0, 1], end: [0, 1] },
    { name: "test1", start: [1, 1], end: [1, 1] }
  ],
  large: [
    { name: "header", start: [0, 0], end: [0, 0] },
    { name: "test", start: [1, 0], end: [1, 0] },
    { name: "test1", start: [2, 0], end: [2, 0] }
  ],
  xlarge: [
    { name: "header", start: [0, 0], end: [0, 0] },
    { name: "test", start: [1, 0], end: [1, 0] },
    { name: "test1", start: [2, 0], end: [2, 0] }
  ]
};

const data =[{"name":"http://localhost:3000/read/5e47f99fb9570d1530799e63"},{"name":"http://localhost:3000/read/5e6df828f86da5030aecead8"},{"name":"http://localhost:3000/read/5e6df87ff86da5030aecf75c"}];

 const listAnimalsBoxes = data.map(d => (
  <Box
    elevation="large"
    key={d}
    background="light-3"
    flex={false}
    justify="center"
    align="center"
  >
    <ReactPlayer url={'http://localhost:3000/read/'+d._id} width="400px" height="360px" controls/>
  </Box>
));




// function listAnimalsBoxes (){
//   this.state.Movielist.map(function(d, idx){
//     console.log("the value of d");
   
//    return (
//     <Box>
//   {<ReactPlayer url={'http://localhost:3000/read/'+d._id} width="400px" height="360px" controls/>}  
//   </Box>)
//  })

// }
const valumovielist=[];
const getCarouselView = () => {
  const carouselView = new Array(3)
    .fill([])
    .map((_, idx) => data.slice(idx * 4, idx * 4 + 4));

  return carouselView.map(view => {
    const getCarouselItem = () =>
      view.map(img => <Image src={img} fit="contain" />);
    return <Box direction="row">{getCarouselItem()}</Box>;
  });
};
const ResponsiveGrid = ({
  children,
  overrideColumns,
  overrideRows,
  areas,
  ...props
}) => (
  <ResponsiveContext.Consumer>
    {size => {
      // take into consideration if not array is sent but a simple string
      let columnsVal = columns;
      if (columns) {
        if (columns[size]) {
          columnsVal = columns[size];
        }
      }

      let rowsVal = rows;
      if (rows) {
        if (rows[size]) {
          rowsVal = rows[size];
        }
      }

      // also if areas is a simple array not an object of arrays for different sizes
      let areasVal = areas;
      if (areas && !Array.isArray(areas)) areasVal = areas[size];

      return (
        <Grid
          {...props}
          areas={!areasVal ? undefined : areasVal}
          rows={!rowsVal ? size : rowsVal}
          columns={!columnsVal ? size : columnsVal}
        >
          {children}
        </Grid>
      );
    }}
  </ResponsiveContext.Consumer>
);

// this is an example for a responsive Grid.
// with this example, you can either have a fixed Grid (with a known number content)
// or generic one (with unkown number of contents like a list that renders)



export class home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          Movielist: []
        };
      }
      
      componentDidMount () {
        let component = this;
        axios.get('http://localhost:3000/api/container/Movie/files')
        .then(function (projectResponse) {
          component.setState({ Movielist: projectResponse.data });
          console.log(component.state.Movielist)
          console.log(component.state.Movielist);
          valumovielist=component.state.Movielist;
          
        })
        .catch(function (error) {
          console.log(error);
        });


      }
 
  render() { 
    const getCarouselView = () => {
      const carouselView = new Array(3)
        .fill([])
        .map((d, idx) => this.state.Movielist.slice(idx * 4, idx * 4 + 4))
        return carouselView.map(view => {
          const getCarouselItem = () =>
        view.map(img =><ReactPlayer url={'http://localhost:3000/read/'+img._id} width="400px" height="360px" controls/>);
            
          return <Box direction="row">{getCarouselItem()}</Box>;
        });}
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
{/* <Grommet theme={customTheme} full>
 <Box fill>
    <AppBar>
      <Heading level='3' margin='none'><Text color="accent-1">Movie</Text></Heading>
      <Button icon={<Notification />} onClick={() => {}} />
    </AppBar>
   <Box background="background-back" direction='row' flex overflow={{ horizontal: 'hidden' }}>
    
     <Box flex align='center' justify='center'>
       app body
     </Box>
     {/* <Box
       width='medium'
       background='light-2'
       elevation='small'
       align='center'
       justify='center'
     >
       sidebar
     </Box> */}
   {/* </Box>
 </Box>
</Grommet>
<Grommet theme={grommet} full>
    <Grid
      columns={['flex']}
      rows={['medium']}
      gap='small'
    >


        {this.state.Movielist.map(function(d, idx){
          console.log("the value of d");
         
         return (
          <Box background="brand">
        {<ReactPlayer url={'http://localhost:3000/read/'+d._id} width="450px" height="360px" />}  
        </Box>)
       })}


    </Grid>
    </Grommet>  */}



{/* <Grommet theme={customTheme} full>
      <Box>
        <ResponsiveGrid
          rows="auto"
          columns="auto"
          gap="small"
          margin="medium"
        > */}
          {/* <Box
            gridArea="header"
            background="neutral-2"
            justify="center"
            align="center"
          >
              <ReactPlayer
          className='react-player'
          url='http://localhost:3000/read/5e47f99fb9570d1530799e63' width="450px" height="360px"/>   </Box>
          <Box
            gridArea="test"
            background="neutral-3"
            justify="center"
            align="center"
          >
            <strong>Box 2</strong>
          </Box>
          <Box
            gridArea="test1"
            background="neutral-4"
            justify="center"
            align="center"
          >
            <strong>Box 3</strong>
          </Box> */}
{/* 
          {this.state.Movielist.map(function(d, idx){
          console.log("the value of d");
         
         return (
          <Box>
        {<ReactPlayer url={'http://localhost:3000/read/'+d._id} width="400px" height="360px" controls/>}  
        </Box>)
       })}
       {/* <Video fit='cover' controls='over'>
      <source key='video' src='http://localhost:3000/read/5e47f99fb9570d1530799e63' type='video/mp4' />
    </Video> */}

        {/* </ResponsiveGrid>
      </Box> */}
    {/* </Grommet> */}


    <Grommet theme={customBreakpoints} full>
    <Carousel controls="arrows" play={0}>


    {/* {this.state.Movielist.map(function(d, idx){
          console.log("the value of d");
         
         return (
          <Box>
        {<ReactPlayer url={'http://localhost:3000/read/'+d._id} width="400px" height="360px"/>}  
        {<ReactPlayer url={'http://localhost:3000/read/'+d._id} width="400px" height="360px"/>}  
        </Box>)
       })} */}
       {getCarouselView()}
        </Carousel>
    
    </Grommet>
      
     </div>  


    );

        
    
  }
}
