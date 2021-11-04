import * as React from 'react';
import { ComponentMeta } from '@storybook/react';

import { CheckBox } from '../src';

export default {
  title: 'Form/CheckBox',
  component: CheckBox,
} as ComponentMeta<typeof CheckBox>;

export const Check = () => {
  return (
    <>
      <CheckBox name="hello" onChange={value => {}} />
      <CheckBox name="hello1" onChange={value => {}} />
      <CheckBox name="hello2" onChange={value => {}} />
    </>
  );
};
