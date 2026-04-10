import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {  getTaskById } from '../../api/client';
// TODO: Import any API functions you need from '../../api/client'
// Example: import { get, post } from '../../api/client';

function QuestionComponent() {
  const id = useParams().id; 
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  // TODO: Define state variables needed for your question set
  

  // TODO: Implement data fetching inside a useEffect hook
  useEffect(() => {
  async function loadTask() {
    try {
      const data = await getTaskById(id);
      setTasks(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  loadTask();  

  }, [id]);

  // TODO: Implement any event handlers required by your question set
  

  return (
    <div>
      {loading && <p>Loading task details...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && tasks.length > 0 && (
        <div>
          <p>ID: {tasks[0]._id}</p>
          <p>Title: {tasks[0].title}</p>
          <p>Description: {tasks[0].description}</p>
          <p>Status: {tasks[0].status}</p>
        </div>
      )}
    </div>
  );
}

export default QuestionComponent;
