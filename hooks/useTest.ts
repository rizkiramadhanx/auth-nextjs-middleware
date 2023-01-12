import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { API_URL } from '../utils/constants';

export const useTest = () => {
  return useQuery({
    queryKey: ['use-test'],
    queryFn: async () => {
      try {
        const response = await axios('https://mock.codes/400', {
          withCredentials: false,
        });

        return response.data;
      } catch (error: any) {
        console.log(error);
        throw new Error(error);
      }
    },
  });
};

export const useTestMutate = () => {
  return useMutation({
    mutationFn: async (data: any) => {
      try {
        const requestData = {
          method: 'post',
          data: data,
          withCredentials: false,
          headers: {
            'Content-Type': 'application/json',
          },
          url: `${API_URL}/api/auth/login`,
        };

        await axios(requestData);
      } catch (error: any) {
        throw error.response.data;
      }
    },
  });
};
