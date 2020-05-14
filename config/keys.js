module.exports = {
  mongoURI: `${process.env.MONGO_URI}`,
  secret: `${process.env.SECRET}`,
  gmailPass: `${process.env.GMAIL_PASS}`,
  env: `${process.env.NODE_ENV}`,
  port: `${process.env.PORT}`,
  debug: process.env.DEBUG,
};
