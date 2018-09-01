const path = require("path");

module.exports = {
    entry: "./javascript/src/index.jsx",
    output: {
        path: path.resolve(__dirname, "javascript/dist"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".js", ".jsx"],
        modules: ["node_modules"]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["react", "es2015","stage-3"]
                    }
                }
            }
        ]
    }
};