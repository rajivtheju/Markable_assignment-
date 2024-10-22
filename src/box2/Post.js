import React from 'react';
import './Box2.css'; // Assuming you have a CSS file for styling
import pi1  from '../images/news.jpeg'
import { BiNotepad } from 'react-icons/bi';
import { IoIosSend } from 'react-icons/io';
import { CiHeart } from 'react-icons/ci';
const postdetails = [
  {
    id: 1,
    headline: "Headline 1",
    occured: "04 Dec 2023",
    posted: "02 Jan 2024",
    edited: "04 Jan 2024",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit justo at magna faucibus, sed aliquet arcu congue.",
    image: pi1 // Your image path
  },
  ,
  {
    id: 2,
    headline: "Quarterly Review Meeting",
    occured: "15 Dec 2023",
    posted: "16 Dec 2023",
    edited: "18 Dec 2023",
    description:
      "The quarterly review meeting provided valuable insights into our progress and areas for improvement. Let's continue working hard to achieve our goals.",
    image: pi1
  },
  {
    id: 3,
    headline: "Team Building Event",
    occured: "12 Dec 2023",
    posted: "13 Dec 2023",
    edited: "15 Dec 2023",
    description:
      "Our recent team-building event was a great success! It helped strengthen our collaboration and communication across different departments.",
    image: pi1
  },
  {
    id: 4,
    headline: "Client Partnership Announcement",
    occured: "28 Nov 2023",
    posted: "30 Nov 2023",
    edited: "01 Dec 2023",
    description:
      "We are thrilled to announce a new partnership with one of our key clients. This collaboration will open doors to exciting opportunities.",
    image: pi1
  },
  {
    id: 5,
    headline: "New Office Opening",
    occured: "22 Nov 2023",
    posted: "25 Nov 2023",
    edited: "26 Nov 2023",
    description:
      "Our new office in the city is now open for business. The modern workspace is designed to foster creativity and innovation.",
    image: pi1
  },
  {
    id: 6,
    headline: "Software Update Release",
    occured: "18 Nov 2023",
    posted: "19 Nov 2023",
    edited: "20 Nov 2023",
    description:
      "The latest software update includes new features and performance improvements. Make sure to update to the latest version to enjoy the new benefits.",
    image: pi1
  }
];

export default function Post() {
  return (
    <div className="post-container">
      {postdetails.map((post) => (
        <div key={post.id} className="post-card">
          <div className="post-content">
            <div className="post-image">
              <img src={post.image} alt={post.headline} />
            </div>
            <div className="post-text">
              <h5 className='head'>{post.headline}</h5>
              <p className='p-details'><strong>Occurred:</strong> {post.occured}</p>
              <p className='p-details'><strong>Posted:</strong> {post.posted}</p>
              <p className='p-details'><strong>Last Edited:</strong> {post.edited}</p>
              <p className='p-tag' ><BiNotepad />pHQ9</p>
              </div> 
              </div>
              <p style={{fontSize:'15px'}}>{post.description}</p>
              <div className='lc'>
                <div className='like'><CiHeart  style={{fontSize:"30px", color: "orangered"}}/></div>
                <div className='shares'><pre>0 comments&nbsp;&nbsp;&nbsp;0 Favourites</pre> </div>
                </div>
           <hr></hr>
              <div className='search'>
              <img src={post.image} alt={post.headline}  className='c-img'/>
      <input 
      type='text' 
      placeholder='Comment here  '
      className='commentbar'
      />
     <button className='comment-btn'><IoIosSend  style={{fontSize:'20px'}}/></button>
    </div>
    </div>
      ))}
    </div>
  );
}
