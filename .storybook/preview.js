export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'Arcana Dark',
    values: [
      {
        name: 'Arcana Dark',
        value: '#181818',
      },
      {
        name: 'Arcana Light',
        value: '#FFFFFF',
      }
    ]
  }
}