var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
    module: {
        rules: [{
            test: /.js[x]?$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        },
        {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
            })
        },
        {
            test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
            loader: 'url-loader?limit=100000' 
        }

    ],
        
    }
}

var app = Object.assign({}, config, {
    entry:  './src/index.js',
    output: {
        path: __dirname + "/public",
        filename: "./app.build.js",
        publicPath: '/'
    },
    devServer: {
        port: 9090,
        historyApiFallback: true,
        contentBase: './public',
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
            modules: __dirname + '/node_modules'
        }
    },
    plugins: [
        new ExtractTextPlugin('app.css')
    ]
});

module.exports = [
    app
];