import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

import { API_URL } from '../utils/constants';

export const useLogout = () => {
  return useMutation({
    mutationFn: async () => {
      try {
        const requestData = {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          url: `${API_URL}/api/auth/logout`,
        };

        const response = await axios(requestData);
        return response.data;
      } catch (error) {
        console.log(error);
      }
    },
  });
};
