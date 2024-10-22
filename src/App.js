// // src/App.js
// import React from "react";
// import UploadForm from "./Component/Uploadform";

// const App = () => {
//   return (
//     <div>
//       <h1>Document Upload</h1>
//       <UploadForm />
      
//     </div>
//   );
// };

// export default App;
import React from 'react'
import Navbar from './Navbar/Navbar'
import Album from './box1/Album'
import Box1 from './box1/box1'
import "./App.css"
import Box2 from './box2/Box2'
import Box3 from './box3/Box3'

const App = () => {
  return (
    <div style={{backgroundColor:"whitesmoke"}} className='cont'>
      <Navbar/>
    <div className='maincantainer'>
<div className='box1'><Box1/></div>
<div className='box1'><Box2/></div>
<div className='box1'><Box3/></div>
    </div>
    </div>
  )
}

export default App
