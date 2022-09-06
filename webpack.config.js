const HtmlWebpack = require('html-webpack-plugin')
const MiniCssExtract = require('mini-css-extract-plugin')

module.exports = {
     mode: 'development',
     output: {
          clean: true
     },
     module: {
          rules: [
               {
                    //Realizar expresiones reguales
                    test: /\.html$/,
                    loader: 'html-loader',
                    options: {
                         sources: false
                    }
               },
               {
                    test: /\.css$/,
                    exclude: /style.css$/,
                    use: ['style-loader', 'css-loader']
               },
               {
                    test: /style.css$/,
                    use: [MiniCssExtract.loader, 'css-loader']
               }
          ]
     },
     plugins: [
          new HtmlWebpack({
               template: './index.html',
               //filename:'main.html'
          }),
          new MiniCssExtract({
               filename: '[name][fullhash].css',
               ignoreOrder: false
          })
     ]
}