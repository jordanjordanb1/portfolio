/* Sets MongoDB username & password from env variable or empty sttring if the variable isn't set */
const mongodb_user = process.env.MONGOUSER || '',
    mongodb_pass = process.env.MONGOPASS || '',
    secret = process.env.SECRET || '',
    gmail_pass = process.env.GMAIL_PASS || ''

module.exports = {
    mongoUrl: 'mongodb://localhost:27017/portfolio',
    mongoProdUrl: `mongodb://${mongodb_user}:${mongodb_pass}@ds061757.mlab.com:61757/heroku_8f2wlb6c`,
    secret,
    gmail_pass
}
