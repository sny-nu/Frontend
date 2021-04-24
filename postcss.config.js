module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: 'postcss-loader',
                options: {
                    postcssOptions: {
                        syntax: 'postcss',
                        plugins: ['postcss-import', 'tailwindcss', 'postcss-nested', 'autoprefixer'],
                    },
                },
            },
        ],
    },
};