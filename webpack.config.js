const path = require("path");

module.exports = {
    entry: './index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: [".js"]
    },
    module: {
        rules: []
    },
    mode: "development"
};