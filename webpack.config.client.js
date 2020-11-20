const path = require('path');
const webpack = require('webpack');
const CURRENT_WORKING_DIR = process.cwd();

// const config = {
//     name: 'browser',
//     mode: 'development',
//     devtool: 'eval-source-map',
//     entry: [
//         'webpack-hot-middleware/client?reload=true',
//         path.join(CURRENT_WORKING_DIR, 'client/main.js')
//     ],
//     output: {
//         path: path.join(CURRENT_WORKING_DIR, '/dist'),
//         filename: 'bundle.js',
//         publicPath: '/dist/'
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.js$/,
//                 exclude: /node_modules/,
//                 use: [
//                     'babel-loader'
//                 ]
//             },
//             {
//                 test: /\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,
//                 use: 'file-loader'
//             }
//         ]
//     },
//     plugins: [
//         new webpack.HotModuleReplacementPlugin(),
//         // new webpack.NoEmitOnErrorsPlugin(),
//
//     ],
//     resolve: {
//         alias: {
//             'react-dom': '@hot-loader/react-dom'
//         }
//     },
//     optimization: {
//         emitOnErrors: true
//     }
//
// }
//
// module.exports = config

const config = {
    name: "browser",
    mode: "development",
     // devtool: 'eval',
      devtool: 'source-map',
    entry: [

        'webpack-hot-middleware/client',
        // 'webpack-hot-middleware/client?reload=true',
        path.join(CURRENT_WORKING_DIR, '/client/main.js')
    ],
    output: {
        path: path.join(CURRENT_WORKING_DIR , '/dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,
                use: 'file-loader'
            },
            {
                test: /\.jsx?$/,
                include: /node_modules/,
                use: ['react-hot-loader/webpack']
            },
        ]
    },
    plugins: [

        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ],
    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom'
        }
    },
    // optimization: {
    //     emitOnErrors: true
    // }
}

module.exports = config
