export default {
    getUrl: () => {
        return 'production'.includes(process.env.NODE_ENV) ? 'https://jordanbarbosa.com' : 'http://local.jordanbarbosa:3001'
    },
};
