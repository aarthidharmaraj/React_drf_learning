import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'

// import SampClass from './components/samp_class_comp';
// import Welcome from './components/samp_funccomp';
// import {Welcome} from './components/samp_funccomp'
// import ClassStateComp from './components/ClassStateComp';
// import LifeCycleComp from './components/LifeCycleComp';
// import HandleEventComp from './components/handleEventComp';
// import ConditionalRenderComp from './components/ConditionalRenderComp';
// import ListKeysComp from './components/ListKeysComp';
// import FormComp from './components/FormComp';
import FormValidateComp from './components/FormValidateComp';
// import LiftingStateComp from './components/LiftingStateComp';
// import RouterComp1 from './components/RouterComp1';
import Home from './components/Home.js';
import About from './components/About.js';
import UserLogin from './components/UserLogin.js'
import PersonList from './components/AxiosComp.js'
// const comment = {
//   date: "2022-05-10",
//   text: 'I hope you enjoy learning React!',
//   author: {
//     name: 'Hello function',
//     Url: 'http://placekitten.com/g/64/64'
//   }
// };

function App() {
  return (
    <div>
      {/* <Welcome name='ABC' lastname='XYZ'>sample for using props</Welcome> */}
      {/* <Welcome  date={comment.date} text={comment.text} author={comment.author} /> */}
      {/* <SampClass/> */}
      {/* <ClassStateComp date={comment.date} text={comment.text} author={comment.author}/> */}
      {/* While calling with constructor > */}
      {/* <ClassStateComp/>  */}
    {/* <LifeCycleComp/> */}
    {/* <HandleEventComp/> */}
    {/* <ConditionalRenderComp/> */}
    {/* <ListKeysComp/> */}
    {/* <FormComp/> */}
    {/* <FormValidateComp/> */}
    {/* <LiftingStateComp/> */}

    <Router>
      <Routes> 
        <Route path="/" element={<Home/>} ></Route>
        <Route path="about" element={<About/>}></Route>
        <Route path="register" element ={<PersonList/>} ></Route>
        <Route path="login" element ={<UserLogin/>}></Route>

      </Routes>
    {/* <RouterComp1/> */}
    </Router>
    </div>
  );
}

export default App;
