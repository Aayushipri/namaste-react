import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Default",
      },
    };

    console.log(`${this.props.name} + User Class Constructor is called.`);
  }

  async componentDidMount() {
    console.log("About component is mounted!!!!");

    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    this.timer = setInterval(() => {
      console.log("Hello there");
    }, 2000);
    console.log("json", json);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    console.log(`${this.props.name}+User Class Render method is called.`);
    const { name, location, avatar_url } = this.state.userInfo;
    const { count, count2 } = this.state;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h1>Count:{count}</h1>
        <button
          onClick={() => {
            //NEVER UPDATE STATE VARIABLES DIRECTLY.
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h1>Count:{count2}</h1>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @ayushi_25 </h4>
      </div>
    );
  }
}

export default UserClass;
