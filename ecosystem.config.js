module.exports = {
  apps: [
    {
      script: './bin/www',
      instances: '4',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
