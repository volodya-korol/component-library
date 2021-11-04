import { GlobalStyle } from '../src/theme';

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
};
export const decorators = [
  Story => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];
