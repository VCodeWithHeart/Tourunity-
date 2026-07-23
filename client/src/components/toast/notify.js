import { toast } from 'react-toastify';

export const notify = {
  success: (msg, options = {}) =>
    toast.success(msg, {
    //   className: 'bg-green-500 text-white',
      ...options,
    }),

  error: (msg, options = {}) =>
    toast.error(msg, {
    //   className: 'bg-red-500 text-white',
      ...options,
    }),

  warning: (msg, options = {}) =>
    toast.warn(msg, {
    //   className: 'bg-yellow-500 text-white',
      ...options,
    }),

  info: (msg, options = {}) =>
    toast.info(msg, {
    //   className: 'bg-blue-500 text-white',
      ...options,
    }),

  custom: (content, options = {}) => toast(content, options),
};