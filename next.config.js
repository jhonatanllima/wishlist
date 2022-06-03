const withPWA = require('next-pwa');

module.exports = {
  reactStrictMode: true,
  images: ['https://via.placeholder.com/'],
};

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: false,
  },
});
