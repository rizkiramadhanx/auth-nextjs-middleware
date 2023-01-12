import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

import { API_URL } from '../utils/constants';
import { TFormLogin } from '../utils/type';

export const useLogin = () => {
  return useMutation({
    mutationFn: async (data: TFormLogin) => {
      try {
        const requestData = {
          method: 'post',
          data: data,
          headers: {
            'Content-Type': 'application/json',
          },
          url: `${API_URL}/api/auth/login`,
        };

        const response = await axios(requestData);
        return response.data;
      } catch (error) {
        console.log(error);
      }
    },
  });
};
