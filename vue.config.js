const plugins = [];
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

if (process.env.NODE_ENV === 'development') {
    plugins.push(new BundleAnalyzerPlugin());
}

module.exports = {
    chainWebpack: config => {
        config.plugin('preload').tap(options => {
            options[0].as = (entry) => {
                if (/\.css$/.test(entry)) return 'style';
                if (/\.woff$/.test(entry)) return 'font';
                if (/\.png$/.test(entry)) return 'image';
                return 'script';
            }
            options[0].include = 'allAssets'
            return options
        })
    },
    configureWebpack:{
      optimization: {
        splitChunks: {
          minSize: 10000,
          maxSize: 250000,
        }
      },
      plugins
    }
  }