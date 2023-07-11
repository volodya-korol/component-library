import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as React from 'react';
import { Header, Icon } from "../src";

export default {
	title: "Bar/Header",
	component: Header,
	argTypes: {
		background: { control: "color" },
	},
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => (
	<Header {...args}>
		<Header.Slot side="left">
			<Icon icon="alignCenter" style={{ cursor: "pointer" }} label={["hel5lo", {}]} />
		</Header.Slot>
		<Header.Slot side="right">
			<Icon icon="alignCenter" style={{ cursor: "pointer" }} label={["hel5lo", {}]} />
		</Header.Slot>
	</Header>
);

export const Head = Template.bind({});

Head.args = {
	title: "hello",
	bigTitle: "Title",
	subTitle: "Subtitle",
	background: "white",
};
