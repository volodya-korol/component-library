import React, { useState } from "react";
import { ComponentMeta } from "@storybook/react";

import {RadioButton} from "../src";

export default {
	title: "Form/RadioButton",
	component: RadioButton,
} as ComponentMeta<typeof RadioButton>;

export const Radio = () => {
	const [value, setValue] = useState("1");

	function chengeValue(e: React.ChangeEvent<HTMLInputElement>) {
		setValue(e.target.value);
	}
	
	return (
		<>
			<RadioButton name="hello1" value="1" checked={value === "1" ? true : false} onChange={chengeValue} />
			<RadioButton name="hello2" value="2" checked={value === "2" ? true : false} onChange={chengeValue} />
			<RadioButton name="hello3" value="3" checked={value === "3" ? true : false} onChange={chengeValue} />
		</>
	);
};
