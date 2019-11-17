const forms = require('@tailwindcss/custom-forms');
const interactions = require('tailwindcss-interaction-variants');
const transforms = require('tailwindcss-transforms');

module.exports = {
  theme: {
    extend: {
      fontSize: {
        '7xl': '6.25rem',
      },
    },
    rotate: {
      '90': '90deg',
    },
  },
  variants: {
    textColor: ['hocus', 'group-hocus'],
    borderColor: ['hocus'],
    textDecoration: ['hocus'],
  },
  plugins: [interactions(), transforms(), forms],
};
