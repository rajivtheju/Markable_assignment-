import React, { useState } from 'react';
import logo from "../images/markable.png"
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import "./Navbar.css"

export default function App() {
  const [openBasic, setOpenBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        {/* Navbar Brand */}
        <MDBNavbarBrand href='#'>
          <img  src={logo} className='n-logo'/>
         <h5>Markable</h5>
        </MDBNavbarBrand>

        {/* Toggler for mobile view */}
        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenBasic(!openBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        {/* Collapsible content */}
        <MDBCollapse navbar open={openBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>Link</MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                  Dropdown
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Action</MDBDropdownItem>
                  <MDBDropdownItem link>Another action</MDBDropdownItem>
                  <MDBDropdownItem link>Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                Disabled
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>

          
        </MDBCollapse>
{/* Search form */}
          <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='Search' aria-label='Search' />
            <MDBBtn color='secondary'>
              <MDBIcon fas icon='search' />
            </MDBBtn>
          </form>
        {/* Right-side icons and buttons */}
        <div className='d-flex align-items-center'>
          <MDBIcon far icon='bell' className='me-3' style={{ fontSize: '25px', cursor: 'pointer' }} />
          <MDBIcon far icon='envelope' className='me-3' style={{ fontSize: '25px', cursor: 'pointer' }} />

          <MDBBtn color='success' className='me-2'>
            <MDBIcon fas icon='plus' className='me-1' /> Create
          </MDBBtn>
          <MDBBtn color='dark'>
            Upgrade
          </MDBBtn>
        </div>
      </MDBContainer>
    </MDBNavbar>
  );
}
