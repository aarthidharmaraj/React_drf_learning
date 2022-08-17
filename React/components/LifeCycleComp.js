import React, { Component } from 'react'

// export default class LifeCycleComp extends Component {
//     constructor()
//     {
//         super()
//         this.state={show:true}
//         console.warn('constructor')
//     }
//     componentDidMount(){
//         console.warn('Mounting')
//     }
//   render() {
//     console.warn('rendered')
//     return (
//       <div><h1>Life Cycle Component Methods</h1>
//       {
//         // if it is true, moves to navigate component
//         this.state.show?
//         <Navigate/>
//         :null
//       }
//       <button onClick={()=>this.setState({show:!this.state.show})} >Navigate</button>
//        </div>
//     )
//   }
// }
// class Navigate extends Component {
//     componentWillUnmount(){
//         console.warn("ComponentUnmount")
//     }
//   render() {
//     return (
//       <div>Nav</div>
//     )
//   }
// }

// Update method

// export default class LifeCycleComp extends Component {
//         constructor()
//         {
//             super()
//             this.state={counter:0}
//             console.warn('constructor')
//         }
//         // componentDidUpdate(Pp,Ps,sS){
//         //     console.log('Called Update method, previous state=',Ps)
//         //     console.log(this.state.counter)
//             // if (Ps.counter == this.state.counter)
//             // {
//             //     console.log("Matched")
//             // }
//             // if (Ps.counter<5)
//             // {
//             //     // Updates 5 times and stops based on condition, no condition, goes to infinite loop
//             //     this.setState({counter:this.state.counter+1})    
//             // }
//         // }
//       render() {
//         console.warn('rendered')
//         return (
//           <div><h1>Life Cycle Component Methods</h1>
//           <h2>ComponentDidUpdate method</h2>
//           {/* Calls the child compoent with props */}
//           <LifeCycleCompChild data={this.state.counter}/> 
//           <button onClick={()=>this.setState({counter:this.state.counter+1})} > Update counter {this.state.counter}</button>
//            </div>
//         )
//       }
//     }

// class LifeCycleCompChild extends Component {
//         constructor()
//         {
//             super()
//             this.state={counter:0}
//             console.warn('constructor')
//         }
//         componentDidUpdate(Pp,Ps,sS){
//             console.log('Called Update method, previous props=',Pp)
//             console.log(this.state.counter)
            
//         }
//       render() {
//         console.warn('rendered')
//         return (
//         <div>
//             {/* when the parent component has any updates, it will also get updated */}
//           <h2>ComponentDidUpdate Child method {this.props.data}</h2>
          
//            </div>
//         )
//       }
//     }

//  getderived state method

// export default class LifeCycleComp extends Component {
//     constructor(){
//         super()
//         this.state={data:0}
//     }
//   render() {
//     return (
//       <div>
//         <h1> Get derived Sate From Props method {this.state.data}</h1>
//         <GetDerivedState data={this.state.data}/>
//         <button onClick={()=>this.setState({data:this.state.data+1})}> Get State</button>
//       </div>
//     )
//   }
// }

// class GetDerivedState extends Component {
//     constructor(){
//         super()
//         this.state={currentValue:0}
//     }
//     static getDerivedStateFromProps(props,state){
//         console.warn("the props and state",props,state)
//         return {currentValue:props.data*10}
//     }
//   render() {
//     console.warn("calling render method")
//     return (
//       <div>
//         <h1> Get derived Sate From Props method Child {this.state.currentValue}</h1>
        
//       </div>
//     )
//   }
// }

// // get snapshot before update method using props

// export default class LifeCycleComp extends Component {
//   constructor()
//   {
//     super()
//     this.state={data:0}
//   }
//   render() {
//     return (
//       <div><h1> Get snapshot before update method</h1>
//       <GetSnapShot data={this.state.data}/>
//       <button onClick={()=>this.setState({data:this.state.data+1})}> Get snapshot</button>
//       </div>
//     )
//   }
// }

// class GetSnapShot extends Component {
//   constructor()
//   {
//     super()
//     this.state={value:0}
//   }
//   componentDidUpdate(){

//   }
//   getSnapshotBeforeUpdate(Preprops,PreState){
//     console.warn("getsnapshot",Preprops.data,this.props.data)
//     return null
//   }
//   render() {
//     return (
//       <div><h1> Get snapshot before update method child {this.props.data}</h1>
//       </div>
//     )
//   }
// }

// // get snapshot before update method using state

export default class LifeCycleComp extends Component {
  constructor()
  {
    super()
    this.state={data:0}
  }
  render() {
    return (
      <div><h1> Get snapshot before update method</h1>
      <GetSnapShot/>
      </div>
    )
  }
}

class GetSnapShot extends Component {
  constructor()
  {
    super()
    this.state={value:0}
  }
  componentDidUpdate(Pprops,Pstate,Sshot){
    console.warn("componet update",Sshot)
  }
  getSnapshotBeforeUpdate(Preprops,PreState){
    console.warn("getsnapshot")
    return PreState.value *10
  }
  render() {
    return (
      <div><h1> Get snapshot before update method value child {this.state.value}</h1>
      <button onClick={()=>this.setState({value:this.state.value+1})}> Update value</button>
      </div>
    )
  }
}
