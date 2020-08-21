module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    DATABASE_URL: process.env.DATABASE_URL || 'postgresql://ashley2@localhost/noteful',
    TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || 'postgresql://ashley2@localhost/noteful_test_api'
}
// export default {
//     API_ENDPOINT: `https://fierce-taiga-41664.herokuapp.com//`,
//     API_KEY: process.env.REACT_APP_API_KEY,
//   }
//⬢ fierce-taiga-41664
//https://fierce-taiga-41664.herokuapp.com/ | https://git.heroku.com/fierce-taiga-41664.git