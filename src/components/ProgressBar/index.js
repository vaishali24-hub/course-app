import React, { Component } from "react";
import classes from "./styles.css";
import cx from "classnames";

class ProgressBar extends Component {
  render() {
    return (
      <div className={classes.progressCircleContainer}>
        <div className={cx(classes.progressCircle, classes.progress35)}>
          <span />
        </div>
      </div>
    );
  }
}

export default ProgressBar;
