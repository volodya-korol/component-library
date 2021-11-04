import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { ToggleSwitch } from '../src';

export default {
  title: 'Form/ToggleSwitch',
  component: ToggleSwitch,
} as Meta;

const Template: Story = args => <ToggleSwitch id={''} {...args} />;

export const Active = Template.bind({});
Active.args = {
  id: '1',
  activeDefault: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  id: '2',
  activeDefault: false,
};
export const Blocked = Template.bind({});
Blocked.args = {
  id: '3',
  activeDefault: true,
  blocked: true,
};
