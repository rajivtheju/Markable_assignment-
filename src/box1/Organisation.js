import React, { useState } from 'react';
import { MDBBadge, MDBListGroup, MDBListGroupItem, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import { IoIosSettings } from 'react-icons/io';
import l1 from '../images/men.jpeg'
const initialAlbums = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Admin',
    avatar: l1 ,
    status: 'Active',
    badgeColor: 'success'
  },
  {
    id: 2,
    name: 'Alex Ray',
    role: 'Member',
    avatar: l1 ,
    status: 'Onboarding',
    badgeColor: 'primary'
  },
  {
    id: 3,
    name: 'Kate Hunington',
    role: 'Admin',
    avatar: l1 ,
    status: 'Awaiting',
    badgeColor: 'warning'
  },
  {
    id: 4,
    name: 'Sarah Parker',
    role: 'Member',
    avatar: l1 ,
    status: 'Inactive',
    badgeColor: 'danger'
  },
  {
    id: 5,
    name: 'Mark Adams',
    role: 'Admin',
    avatar: l1,
    status: 'Pending',
    badgeColor: 'secondary'
  }
];

export default function Organisation() {
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
      role: `new.album${albums.length + 1}@gmail.com`,
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
        <h5>Organisation</h5>
        <div>
          <MDBBtn style={{ textTransform: 'none' }} color='info' onClick={handleAddNewAlbum} className='me-2'>
            <MDBIcon fas icon='plus' /> Add New Organisation
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
                <p className='text-muted mb-0'>{album.role}</p>
              </div>
            </div>
            <h3 style={{color:"#0077B5"}}><IoIosSettings/></h3> 

          </MDBListGroupItem>
        ))}
      </MDBListGroup>
      {showAll ? (
            <MDBBtn style={{ textTransform: 'none' }} color='secondary' onClick={handleShowLess}>
              Show Less
            </MDBBtn>
          ) : (
            <MDBBtn style={{ textTransform: 'none' }} color='primary' onClick={handleShowAll}>
              Show All
            </MDBBtn>
          )}
    </div>
  );
}
