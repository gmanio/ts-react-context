var path = require('path');
module.exports = {
  modules: false,
  plugins: {
    autoprefixer: {
      "browsers": "last 2 versions, > 1%"
    },
    'postcss-easysprites':{
      imagePath:'./css/images',
      spritePath: './css'
    }
  }
};