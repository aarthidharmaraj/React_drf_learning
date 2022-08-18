//// List rendering in function components
import React from 'react'

export default function ListKeysComp() {
    const names=['name1','name2','name3']

    const Persons=[{id:1,name:'person1',age:23},{id:2,name:'person2',age:13},{id:3,name:'person3',age:32}]

    const PersonList=Persons.map(person => <h2> Id is {person.id}.I am {person.name}.I am {person.age} years </h2>)

    const PersonListComp=Persons.map(person => <PersonComp personlist={person}></PersonComp>)
  return (
    <div><h1> List values with their indexes</h1>
    <h2>{names[0]}</h2>
    <h1> using map function</h1>
    {names.map(name => <h2> {name}</h2>)}
    
    <h1> List values using map from different sets</h1>
    {PersonList}
    <h1> Calling lists as props for another component inside a map function</h1>
    {PersonListComp}
    </div>
  )
}

function PersonComp({personlist}){
    return (
        <div>
            <h2> Id is {personlist.id}.I am {personlist.name}.I am {personlist.age} years </h2>
        </div>
    )
}

//// Using keys

 export default function NumberList() {
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) =>
    <ListItem key={number.toString()}
              value={number} />
  );
  return (
    <div>
      <h1> Using Keys</h1>
    <ul>
      {listItems}
    </ul>
    </div>
  );
}

function ListItem(props) {
  return <div><li>{props.value}</li></div>
}

////
const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];
export default function KeysItems() {
  const data = (
    <ul>
      {posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
      </ul>
  );
  const content =posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {data}
      {content}
    </div>
  );
  }