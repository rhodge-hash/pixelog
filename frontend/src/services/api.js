const API_URL = 'http://localhost:3000';

export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch(`${API_URL}/assets`, {
    method: 'POST',
    body: formData,
  });

  return response.json();
};

export const search = async (query) => {
  const response = await fetch(`${API_URL}/search?q=${query}`);
  return response.json();
};
