const path = require("path");
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({  
  indexPath: "vfte012.html", //this change target html to specified file name
  outputDir: "vfte012", //this change target folder to spcified name
  pages: {
    index: {
      entry: 'src/vfte012.js',
      title: 'Confuguration Setting',
    }
  },
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' /* this is BASE_URL in index.html */
    ? './' /*+ process.env.CI_PROJECT_NAME + '/'*/
    : './',
  configureWebpack: {
    devtool: "source-map",
    optimization: {
      minimize: false
    },
    resolve: {
      alias: {
        // bind version of jquery-ui
        "jquery-ui": "jquery-ui-dist/jquery-ui.js",
        // bind to modules;
        modules: path.join(__dirname, "node_modules")
      }
    },
  }    
})
