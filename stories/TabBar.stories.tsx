import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TabBar } from '../src';
import { Icon } from '../src';

export default {
  title: 'Bar/TabBar',
  component: TabBar,
  argTypes: {
    activeColor: { control: { type: 'color' } },
    defaultColor: { control: { type: 'color' } },
  },
} as ComponentMeta<typeof TabBar>;

const Template: ComponentStory<typeof TabBar> = args => (
  <TabBar {...args}>
    <TabBar.Slot>
      <Icon style={{ cursor: 'pointer' }} icon={'activity'} />
      123
    </TabBar.Slot>
    <TabBar.Slot>
      <Icon style={{ cursor: 'pointer' }} icon={'back'} />
      123
    </TabBar.Slot>
    <TabBar.Slot>
      <Icon style={{ cursor: 'pointer' }} icon={'copy'} />
      123
    </TabBar.Slot>
    <TabBar.Slot>
      <Icon style={{ cursor: 'pointer' }} icon={'eye'} />
      123
    </TabBar.Slot>
  </TabBar>
);

export const Navigation = Template.bind({});
