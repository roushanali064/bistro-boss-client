import axios from 'axios';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const axiosSecure = axios.create({
  baseURL: 'https://bistro-boss-server-phi.vercel.app', 
});

const useAxiosSecure = () => {
  // const { logOut } = useContext(AuthContext);
  // const navigate = useNavigate();

  // const axiosSecure = axios.create({
  //   baseURL: 'https://bistro-boss-server-phi.vercel.app',
  // });

  // useEffect(() => {
  //   axiosSecure.interceptors.request.use((config) => {
  //     const accessToken = localStorage.getItem('access-token');
  //     if (accessToken) {
  //       config.headers.Authorization = `Bearer ${accessToken}`;
  //     }
  //     return config;
  //   });

  //   axiosSecure.interceptors.response.use(
  //     (response) => response,
  //     (error) => {
  //       if (error.response) {
  //         const { status } = error.response;
  //         if (status === 401 || status === 403) {
  //           logOut().then(() => {
  //             navigate('/login');
  //           });
  //         }
  //       }
  //       return Promise.reject(error);
  //     }
  //   );
  // }, [axiosSecure, logOut, navigate]);

  // return axiosSecure;

  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate(); 

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem('access-token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          await logOut();
          navigate('/login');
        }
        return Promise.reject(error);
      }
    );
  }, [logOut, navigate]);

  return axiosSecure;
};

export default useAxiosSecure;
