import * as React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";

import {Search} from "../src";

export default {
	title: "Form/Search",
	component: Search,
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => <Search {...args}></Search>;

export const SearchInp = Template.bind({});

SearchInp.args = {
	onClickSearch: () => {},
	placeholder: "hello"
};
