module.exports = {
         entry: './src/script.es6',
         output: {
             path: __dirname + '/dist',
             filename: 'script.js'
         },
         module: {
             loaders: [{
                 test: /\.es6$/,
                 exclude: /node_modules/,
                 loader: 'babel-loader',
                 options: {
                   presets: ['env']
                 }
             }]
         }
     };