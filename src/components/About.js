import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("Parent - Constructor");
  }

  componentDidMount() {
    console.log("Parent - componentDidMount");
  }
  render() {
    console.log("Parent - render()");
    return (
      <div>
        <h1>About us page</h1>
        <p>This is the class 07 and we make routing today!!!!</p>
        {/* <Outlet /> */}
        <ProfileClass name={"First Child"} />
      </div>
    );
  }
}

export default About;
