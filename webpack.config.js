const path = require('path');

module.exports = {
    entry : './views/index.js',
    output : {
        path : path.resolve(__dirname , 'public/dist/'),
        filename: 'dist.js'
    },
    module : {
        rules : [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use:{
                        loader:'babel-loader'
                    }    
            },
            {test: /\.css$/, use:['style-loader', 'css-loader']}
        ]
    },
    mode:'development'
}