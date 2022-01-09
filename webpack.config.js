const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// webpack.config.js
module.exports = {
    // ...
    entry: './src/script.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Output Management',
          template: './index.html' 
        }),
      ],
    externals: {
      // as it as tutorial with html2canvas and canvg below lines commented out..
      // canvg: "canvg",
    //   html2canvas: "html2canvas", /*if u uncomment, it will not be webpacked 
      // dompurify: "dompurify"
    }
  };