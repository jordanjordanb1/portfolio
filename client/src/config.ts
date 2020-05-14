export default {
  isDevelopment: process.env.NODE_ENV === 'development' && true,
  getUrl: () => {
    return 'production'.includes(process.env.NODE_ENV)
      ? 'https://jordanbarbosa.com'
      : 'http://localhost:3001';
  },
};
