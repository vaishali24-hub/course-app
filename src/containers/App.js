import React, { Component } from "react";
import classes from "./App.module.css";
import SidebarDv from "../components/Sidebar/DesktopViewMenubar";
import SidebarMv from "../components/Sidebar/MobileViewMenubar";
import Courses from "../components/Courses/Courses";
import Activities from "../components/Activities/Activities";
import Tabs from "../components/Sidebar/MobileViewTabs";
import Close from "../assets/closeIcon.png";

class App extends Component {
  state = {
    courses: [
      {
        id: "che211a",
        name: "CHE211a - Fluid Mechanics And its Application",
        branch: "Chemical Engineering | First Year | Second Semester",
        prof: "Prof Ramakant Verma",
      },
      {
        id: "che221a",
        name: "CHE221a - Chemical Engineering Themodynamics",
        branch: "Chemical Engineering | First Year | Second Semester",
        prof: "Dr Naveen Sharma",
      },
      {
        id: "che661a",
        name:
          "CHE661a - Analytical & Material Characterization Techniques of Engineers",
        branch: "Chemical Engineering | First Year | Second Semester",
        prof: "Prof Ravi Joshi",
      },
      {
        id: "che211",
        name: "CHE211a - Fluid Mechanics And its Application",
        branch: "Chemical Engineering | First Year | Second Semester",
        prof: "Prof Ramakant Verma",
      },
      {
        id: "che613a",
        name: "CHE613a - The Structure & Rheology of Complex Fluids",
        branch: "Chemical Engineering | First Year | Second Semester",
        prof: "Prof Suraj Agrawal",
      },
      {
        id: "che622a",
        name: "CHE622a - Introduction To Molecular Simulations",
        branch: "Chemical Engineering | First Year | Second Semester",
        prof: "Prof Suraj Agrawal",
      },
    ],
    showElements: false,
  };

  showHandle = () => {
    const showElements = this.state.showElements;
    this.setState({
      showElements: !showElements,
    });
  };

  render() {
    return (
      <div className={classes.Root}>
        {this.state.showElements ? (
          <div
            style={{
              position: "fixed",
              height: "100vh",
              width: "100vw",
              backgroundColor: "rgba(0,0,0,0.3)",
            }}
          />
        ) : null}
        <aside className={classes.Sidebar}>
          <SidebarDv />
        </aside>
        <div className={classes.Header}>
          <header className={classes.Menubar}>
            <SidebarMv click={this.showHandle} />
          </header>
          {this.state.showElements ? <Tabs /> : null}
          {this.state.showElements ? (
            <img
              onClick={this.showHandle}
              className={classes.CloseIcon}
              src={Close}
              alt=""
            />
          ) : null}
        </div>

        <div className={classes.Courses}>
          <p className={classes.Text}>My Courses</p>
          <Courses courses={this.state.courses} />
        </div>
        <div className={classes.LatestActivities}>
          <p className={classes.Text}>Latest Activities</p>
          <Activities />
        </div>
      </div>
    );
  }
}

export default App;
