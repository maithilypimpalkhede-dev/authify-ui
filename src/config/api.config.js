import axios from 'axios';
import { toast } from 'sonner';
import storage from '../lib/storage';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    const token = storage.getToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
4
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => {
    return response.data?.result ?? response.data;
  },
  (error) => {
    let message =
      error.response?.data?.message ||
      error.message ||
      'Something went wrong';

    // Handle structured backend errors
    if (error.response?.data?.error) {
      const { errors, error_params } = error.response.data.error;

      if (errors && Array.isArray(errors)) {
        message = errors.join(', ');
      } else if (error_params && Array.isArray(error_params)) {
        message = error_params
          .map((e) => e.message || e.msg)
          .filter(Boolean)
          .join(', ');
      }
    }

    toast.error(message, {
      position: 'top-right',
    });

    return Promise.reject({
      statusCode: error.response?.status,
      message,
    });
  }
);

export default apiClient;