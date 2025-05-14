const path = require('path');

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname),       // <--- кладёт в корень
    filename: 'bundle.js',               // итоговый файл
    publicPath: ''
  },
  watch: true
};