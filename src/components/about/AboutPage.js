import React from "react";

const AboutPage = () => (
  <div>
    <h2>About</h2>
    <p>
      This app uses React, Redux, React Router, and many other helpful
      libraries.
      This is a self-learning project of Redux. 
    </p>
    <h4>Production Dependencies</h4>
    <p></p>
    <table className="table">
    <thead>
      <tr>
        <th>Dependency</th>
        <th>Use</th>
      </tr>
    </thead>
    <tbody>
          <tr>
            <td>
            bootstrap 
            </td>
            <td>
            CSS Framework    
            </td>
            
          </tr>
          <tr>
          <td>
            immer 
            </td>
            <td>
            Helper for working with immutable data      
            </td>
          </tr>
          <tr>
          <td>
           prop-types 
            </td>
            <td>
            Declare types for props passed into React components      
            </td>
          </tr>
          <tr>
          <td>
          react  
            </td>
            <td>
            React library      
            </td>
          </tr>
          <tr>
          <td>
          react-dom  
            </td>
            <td>
            React library for DOM rendering        
            </td>
          </tr>
          <tr>
          <td>
          react-redux  
            </td>
            <td>
            Connects React components to Redux        
            </td>
          </tr>
          <tr>
          <td>
          react-toastify
            </td>
            <td>
            Display messages to the user       
            </td>
          </tr>
          <tr>
          <td>
          redux  
            </td>
            <td>
            Library for unidirectional data flows        
            </td>
          </tr>
          <tr>
          <td>
          redux-thunk 
            </td>
            <td>
            Async redux library        
            </td>
          </tr>
          <tr>
          <td>
          reselect 
            </td>
            <td>
            Memoize selectors for performance    
            </td>
          </tr>
    </tbody>
  </table>
  </div>
);

export default AboutPage;
