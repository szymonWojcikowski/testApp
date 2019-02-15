const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCSS = require("mini-css-extract-plugin");


module.exports = {
    mode: 'development',
    entry: "./src/App.jsx",
    output: {
        filename: "out.js",
        path: path.resolve(__dirname, "app"),
        publicPath: ""
    },
    devServer: {
        inline: true,
        contentBase: './',
        port: 3001,
        historyApiFallback: true
    },
    watch: true,
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCSS.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCSS({
            filename: "app.css",
        })
    ]
};