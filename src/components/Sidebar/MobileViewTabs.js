import React, { Component } from "react";
import cx from "classnames";
import classes from "./MobileViewMenubar.module.css";
import Courses from "../../assets/coursesIcon.png";
import Library from "../../assets/libraryIcon.png";
import Favorites from "../../assets/favoriteIcon.png";
import Account from "../../assets/account.png";
import Signout from "../../assets/signoutIcon.png";

class Tabs extends Component {
  render() {
    return (
      <div className={classes.Tabs}>
        <div className={cx(classes.Tab, classes.Tab1)}>
          <img className={classes.Icon} src={Courses} alt="" />
          <p>Courses</p>
        </div>
        <div className={classes.Tab}>
          <img className={classes.Icon} src={Library} alt="" />
          <p>Library</p>
        </div>
        <div className={classes.Tab}>
          <img className={classes.Icon} src={Favorites} alt="" />
          <p>Favourites</p>
        </div>
        <hr style={{ margin: "12px" }} />
        <div className={classes.Tab}>
          <img className={classes.Icon} src={Account} alt="" />
          <p>Account</p>
        </div>
        <hr style={{ margin: "12px" }} />
        <div className={classes.Tab}>
          <img className={classes.Icon} src={Signout} alt="" />
          <p>Sign-out</p>
        </div>
      </div>
    );
  }
}

export default Tabs;
