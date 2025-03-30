let mix = require('laravel-mix');
mix
.js('src/scripts/app.js', 'build')
.setPublicPath('build')
.postCss('src/styles/main.css' ,'build', [
    require('postcss-for')
])
.setPublicPath('build')