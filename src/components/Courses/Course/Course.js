import React, { Component } from "react";
import classes from "./Course.module.css";
import Book from "../../../assets/book.png";
import ProgressBar from "../../ProgressBar";

class Course extends Component {
  render() {
    return (
      <div className={classes.Course}>
        <div className={classes.Content}>
          <img src={Book} alt="book" className={classes.Logo} />
          <div className={classes.CourseDetail}>
            <p className={classes.Name}>{this.props.name}</p>
            <p className={classes.Branch}>{this.props.branch}</p>
            <p className={classes.Prof}>{this.props.prof}</p>
          </div>
        </div>
        <div className={classes.ProgressBar}>
          <ProgressBar />
        </div>
      </div>
    );
  }
}

export default Course;
