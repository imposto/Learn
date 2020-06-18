// aqui quem le é o node então é preciso um metodo de exports do node

const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptmizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports ={

    mode: modoDev ? 'development' : 'production',
    entry: './src/main.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    devServer:{
        contentBase: "./public",
        port: 9000
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: "style.css" //nome do arquivo externo que sera extraido do css
        })
    ],
    optimization:{
        minimizer:[
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptmizeCSSAssetsPlugin({})
        ]
    },
    module:{
        rules: [{
            test: /\.s?[ac]ss$/, // essa extensao encontra .css .scss .sass
            use :[
                MiniCssExtractPlugin.loader, // extrai o css para um arquivo externo
                //'style-loader', // Adiciona css a Dom injetando a tag style
                'css-loader', // interpreta @import, url()...
                'sass-loader',
            ]
        },{
            test: /\.(png|svg|jpg|gif)$/,
            use:['file-loader']
        }]
    }
}