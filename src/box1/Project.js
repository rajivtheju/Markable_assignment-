import React, { useState } from 'react';
import { MDBBadge, MDBListGroup, MDBListGroupItem, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import { IoIosSettings } from 'react-icons/io';
import p1 from "../images/project.jpeg"
const initialAlbums = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@gmail.com',
    avatar: p1,
    status: 'Active',
    badgeColor: 'success'
  },
  {
    id: 2,
    name: 'Alex Ray',
    email: 'alex.ray@gmail.com',
    avatar: p1,
    status: 'Onboarding',
    badgeColor: 'primary'
  },
  {
    id: 3,
    name: 'Kate Hunington',
    email: 'kate.hunington@gmail.com',
    avatar: p1,
    status: 'Awaiting',
    badgeColor: 'warning'
  },
  {
    id: 4,
    name: 'Sarah Parker',
    email: 'sarah.parker@gmail.com',
    avatar: p1,
    status: 'Inactive',
    badgeColor: 'danger'
  },
  {
    id: 5,
    name: 'Mark Adams',
    email: 'mark.adams@gmail.com',
    avatar: 'https://mdbootstrap.com/img/new/avatars/4.jpg',
    status: 'Pending',
    badgeColor: 'secondary'
  }
];

export default function Project() {
  const [albums, setAlbums] = useState(initialAlbums);
  const [showAll, setShowAll] = useState(false);

  // Display three albums initially, then show all or show less
  const displayedAlbums = showAll ? albums : albums.slice(0, 3);

  const handleShowAll = () => {
    setShowAll(true);
  };

  const handleShowLess = () => {
    setShowAll(false);
  };

  const handleAddNewAlbum = () => {
    const newAlbum = {
      id: albums.length + 1,
      name: `New Album ${albums.length + 1}`,
      email: `new.album${albums.length + 1}@gmail.com`,
      avatar: 'https://mdbootstrap.com/img/new/avatars/1.jpg',
      status: 'New',
      badgeColor: 'info'
    };
    setAlbums([...albums, newAlbum]);
  };

  return (
    <div style={{ minWidth: '22rem' }}>
      {/* Add New Album and Show Less/Show All Buttons */}
      <div className='d-flex justify-content-between align-items-center mb-3'>
        <h5>Projects</h5>
        <div>
          <MDBBtn color='info' onClick={handleAddNewAlbum} className='me-2' style={{ textTransform: 'none' }}>
            <MDBIcon fas icon='plus' /> Add New Project
          </MDBBtn>
       
        </div>
      </div>

      {/* List of Albums */}
      <MDBListGroup light>
        {displayedAlbums.map((album) => (
          <MDBListGroupItem
            key={album.id}
            className='d-flex justify-content-between align-items-center'
          >
            <div className='d-flex align-items-center'>
              <img
                src={album.avatar}
                alt={album.name}
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1'>{album.name}</p>
              </div>
            </div>
          
           <h3 style={{color:"#0077B5"}}><IoIosSettings /></h3> 
           
          </MDBListGroupItem>
        ))}
      </MDBListGroup>
      {showAll ? (
            <MDBBtn color='secondary' onClick={handleShowLess} style={{ textTransform: 'none' }}>
              Show Less
            </MDBBtn>
          ) : (
            <MDBBtn color='primary' onClick={handleShowAll}  style={{ textTransform: 'none' }}>
              Show All
            </MDBBtn>
          )}
    </div>
  );
}
