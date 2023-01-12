import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { API_URL } from '../utils/constants';

export const useTest = () => {
  return useQuery({
    queryKey: ['use-test'],
    queryFn: async () => {
      try {
        const response = await axios(API_URL + '/secret');
        return response.data;
      } catch (error) {
        console.log(error);
      }
    },
  });
};
