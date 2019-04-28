import axios from 'axios';
import store from '../store';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

api.interceptors.request.use((config) => {
  let token = null;
  const headers = { ...config.headers };

  if (localStorage.getItem('@MeetApp:token')) {
    token = localStorage.getItem('@MeetApp:token');
  } else {
    const { auth } = store.getState();
    token = auth.token;
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return { ...config, headers };
});

export default api;
