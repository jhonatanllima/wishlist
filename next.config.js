const withPWA = require('next-pwa');

module.exports = {
  reactStrictMode: true,
  images: ['placeholder.com'],
};

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: false,
  },
});
