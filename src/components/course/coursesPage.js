import React,{PropTypes} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';


class CoursesPage extends React.Component {
constructor(props, context){
super(props, context);
this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
}

courseRow(course, index){
return <div key={index}>{course.title}</div>;
}

redirectToAddCoursePage(){
  browserHistory.push('/course');
}

render(){
  return (
    <div >
      <h1>Courses</h1>
      <CourseList courses={this.props.courses}/>
      <input type="submit"
             value="Add Course"
             className="btn btn-primary"
             onClick={this.redirectToAddCoursePage}
             />
    </div>
  );
}
}

function mapStateToProps(state, ownProps){
return{
  courses: state.courses
};
}

function mapDispatchToProps(dispatch){
  return{
  actions: bindActionCreators(courseActions, dispatch)
  };
}

CoursesPage.propTypes = {
actions: PropTypes.object.isRequired,
courses: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
/*
this.onClickChange = this.onClickChange.bind(this);
this.onTitleChange = this.onTitleChange.bind(this);
this.state= {
    course: {title: ""}
};
onTitleChange(event){
  const course = this.state.course;
  course.title = event.target.value;
  this.setState({course: course});
}

onClickChange(){
this.props.actions.createCourse(this.state.course);
}

      <input type="text"
             onChange={this.onTitleChange}
             value={this.state.course.title}/>
      <input type="submit"
             onClick={this.onClickChange}
             value="Save"/>
*/
