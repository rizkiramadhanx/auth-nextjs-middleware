import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

import { API_URL } from '../utils/constants';
import { TFormRegister } from '../utils/type';

export const useRegister = () => {
  return useMutation({
    mutationFn: async (data: TFormRegister) => {
      try {
        const requestData = {
          method: 'post',
          data: data,
          headers: {
            'Content-Type': 'application/json',
          },
          url: `${API_URL}/api/auth/register`,
        };

        const response = await axios(requestData);
        return response.data;
      } catch (error) {
        console.log(error);
      }
    },
  });
};
