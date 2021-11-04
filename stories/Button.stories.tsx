import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button } from '../src';
import mdx from './Button.mdx';

export default {
  title: 'General/Button',
  component: Button,
  parameters: {
    docs: {
      page: mdx,
    },
  },
} as Meta;

const Template: Story = args => (
  <Button {...args}></Button>
);

export const Primary = Template.bind({});

Primary.args = {
  children: 'hello',
  model: 'primary',
  shape: 'circle',
  size: { type: 'large' },
};