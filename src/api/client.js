const BASE_URL = 'http://bvrithcloud.com/api';

async function handleResponse(response) {
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
}

export async function getAllTasks() {
  const response = await fetch(`${BASE_URL}/tasks`);
  return handleResponse(response);
}

export async function getTaskById(taskId) {
  const response = await fetch(`${BASE_URL}/tasks/${taskId}`);
  return handleResponse(response);
}