import React, { Component } from 'react';
import Course from './Course/Course';

class Courses extends Component {
  render(){return this.props.courses.map((course, index) => {
          return (
          <Course
            name={course.name}
            branch={course.branch}
            prof={course.prof}
            key={course.id}
          />
        )
      }
    )}
}

export default Courses;
