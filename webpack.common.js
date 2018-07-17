const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: {
    home: [path.resolve(__dirname, 'src/home/home.jsx')]
  },
  output: {
    path: path.resolve(__dirname, 'dist/public'),
    filename: 'js/[name].js',
    publicPath: '/'
  },
  plugins: [
    // new CleanWebpackPlugin(['dist/public'], { root: __dirname }),
    new ExtractTextPlugin('css/[name].css')
  ],
  module: {
    rules: [
      {
        // test: que tipo de archivo quiero reconocer,
        // use: que loader se va a encargar del archivo
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['latest', 'react', 'stage-2']
          }
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            }
          ]
        })
      },
      {
        test: /\.(sass|scss)$/,
        exclude: /(node_modules)/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1000000,
            fallback: 'file-loader',
            name: 'images/[name].[hash].[ext]'
          }
        }
      }
    ]
  }
}