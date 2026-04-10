import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAllTasks, getTaskById } from '../../api/client';
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
        const data  = await getTaskById(id);
        setTasks(data);
      }
      catch (err) {
        setError(err.message);
      } 
      finally {
        setLoading(false);
      }

      loadTask();

    }, [id]);


  // TODO: Implement any event handlers required by your question set
  

  return (
    <div>
      {loading && <p>Loading task details...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && task && (
        <div>
          <p>ID: {task._id}</p>
          <p>Title: {task.title}</p>
          <p>Description: {task.description}</p>
          <p>Status: {task.status}</p>
        </div>
      )}
    </div>
  );
}

export default QuestionComponent;
