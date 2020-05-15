module.exports = {
  apps: [
    {
      name: 'portfolio',
      script: 'bin/www',
      instances: '0',
      exec_mode: 'cluster',
      ignore_watch: ['noude_modules', 'client/node_modules'],
    },
  ],
};
