// TODO: Set the base URL for your API
BASE_URL = 'http://bvrithcloud.com/';

async function handleResponse(response) {
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
}

export async function getAllTasks() {
  const response = await fetch(BASE_URL);
  return handleResponse(response);
}

export async function getTaskById(taskId) {
  const response = await fetch(`${BASE_URL}/${taskId}`);
  return handleResponse(response);
}

