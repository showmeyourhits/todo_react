var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname,
        filename: "./bundle.js"
    },
    devServer: {
        inline: true,
        port: 4445,
        contentBase: "./dist"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                loader: "babel",
                query: {
                    presets: ["es2015", "react"]
                }
            },
            {
                test: /\.scss$/,
                exclude: [/node_modules/],
                loader: ExtractTextPlugin.extract("style", "css!sass"),
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("bundle.css"),
    ]
}