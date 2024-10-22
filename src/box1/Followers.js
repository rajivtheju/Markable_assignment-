import React, { Fragment } from 'react'
import i1 from "../images/men.jpeg"
import i2 from "../images/women.jpeg"
import i3 from "../images/men.jpeg"
import i4 from "../images/men.jpeg"
import i5 from "../images/women2.jpeg"
const Followers = () => {
  return (
    <Fragment>
      <h5>Followers</h5>
      <div className='logocontainer'>
        <img className ="logo" src={i1}/>
        <img className ="logo" src={i2}/>
        <img className ="logo" src={i3}/>
        <img className ="logo" src={i4}/>
        <img className ="logo" src={i5}/>
    </div>
    <p style={{textAlign:"right" , color:'#0077B5'}}>Show more</p>
    </Fragment>
  )
}

export default Followers
