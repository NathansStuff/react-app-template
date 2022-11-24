const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
      '@features': path.resolve(__dirname, 'src/features/'),
      '@data': path.resolve(__dirname, 'src/data/'),
      '@context': path.resolve(__dirname, 'src/context/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
    },
  },
};
