/**
 * For displaying the Stanford University logo using custom font and glyphs.
 * Can be used with the generic logo twig template.
 */
module.exports = function () {
  return function ({ addComponents, theme, config }) {
    let stanford = config('theme.fontFamily.stanford').join(", ");

    const components = {
      '.logo': {
        display: 'inline-block',
        fontFamily: stanford,
        fontWeight: theme('fontWeight.regular'),
        lineHeight: '0.75',
        textDecoration: 'none',
        textTransform: 'none',
        transform: 'translateZ(0)',
        fontStyle: 'normal',
        fontVariant: 'normal',
        letterSpacing: '0',
        color: theme('colors.cardinal-red.DEFAULT'),
        fontFeatureSettings: '"liga" 1',
        fontVariantLigatures: 'discretionary-ligatures',
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
        '&:focus': {
          color: theme('colors.cardinal-red.DEFAULT'),
        },
        '&:hover': {
          color: theme('colors.cardinal-red.DEFAULT'),
        },
      },
    }

    addComponents(components)
  }
}