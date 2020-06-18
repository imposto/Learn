const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production', // selecionou o modo
    entry: './src/index.js',// Arquivo de entrada 
    devServer: { // inicia um web server 
        contentBase: './build',
        port: 9000,
    },
    optimization: { // minificadores
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    output: { // pasta de saida
        filename: 'app.js',
        path: __dirname + '/build'
    },
    plugins: [ // pluguin para extrair o css
        new MiniCssExtractPlugin({ filename: 'estilo.css' }),
        new CopyWebpackPlugin([ // plugin copia as pasta css e imagens para pasta biuld
            { context: 'src/', from: '**/*.html' },
            { context: 'src/', from: 'imgs/**/*' }
        ])
    ],
    module: {
        rules: [{ // testando com regex se o arquivo é sass
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                // 'style-loader', // Adiciona CSS a DOM injetando a tag <style>
                'css-loader', // interpreta @import, url()...
                'sass-loader',
            ]
        }, {// fonte
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }, {// fonte 
            test: /.(ttf|otf|eot|svg|woff(2)?)$/,
            use: ['file-loader']
        }]
    }
}