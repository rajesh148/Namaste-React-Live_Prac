import React from "react";
class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy name",
        location: "dummy location",
        avatar_url: "dummy url",
      },
    };
    console.log("Child - Constructor - " + this.props.name);
  }
  async componentDidMount() {
    this.timer = setInterval(() => {
      console.log("Namaste React op");
    }, 1000);
    console.log("Child - componentDidMount - ");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.timer);
  }

  render() {
    const { count } = this.state;
    console.log("Child - render() - " + this.props.name);
    return (
      <div>
        <h1>Profile Page From Classs!!!</h1>
        <img src={this.props?.userInfo?.avatar_url} />
        <h3>Name: {this.props?.userInfo?.name}</h3>
        <h3>Location: {this.props?.userInfo?.location}</h3>
        <button
          onClick={() => {
            this.setState({
              count: 1,
            });
          }}
        >
          Click
        </button>
      </div>
    );
  }
}

export default ProfileClass;
