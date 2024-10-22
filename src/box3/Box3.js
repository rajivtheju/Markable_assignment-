import React, { Fragment } from 'react'
import '../box1/box1.css'
import Boards from './Board'
import Progress from './Progress'
import Todo from './Todo'
const Box3 = () => {
  return (
   <Fragment>
     <div className='boxes'><Boards/></div>
     <div className='boxes'><Progress/></div> 
     <div className='boxes'><Todo/></div>  
   </Fragment>
  )
}

export default Box3
