import React, { Component } from "react";
import Hambergur from "../../assets/hambergur.png";
import Background from "../../assets/user.png";

class Menubar extends Component {
  render() {
    return (
      <React.Fragment>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            style={{ height: "30px", width: "auto" }}
            src={Hambergur}
            alt=""
            onClick={this.props.click}
          />
          <p style={{ fontSize: "18px", marginLeft: "20px" }}>COURSES</p>
        </div>
        <img
          src={Background}
          style={{ height: "50px", width: "auto", marginRight: "25px" }}
          alt=""
        />
      </React.Fragment>
    );
  }
}

export default Menubar;
