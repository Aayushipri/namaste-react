import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("About Constructor is called");
  }

  componentDidMount() {
    console.log("About component is mounted!!!!");
  }

  render() {
    console.log("About's render is called");
    return (
      <div>
        <h1>About</h1>
        <h2>This is namaste react web series</h2>
        <User name={"Ayushi Priya(Functional Component)"} />
        <UserClass
          name={"First Yathharth Prasad(Class Component)"}
          location={"Dehradun(India)"}
        />
      </div>
    );
  }
}

export default About;
