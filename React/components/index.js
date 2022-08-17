import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'
// for JSX
// const pele=React.createElement("p",{},"This is sample for creating paragraph element")
function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  const user = {
    firstName: 'First',
    lastName: 'Last'
  };  
  const element = (
    <h1>
      Hello, {formatName(user)}!
    </h1>
  );
// using if condition

  function getGreeting(user) {
    if (user) {
      return <h1>Hello, {formatName(user)} using if!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  }
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // element
  // getGreeting(user)
  // pele
);
reportWebVitals();
