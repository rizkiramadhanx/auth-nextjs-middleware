import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { API_URL } from '../utils/constants';

export const useProfile = () => {
  return useQuery({
    queryKey: ['use-profile'],
    queryFn: async () => {
      try {
        const response = await axios(API_URL + '/profile');
        return response.data;
      } catch (error) {
        console.log(error);
      }
    },
  });
};
