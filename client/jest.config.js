module.exports = {
  verbose: true,
  testRegex: '(/__mocks__/.*|(\\.|/)(test))\\.[jt]sx?$',
  moduleNameMapper: {
    '^.*\\.(jpg|JPG|jpeg|JPEG|gif|GIF|png|PNG|less|LESS|css|CSS|scss|SCSS|sass|SASS|styl|ttf|woff|woff2)$':
      'identity-obj-proxy',
  },
};
