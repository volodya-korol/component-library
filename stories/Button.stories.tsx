import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Button } from '../src';
import mdx from './Button.mdx';

export default {
  title: 'General/Button',
  component: Button,
  parameters: {
    docs: {
      page: mdx,
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Mrr9S9IUB2O3rKFOSnxzsF/Untitled?type=design&node-id=0%3A1&mode=design&t=w9n3KkVThTVhVlV1-1',
    },
  },
} as Meta;

const Template: Story = args => <Button {...args}></Button>;

export const Primary = Template.bind({});

Primary.args = {
  children: 'hello',
  model: 'primary',
  shape: 'circle',
  size: { type: 'large' },
};
