const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "[name].[hash:8].js",
        path: path.resolve(__dirname, 'build')
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                loader: ["babel-loader", "eslint-loader"]
            }, {
                test: /\.(css|sass|scss)$/,
                exclude: /node_modules/,
                loader: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".json"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./public/index.html"),
            filename: "index.html"
        }),
        new CleanWebpackPlugin()
    ],
    devServer: {
        port: "8090",
        host: "localhost",
        hot: false,
        inline: true,
        compress: true,
        quiet: false,
        proxy: {
            '/api': 'http://localhost:8080'
        }
    }
}