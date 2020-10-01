import React, { Component } from "react";
import cx from "classnames";
import classes from "./Activities.module.css";
import Book from "../../assets/book.png";
import Lecture from "../../assets/lectureIcon.png";
import Lecture1 from "../../assets/lecture1.jpg";
import Lecture2 from "../../assets/lecture2.jpg";

class Activities extends Component {
  state = {
    courses: [
      {
        id: "che611a",
        name: "CHE611a - Transport Phenomena",
        branch: "Chemical Engineering | First Year | Second Semester",
        prof: "Prof Ramakant Verma",
      },
      {
        id: "che611",
        name: "CHE611a - Transport Phenomena",
        branch: "Chemical Engineering | First Year | Second Semester",
        prof: "Prof Ramakant Verma",
      },
    ],
    lessons: [
      {
        id: "l5-che221a",
        name: "Lesson 5 - Laws of Thermodynamics I",
        course: "CHE221a - Chemical Engineering Themodynamics",
        branch: "Chemical Engineering | First Year | Second Semester",
      },
      {
        id: "l6-che221a",
        name: "Lesson 6 - Laws of Thermodynamics II",
        course: "CHE221a - Chemical Engineering Themodynamics",
        branch: "Chemical Engineering | First Year | Second Semester",
      },
      {
        id: "l7-che221a",
        name: "Lesson 7 - Laws of Thermodynamics III",
        course: "CHE221a - Chemical Engineering Themodynamics",
        branch: "Chemical Engineering | First Year | Second Semester",
      },
    ],
  };
  render() {
    return (
      <React.Fragment>
        <div className={classes.ActivitiesCourse}>
          <img src={Book} alt="book" className={classes.Logo} />
          <div className={classes.CourseDetail}>
            <p className={classes.Name}>{this.state.courses[0].name}</p>
            <p className={classes.Branch}>{this.state.courses[0].branch}</p>
            <p className={classes.Branch}>{this.state.courses[0].prof}</p>
          </div>
        </div>
        <div className={classes.Lessons}>
          <div className={cx(classes.ActivityLesson, classes.ActivityLesson1)}>
            <img className={classes.Image} src={Lecture1} alt="video-lecture" />
            <div className={classes.Lesson}>
              <img src={Lecture} alt="book" className={classes.LessonLogo} />
              <div className={classes.LessonDetail}>
                <p className={classes.Name}>{this.state.lessons[0].name}</p>
                <p className={classes.Branch}>{this.state.lessons[0].branch}</p>
                <p className={classes.Branch}>{this.state.lessons[0].course}</p>
              </div>
            </div>
          </div>
          <div className={classes.ActivityLesson}>
            <img className={classes.Image} src={Lecture2} alt="video-lecture" />
            <div className={classes.Lesson}>
              <img src={Lecture} alt="book" className={classes.LessonLogo} />
              <div className={classes.LessonDetail}>
                <p className={classes.Name}>{this.state.lessons[1].name}</p>
                <p className={classes.Branch}>{this.state.lessons[1].branch}</p>
                <p className={classes.Branch}>{this.state.lessons[1].course}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.Lesson7}>
          <div className={classes.Content}>
            <img src={Lecture} alt="book" className={classes.Logo} />
            <div className={classes.CourseDetail}>
              <p className={classes.Name}>{this.state.lessons[2].name}</p>
              <p className={classes.Branch}>{this.state.lessons[2].branch}</p>
              <p className={classes.Branch}>{this.state.lessons[2].course}</p>
            </div>
          </div>
          <img className={classes.Img} src={Lecture1} alt="" />
        </div>
        <div className={classes.ActivitiesCourse}>
          <img src={Book} alt="book" className={classes.Logo} />
          <div className={classes.CourseDetail}>
            <p className={classes.Name}>{this.state.courses[1].name}</p>
            <p className={classes.Branch}>{this.state.courses[1].branch}</p>
            <p className={classes.Branch}>{this.state.courses[1].prof}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Activities;
