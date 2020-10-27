import * as types from "../actions/actionTypes";
// we should initialize the state type, this time is empty array
import initialState from "./initialState";
//our store 
//const courses = [{ id: 1, title: "Course 1"}, { id: 2, title: "Course 2" }]
//our method we need to use courses.find() to get the course
//store by ID
//const courses = { 1: { id: 1, title: "Course 1"}, 2: { id: 2, title: "Course 2" }}
// in this way courses[2]
export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case types.CREATE_COURSE_SUCCESS:
      return [...state, { ...action.course }];
    case types.UPDATE_COURSE_SUCCESS:
      return state.map(course =>
        course.id === action.course.id ? action.course : course
      );
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    case types.DELETE_COURSE_OPTIMISTIC:
      return state.filter(course => course.id !== action.course.id);
    default:
      return state;
  }
}
