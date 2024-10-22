import React, { useState } from 'react';
import { MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdb-react-ui-kit';

const ToDoList = () => {
  const [tasks, setTasks] = useState([]); // State to store tasks
  const [newTask, setNewTask] = useState(''); // State for the new task input

  // Function to handle adding a new task
  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]); // Add new task to the tasks array
      setNewTask(''); // Clear input field after adding
    }
  };

  // Function to handle deleting a task
  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index); // Remove task by index
    setTasks(updatedTasks);
  };

  return (
    <MDBCard className="mt-5">
      <MDBCardBody>
        <h4 className="mb-3">To-Do List</h4>
        
        {/* Input for adding a new task */}
        <div className="d-flex">
          <MDBInput
            label="Add new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="me-2"
          />
          <MDBBtn color="primary" onClick={handleAddTask}>
            Add Task
          </MDBBtn>
        </div>

        {/* Task list */}
        {tasks.length > 0 ? (
          <MDBListGroup className="mt-4">
            {tasks.map((task, index) => (
              <MDBListGroupItem key={index} className="d-flex justify-content-between align-items-center">
                {task}
                <MDBBtn size="sm" color="danger" onClick={() => handleDeleteTask(index)}>
                  <MDBIcon fas icon="trash-alt" />
                </MDBBtn>
              </MDBListGroupItem>
            ))}
          </MDBListGroup>
        ) : (
          <p className="mt-4 text-center">No tasks added yet</p>
        )}
      </MDBCardBody>
    </MDBCard>
  );
};

export default function Todo() {
  return (
    <div className="container">
      <ToDoList />
    </div>
  );
}
