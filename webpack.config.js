var path = require('path');
var webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var extractPlugin = new MiniCssExtractPlugin({
    filename: 'main.css'
})  
module.exports = {
    entry: './src/js/app.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        // publicPath: '/dist'
    },
    module: {
       
        rules:[
            {
                test: /\.css$/i,
                use: [      
                    MiniCssExtractPlugin.loader, 
                    'css-loader'
                ],
              },
             
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']

            },
            {
                test: /\.(png|jpg|svg)$/,
                use: [{
                 loader: "url-loader",
                 options: {
                    name:'[name].[ext]',
                    outputPath:'img/',
                    publicPath:'img/',
                    limit: 5000
                 }
                }] 
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            }
            
            
        ]
        
    },
    plugins: [
        new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
          filename: '[name].css',
          chunkFilename: '[id].css',
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'about.html',
            template: 'src/about.html',
            chunks:[]
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery:'jquery'
        })      
    
      ]
} 