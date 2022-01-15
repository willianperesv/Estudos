const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development', // se mudar a propriedade para production, o arquivo ./dist/main.js muda seu codigo para apenas uma linha
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public' //joga para a pasta public
    },
    devServer: {
        contentBase: "./public",
        port: 9000
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        })
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss/,
            use: [
                    MiniCssExtractPlugin.loader,
                    //'style-loader', //adiciona css dentro da DOM com a tag style
                    'css-loader',
                    'sass-loader',

                ] //interpreta o @import, url()
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }]
    }
}