const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const mode = 'production'
const createLoader = (...loaders) => [
  mode === 'production' ?
    MiniCssExtractPlugin.loader:
    'style-loader',
  {
    loader: 'css-loader',
    options: {
      modules: {
        compileType: 'icss',
      }
    },
  },
  ...loaders
]

module.exports = {
  mode,
  plugins: [
    new ESLintPlugin({
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    }),
    mode === 'production' && new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new HtmlWebpackPlugin()
  ].filter(Boolean),
  output: {
    filename: '[name].[contenthash].js'
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          minSize: 0, // 如果不写 0，由于 React 文件尺寸太小，或者直接跳过
          test: /[\\/]node_modules[\\/]/, // 为了匹配 /node_modules/ 或者 \node_modules\
          name: 'vendors', // 文件名
          chunks: 'all', // all 表示同步加载和异步加载，async 表示异步加载，initial 表示同步加载
          // 这三行的整体意思就是把两种加载方式的来自 node_modules 目录的文件大包围 vendors.xxx.js
          // 其中 vendors 是第三方的意思（行业默认，显得专业）
        }
      },
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/')
    },
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env'],
              ['@babel/preset-react', {runtime: 'classic'}],
              ['@babel/preset-typescript']
            ],
          }
        }
      },
      {
        test: /\.less$/,
        use: createLoader({
          loader: 'less-loader',
          options: {
            additionalData: `@import "~@/less-vars.less";`,
            lessOptions: {
              includePaths: [__dirname]
            }
          },
        })
      },
      {
        test: /\.s[ac]ss$/i,
        use: createLoader({
          loader: 'sass-loader',
          options: {
            additionalData: `@import "~@/scss-vars.scss";`,
            sassOptions: {
              includePaths: [__dirname]
            }
          },
        })
      },
      {
        test: /\.styl(us)?$/,
        use: createLoader({
          loader: 'stylus-loader',
          options: {
            stylusOptions: {
              import: [path.resolve(__dirname, 'src/stylus-vars.styl')]
            }
          },
        })
      },
    ]
  }
}