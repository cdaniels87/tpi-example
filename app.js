const htmlStandards = require('reshape-standard')
const Dato = require('spike-datocms')
const cssStandards = require('spike-css-standards')
const jsStandards = require('spike-js-standards')
const pageId = require('spike-page-id')
const env = process.env.SPIKE_ENV
const locals = {}

module.exports = {
  devtool: 'source-map',
  ignore: ['**/layout.html', '**/_*', '**/.*', 'readme.md', 'yarn.lock', 'package-lock.json'],
  reshape: htmlStandards({
    parser: false,
    locals,
    minify: env === 'production'
  }),
  postcss: cssStandards({
    minify: env === 'production',
    warnForDuplicates: env !== 'production'
  }),
  babel: jsStandards(),
  plugins: [
    new Dato({
      addDataTo: locals,
      token: '9c259d461095529e3ef9c64cdeeb13',
      models: [
        { name: 'testimonial', json: 'testimonials.json' },
        { name: 'team', json: 'teams.json' },
        { name: 'header', json: 'header.json' },
        { name: 'home', json: 'seo.json' }

    ],
      json: 'alldata.json'
    })
  ]
}
