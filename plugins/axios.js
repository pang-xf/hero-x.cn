export default function ({ $axios, redirect }) {
  const ENV = process.env.NODE_ENV;
  // process.env.baseUrl
  $axios.baseURL = ENV=='development'?'localhost:3000':'http://47.106.163.14';
  console.log('$axios.baseURL = '+$axios.baseURL);
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