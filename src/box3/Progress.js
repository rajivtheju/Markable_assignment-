import React, { useState } from 'react';
import { MDBProgress, MDBProgressBar, MDBBtn } from 'mdb-react-ui-kit';

const TaskProgress = ({ completed, pending, ongoing }) => {
  const [showMore, setShowMore] = useState(false);

  // Calculate total tasks
  const totalTasks = completed + pending + ongoing;

  // Calculate percentages
  const completedPercentage = totalTasks ? (completed / totalTasks) * 100 : 0;
  const pendingPercentage = totalTasks ? (pending / totalTasks) * 100 : 0;
  const ongoingPercentage = totalTasks ? (ongoing / totalTasks) * 100 : 0;

  // Toggle between show more and show less
  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="container mt-5">
      {/* Add New Progress Button */}
      <div className="d-flex justify-content-between mb-3">
        <h4>Task Progress</h4>
        <MDBBtn size="sm" color="primary">Add New Progress</MDBBtn>
      </div>

      {/* Progress Bars */}
      <p style={{ fontWeight: "300" }}>Are either of your parents living</p>
      <MDBProgress height='30' className="mb-3">
        <MDBProgressBar 
          width={`${completedPercentage}`} 
          valuemin={0} 
          valuemax={100} 
          bgColor='success' // Green color for completed
        >
          {completedPercentage.toFixed(0)}%
        </MDBProgressBar>
      </MDBProgress>

      <p style={{ fontWeight: "300" }}>Do you belong to any group in which...</p>
      <MDBProgress height='30' className="mb-3">
        <MDBProgressBar 
          width={`${pendingPercentage}`} 
          valuemin={0} 
          valuemax={100} 
          bgColor='warning' // Yellow color for pending
        >
         {pendingPercentage.toFixed(0)}%
        </MDBProgressBar>
      </MDBProgress>

      <p style={{ fontWeight: "300" }}>1-2-1 Events</p>
      <MDBProgress height='30' className="mb-3">
        <MDBProgressBar 
          width={`${ongoingPercentage}`} 
          valuemin={0} 
          valuemax={100} 
          bgColor='info' // Blue color for ongoing
        >
         {ongoingPercentage.toFixed(0)}%
        </MDBProgressBar>
      </MDBProgress>

      {/* Show More / Show Less Button */}
      <div className="d-flex justify-content-end">
        <MDBBtn size="sm" color="secondary" onClick={handleShowMore}>
          {showMore ? 'Show Less' : 'Show More'}
        </MDBBtn>
      </div>

      {/* Extra Content (Conditional Rendering based on showMore) */}
      {showMore && (
        <div>
          <p style={{ fontWeight: "300" }}>Additional progress or tasks can be shown here...</p>
          {/* You can add more progress bars or content here */}
        </div>
      )}
    </div>
  );
};

export default function Progress() {
  return (
    <TaskProgress completed={12} pending={5} ongoing={3} />
  );
}
