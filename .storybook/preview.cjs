import '../global.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    values: [
      { name: 'white', value: '#ffffff' },
      { name: 'light-grey', value: '#F4F4F4' },
      { name: 'silver', value: '#CCCCCC' },
      { name: 'aluminium', value: '#EBEBEB' },
      { name: 'anthracite', value: '#666666' },
      { name: 'dark-grey', value: '#333333' },
      { name: 'midnight', value: '#222222' },
      { name: 'black', value: '#000000' },
      { name: 'primary', value: '#e60000' },
    ],
  },
  viewports: {
    mobile: {
      name: 'mobile - 360px',
      styles: {
        width: '360px',
        height: '480px',
      },
    },
    tablet: {
      name: 'tablet - 769px',
      styles: {
        width: '769px',
        height: '854px',
      },
    },
    desktop: {
      name: 'desktop - 1025px',
      styles: {
        width: '1025px',
        height: '768px',
      },
    },
    wide: {
      name: 'wide - 1441px',
      styles: {
        width: '1441px',
        height: '1080px',
      },
    },
    designToMobile: {
      name: 'Design To Mobile 360px',
      styles: {
        width: '360px',
        height: '640px',
      },
    },
    designToTablet: {
      name: 'Design To Tablet 768px',
      styles: {
        width: '768px',
        height: '1024px',
      },
    },
    designToDesktop: {
      name: 'Design To Desktop 1280px',
      styles: {
        width: '1280px',
        height: '1980',
      },
    },
  },
}
