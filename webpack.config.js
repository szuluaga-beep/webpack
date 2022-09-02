const HtmlWebpack = require('html-webpack-plugin')

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
                    use:['style-loader','css-loader']
               }
          ]
     },
     plugins: [
          new HtmlWebpack({
               template: './index.html',
               //filename:'main.html'
          })
     ]
}