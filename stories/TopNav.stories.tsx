import * as React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { TopNav } from "../src";
import {Icon} from "../src";

export default {
	title: "Bar/TopNav",
	component: TopNav,
	argTypes: {
		background: { control: "color" },
	},
} as ComponentMeta<typeof TopNav>;

const Template: ComponentStory<typeof TopNav> = (args) => (
	<TopNav {...args}>
		<TopNav.Slot side="left">
			<Icon icon="alignCenter" style={{ cursor: "pointer" }} label={["hel5lo", {}]} />
		</TopNav.Slot>
		<TopNav.Slot side="right">
			<Icon style={{ cursor: "pointer" }} icon="cloud" />
			<Icon style={{ cursor: "pointer" }} icon="attach" />
		</TopNav.Slot>
	</TopNav>
);

export const Header = Template.bind({});

Header.args = {
	title: "hello",
	bigTitle: "Title",
	subTitle: "Subtitle",
	background: "white",
};
