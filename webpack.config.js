const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin')

const createLoader = (...loaders) => [
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
  mode: 'production',
  plugins: [
    new ESLintPlugin({
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    })
  ],
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