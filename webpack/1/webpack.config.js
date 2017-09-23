const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const PATHS = {
  app:path.join(__dirname,'app'),
  build:path.join(__dirname,'build'),
};


module.exports = {
  devServer:{
    port:6540,

    //下面配置语法错误的信息在浏览器上显示
    overlay:{
      errors:true,
      warnings:true,
    },
  },
  entry:{
    app:PATHS.app,
  },
  output:{
    path:PATHS.build,
    filename:'[name].js',
  },
  plugins:[
    new HtmlWebpackPlugin({
      title:'webpack demo',
    }),
  ],
  module:{
    rules:[
      {
        test: /\.js$/,
        enforce: 'pre',
        //检测语法的规范
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
        },
      },
    ],
  },
};
