import React from "react";
import ReactPlayer from "react-player";
import { Nav, NavBrand, NavItems } from "./components/Container";
import { Button } from "./components/Button";
import netflixlogo from "./components/img/netflixlogonew.png";
import { Grid } from "./components/Grid/grid";
import axios from "axios";
import { Link } from "react-router-dom";
import Profilo from "./components/dropProfilo";
import checkauth from "./service/auth";
export class watch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      movietitle: "",
    };
  }
  componentDidMount() {
    let component = this;
    let val = this.props.match.params.id;
    val = val.replace(/:/, "");
    console.log(val);
    this.setState({
      url: val,
    });
    axios
      .get("https://netflix-hi7l.onrender.com/api/container/Movie/files/" + val)
      .then(function (response) {
        component.setState({ movietitle: response.data.filename });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div style={{ position: "relative" }}>
        <Nav>
          <NavBrand
            src={netflixlogo}
            onClick={() => {
              window.location.href = "/";
            }}
          ></NavBrand>
          <NavItems>
            <Profilo />
          </NavItems>
        </Nav>

        <div
          style={{
            margin: "30px auto",
            "background-color": "#000000bf",
            color: "#fff",
            width: "90%",
            height: "40%",
          }}
        >
          <ReactPlayer
            style={{
              ":focus": { outline: "none" },
            }}
            config={{ file: { attributes: { controlsList: "nodownload" } } }}
            width="100%"
            height="100%"
            url={"https://netflix-hi7l.onrender.com/read/" + this.state.url}
            controls
          />
          <div>
            <h1 style={{ color: "#737373" }}>
              {this.state.movietitle.replace(
                /([.*+?^=!:${}()|\[\]\/\\])mp4/g,
                " "
              )}
            </h1>
          </div>
        </div>

        <Grid />
      </div>
    );
  }
}
