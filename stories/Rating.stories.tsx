import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { Rating } from '../src';

export default {
  title: 'User/Rating',
  component: Rating,
  argTypes: {
    size: { options: ['small', 'medium', 'large'], control: { type: 'radio' } },
  },
} as Meta;

const Template: Story = args => <Rating {...args} />;

export const Active = Template.bind({});
Active.args = {};
