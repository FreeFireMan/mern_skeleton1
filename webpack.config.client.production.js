const path = require('path')
const CURRENT_DIR = process.cwd()

const config = {
    mode: "production",
    entry: [
        path.join(CURRENT_DIR, 'client/main.js')
    ],
    output: {
        path: path.join(CURRENT_DIR, '/dist'),
        filename: 'bundle.js',
        publicPath: "/dist/"
    },
    module:{
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'bable-loader'
                ]
            },
            {
                test: /\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,
                use: 'file-loader'
            }
        ]
    }
}

module.exports = config;
