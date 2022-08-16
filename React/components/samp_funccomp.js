import React from 'react'

// export default function Welcome(props) {
//   return (<h1>Sample Functional Component with name {props.name} and last name {props.lastname}</h1>)
// }

// const Welcome = () => <h1> Sample for arrow function</h1>
// export default Welcome

// export const Welcome = () => <h1> Sample for arrow function</h1>

export default function Welcome(props) {
    return (
      <div className="Comment">
        <div className="UserInfo">
          <img className="Avatar"
               src={props.author.Url}
            />
          <div className="Username">
            {props.author.name}
          </div>
        </div>
        <div className="text">
          {props.text}
        </div>
        <div className="date">
          {props.date}
        </div>
      </div>
    );
  }
