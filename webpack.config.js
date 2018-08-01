module.exports = {
    module: {
        rules : [
            {
                test : /\.(js)$/,
                exclude : /node_modules/,
                use : ['babel-loader']
            },
        ]
    },
    resolve: {
        extensions: ['*', '.js']
    },
    devServer: {
        port: 7777,
    }
};