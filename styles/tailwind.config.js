module.exports = {
  purge: {
    content: ["_site/**/*.html"],
    options: {
      whitelist: [],
    },
  },
  theme: {
    screens: {
			sm: '520px',
      md: '768px',
      lg: '1024px',
			xl: '1280px',
			'2xl': '1600px'
    },
    extend: {
      colors: {
        blue: {
          light: '#455499',
          default: '#162980',
          dark: '#08224E'
        },
        green: {
          default: '#1DB77F',
          dark: '#1FA27F'
        }
      },
      fontFamily: {
				sans: [
					'Roboto',
					'Arial',
					'sans-serif'
				],
			},
    },
  },
  variants: {},
  plugins: [],
  corePlugins: {
		container: false,
	},
};
