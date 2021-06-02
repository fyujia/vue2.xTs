const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VuePlugin = require('vue-loader/lib/plugin-webpack5')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const { HotModuleReplacementPlugin } = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const IS_PROD = process.env.NODE_ENV === 'production';

module.exports = {
    entry: './src/mian.ts',
    output: {
        filename: '[name].[contenthash].js',
        path: resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
            test: /\.vue$/,
            exclude: /node_modules/,
            use: [{
                loader: 'vue-loader',
                options: {
                    compilerOptions: {
                        preserveWhitespace: false
                    }
                }
            }]
        },
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        },
        {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
            }, {
                loader: 'ts-loader',
                options: { // 解析vue中的ts需要加上这个配置项  哎   醉了
                    appendTsSuffixTo: [/\.vue$/]
                }
            }]
        }, {
            test: /\.css$/i,
            use: [
                IS_PROD ? MiniCssExtractPlugin.loader : 'vue-style-loader',
                // 'style-loader',
                'css-loader',
                'postcss-loader'
            ]
        },
        {
            // 使用lazy加载
            // 不要修改默认主题scss的路径
            test: /\.s[ac]ss$/,
            include: resolve('src'),
            use: [
                IS_PROD ? MiniCssExtractPlugin.loader : 'vue-style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        esModule: false
                    }
                },
                'postcss-loader',
                {
                    loader: 'sass-loader',
                    options: {
                        // 使用dart-sass代替node-sass
                        implementation: require("sass")
                    }
                }
            ]
        },
        {
            test: /\.(png|jpe?g|gif)(\?.*)?$/,
            // 在导出dataURL和单独文件之间自动选择，类似于url-loader limit
            type: 'asset',
            generator: {
                filename: 'images/[name].[hash:8][ext][query]'
            },
            parser: {
                dataUrlCondition: {
                    maxSize: 10 * 1024 // 10kb 默认为8kb
                }
            }
        },
        {
            test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
            type: 'asset',
            generator: {
                filename: 'fonts/[name].[hash:8][ext][query]',
                publicPath: '../'
            },
            parser: {
                dataUrlCondition: {
                    maxSize: 10 * 1024 // 10kb 默认为8kb
                }
            }
        },
        {
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
            // 导出单独文件输出Url，类似于file-loader
            type: 'asset/resource',
            generator: {
                filename: 'media/[name][hash:8][ext][query]'
            }
        },]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            cache: false
        }),
        new VuePlugin(),
        new FriendlyErrorsWebpackPlugin(),
        new HotModuleReplacementPlugin()
    ],
    devtool: IS_PROD ? 'eval-cheap-module-source-map' : 'source-map',
    target: 'web',
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        },
        extensions: ['.js', '.ts', 'vue']
    },
    devServer: {
        quiet: true,
        open: true,
        port: 3000,
        hot: true,
        host: 'localhost',
        compress: false,
        contentBase: resolve(__dirname, 'dist'),
        // disableHostCheck: true   检查热更新
    }
}