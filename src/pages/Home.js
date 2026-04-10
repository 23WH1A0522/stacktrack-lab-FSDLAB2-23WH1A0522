import React, { use } from 'react';
import { useState, useEffect } from 'react';
import { getAllTasks } from '../api/client'
import {Link} from 'react-router-dom';
// TODO: Replace placeholder values with actual student and lab identifiers
const STUDENT_ID = '23WH1A0522';
const LAB_ID = 'FSDLAB2';

function Home() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTasks() {
      try {
        const data = await getAllTasks();
        setTasks(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadTasks();
  }, []);
  return (

    <div>
      <h1>Stack Track Lab</h1>
      <p>Student ID: {STUDENT_ID}</p>
      <p>Lab ID: {LAB_ID}</p>
      <h2>Tasks</h2>
      {loading && <p>Loading tasks...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <ul>
          {tasks.map((task) => (
            <li key={task._id}>
              <Link to={`/tasks/${task._id}`}>{task.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;
