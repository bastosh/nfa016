module.exports = {

  // Javascript
  JS_FILES: [
  'js/*.js',
  ],

  // Example – Install jQuery via npm if needed
  JS_DEPS: [
    'node_modules/jquery/dist/jquery.js',
    'src/js/vendors/typed.js',
  ],

  // CSS
  CSS_COMPATIBILITY: [
    'last 2 versions',
    'ie >= 9',
    'Android >= 2.3',
    'ios >= 7',
  ],

  // Example – Install Bootstrap via npm if needed
  CSS_DEPS: [
    //'node_modules/bootstrap/dist/css/bootstrap-reboot.css',
  ],

  DIST_FILES: [
    'src/favicon.ico',
    'src/icon.png',
    'src/tile.png',
    'src/tile-wide.png',
    'src/404.html',
    'src/browserconfig.xml',
    'src/humans.txt',
    'src/robots.txt',
    'README.md'
  ],

  IMG: [
    'src/img/*',
  ],

  PUG_PAGES: [
    'src/pug/pages/about.pug',
    'src/pug/pages/blog.pug',
    'src/pug/pages/contact.pug',
    'src/pug/pages/cv.pug',
    'src/pug/pages/portfolio.pug',
    'src/pug/pages/ressources.pug',
  ],

  PUG_ARTICLES17: [
    'src/pug/articles/2017/*.pug',
  ],

  PUG_TAGS: [
    'src/pug/tags/*.pug',
  ],

  PAGES_DIST: [
    '_build/pages/about.html',
    '_build/pages/blog.html',
    '_build/pages/contact.html',
    '_build/pages/cv.html',
    '_build/pages/portfolio.html',
    '_build/pages/ressources.html',
  ],

  ARTICLES_2017: [
    '_build/articles/2017/l-apostrophe-la-vraie.html',
    '_build/articles/2017/test.html',
  ],

  TAGS: [
    '_build/tags/autres.html',
    '_build/tags/typographie.html',
  ],
};
