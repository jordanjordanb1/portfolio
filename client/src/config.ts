export const isProd = () => {
    return false;
};

const URL = () => {
    if (isProd()) {
        return 'https://jordanbarbosa.com'; // Set in future
    } else {
        return 'http://192.168.86.26:3001';
    }
};

export const config = {
    url: URL(),
};
