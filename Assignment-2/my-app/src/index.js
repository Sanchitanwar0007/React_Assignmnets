import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import myImage from './dummy_human.jpg'

const employee = {
  name: 'Tom',
  location: 'New York',
  bloodGroup: 'B+',
  age: 28,
  profileImg:myImage
 }

ReactDOM.render(
  <>
  <div className='container'>
  <img src={myImage} alt="IdPhoto" />
  <p><b>Name:&nbsp;&nbsp;</b><span>{employee.name}</span></p>
  <p><b>Location:&nbsp;&nbsp;</b><span>{employee.location}</span></p>
  <p><b>BloodGroup:&nbsp;&nbsp;</b><span>{employee.bloodGroup}</span></p>
  <p><b>Age:&nbsp;&nbsp;</b><span>{employee.age}</span></p>
  </div>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
