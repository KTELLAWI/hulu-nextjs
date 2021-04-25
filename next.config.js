const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const dotenvLoad = require('dotenv-load');
 
dotenvLoad();

const nextConfig = {
  images: {
    domains: ['links.papareact.com','image.tmdb.org']
  },
 
}
module.exports = withPlugins([[withImages]], nextConfig)


