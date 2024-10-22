import React, { Fragment } from 'react'
import "./Box2.css"
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
const Searchbar = () => {
  return (
    <Fragment>
    <div className='search'>
      <input 
      type='text' 
      placeholder='Hey! user share some progress '
      className='searchbar'
      />
      <input
      type='submit'
      value="post"
      className='post-btn'
      />
      
    </div>
    
    </Fragment>
    
  )
}

export default Searchbar
