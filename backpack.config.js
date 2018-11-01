module.exports = {
  webpack: (config, options, webpack) => {
    console.log(options);
    config.entry.main = './server/index.js'
    return config
  }
}