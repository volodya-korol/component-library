import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import { Footer, Icon } from '../src';

export default {
  title: 'Bar/Footer',
  component: Footer,
  argTypes: {
    activeColor: { control: { type: 'color' } },
    defaultColor: { control: { type: 'color' } },
  },
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = args => (
  <Footer {...args}>
    <Footer.Slot>
      <Icon style={{ cursor: 'pointer' }} icon={'activity'} />
    </Footer.Slot>
    <Footer.Slot>
      <Icon style={{ cursor: 'pointer' }} icon={'activity'} />
    </Footer.Slot>
    <Footer.Slot>
      <Icon style={{ cursor: 'pointer' }} icon={'activity'} />
    </Footer.Slot>
    <Footer.Slot>
      <Icon style={{ cursor: 'pointer' }} icon={'activity'} />
    </Footer.Slot>
    <Footer.Slot>
      <a href="helo">
        <Icon style={{ cursor: 'pointer' }} icon={'back'} />
      </a>
    </Footer.Slot>
    <Footer.Slot>
      <Icon style={{ cursor: 'pointer' }} icon={'copy'} />
      1235
    </Footer.Slot>
    <Footer.Slot>
      <Icon style={{ cursor: 'pointer' }} icon={'eye'} />
      1237
    </Footer.Slot>
  </Footer>
);

export const Navigation = Template.bind({});