if (`${process.env.NODE_ENV}` === 'development') {
  module.exports = require('./dev');
} else if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod');
} else {
  throw new Error('Enviroment is not set!');
}
