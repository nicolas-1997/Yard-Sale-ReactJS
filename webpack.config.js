const path = require('path') //permite donde vamos a trabajar, donde esta ubicado el proyecto.
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: './src/index.js',
    output: {  // donde vivira el proyecto cuando este listo
        path: path.resolve(__dirname, 'dist'), 
        filename: 'bundle.js', //le da el nombre al paquete que se crea
    },
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx'], //Nos permite reconocer todas las extenciones del proyecto y no tengamos algun error a futuro.
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
              test: /\.(css|scss)$/,
              use: [
                  "style-loader",
                  "css-loader",
                  "sass-loader",
              ],  
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
    ],
    // devServer:{
    //     contentBase: path.join(__dirname, 'dist'),
    //     compress: true,
    //     port: 3005,
    // }
}