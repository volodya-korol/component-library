import * as React from 'react';
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Avatar } from "../src";

export default {
	title: "User/Avatar",
	component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Active = Template.bind({});
Active.args = {
	img: "https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg",
	model: "avatar",
	shape: "default",
	size: 220,
	borderColor: "black"
};
