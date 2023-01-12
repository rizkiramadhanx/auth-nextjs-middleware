import axios from 'axios';
import { destroyCookie } from 'nookies';
import { useLogout } from '../hooks/useLogout';

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
          const { mutate } = useLogout();
          mutate(undefined, {
            onSuccess: () => {
              return console.log('ok');
            },
          });
        }
      }
    );
  },
};
