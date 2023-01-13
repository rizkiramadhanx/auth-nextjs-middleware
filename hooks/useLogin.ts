import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

import { API_URL } from '../utils/constants';
import { TFormLogin } from '../utils/type';

export const useLogin = () => {
  return useMutation({
    mutationFn: async (data: TFormLogin) => {
      const requestData = {
        method: 'post',
        data: data,
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
        url: `${API_URL}/api/auth/login`,
      };

      try {
        await axios(requestData);
      } catch (error: any) {
        throw error.response.data;
      }
    },
  });
};
