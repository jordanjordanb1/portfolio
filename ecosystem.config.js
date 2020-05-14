module.exports = {
  apps: [
    {
      name: 'portfolio',
      script: './bin/www',
      instances: '4',
      exec_mode: 'cluster',
      ignore_watch: ["noude_modules", "client/node_modules"],
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
