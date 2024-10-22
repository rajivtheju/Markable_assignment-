import React, { Fragment } from 'react'
import Album from './Album'
import Contact from './Contacts'
import "./box1.css"
import Project from './Project'
import Organisation from './Organisation'
import Followers from './Followers'
import Following from './Following'
const Box1 = () => {
  return (
    <Fragment>
     <div className='boxes'><Contact/></div>  
    <div className='boxes'><Project/></div>
    <div className='boxes'><Album/></div>
    <div className='boxes'><Organisation/></div>
    <div className='boxes'><Followers/></div>
    <div className='boxes'><Following/></div>
    </Fragment>
  )
}

export default Box1
