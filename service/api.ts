import axios from 'axios';
import { useLogout } from '../hooks/useLogout';
import { API_URL } from '../utils/constants';

export const ApiService = {
  init() {
    axios.defaults.withCredentials = true;
  },

  handle401Inteceptor() {
    axios.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        if (error.response.status === 401) {
          try {
            const requestData = {
              method: 'post',
              headers: {
                'Content-Type': 'application/json',
              },
              url: `${API_URL}/api/auth/logout`,
            };

            await axios(requestData);
            location.reload();
          } catch (error) {
            throw error;
          }
        }
        throw error;
      }
    );
  },
};
