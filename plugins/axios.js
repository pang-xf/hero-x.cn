export default function ({ $axios, redirect }) {
  const ENV = process.env.NODE_ENV;
  // process.env.baseUrl
  $axios.defaults.baseURL = ENV=='development'?'localhost:3000':'http://47.106.163.14';
  console.log('$axios.defaults.baseURL = '+$axios.defaults.baseURL);
  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })
  $axios.onError(error => {
    // const code = parseInt(error.response && error.response.status)
    console.log('codeOnError = '+code);
    // if (code === 400) {
    //   redirect('/400')
    // }
  })
}