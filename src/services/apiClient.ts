import axios from 'axios';
// import { toast } from 'react-toastify';

const baseURL = process.env.NEXT_PUBLIC_API_BASE;

// const getAccessToken = () =>
//   localStorage.getItem('access_token') !== null
//     ? localStorage.getItem('access_token')
//     : null;

const axiosInstance = axios.create({
  baseURL
});

// axiosInstance.interceptors.request.use(
//   config => {
//     const token = getAccessToken();
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     } else {
//       delete axiosInstance.defaults.headers.common.Authorization;
//     }

//     return config;
//   },

//   error => Promise.reject(error)
// );

// axiosInstance.interceptors.response.use(
//   response => {
//     return response;
//   },
//   error => {
//     if (error.response.status === 401) {
//       localStorage.clear();
//       location.href = '/login';
//     }
//     if (error.response.status === 404) {
//       return Promise.resolve(error);
//     }
//     if (error.response) {
//       const message = Array.isArray(error.response.data.detail)
//         ? error.response.data.detail[0].msg
//         : error.response.data.detail;
//       toast.error(message, {
//         position: 'top-center',
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: 'light'
//       });
//     }
//     return Promise.reject(error);
//   }
// );

export const apiClient = axiosInstance;
