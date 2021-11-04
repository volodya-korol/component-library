import * as React from 'react';
import { Meta } from '@storybook/react';

import { Message } from '../src';

export default {
  title: 'User/Message',
  component: Message,
} as Meta;

const Template = args => <Message {...args} />;

export const MessageBlock = Template.bind({});

MessageBlock.args = {
  from: 'hello i from',
  avatar: { model: 'avatar',img: "https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg", shape: 'circle', size: 50 },
  time: 'now',
  isNew: false,
  newCount: 3,
};
