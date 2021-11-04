import React, { InputHTMLAttributes, useState } from "react";

import { theme } from "../../theme";
import Icon  from "../../Icon/Icon";

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> & {
	name: string;
	onChange: (event: boolean) => void;
}

const CheckBox = ({ onChange, name, ...props }: Props) => {
	const [hover, setHover] = useState(false);
	const [checked, setChecked] = useState(false);
	return (
		<label style={{ display: "inline-block" }} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
			<input
				id={name}
				name={name}
				style={{ display: "none" }}
				type="checkbox"
				onChange={() => {
					onChange(!checked);
					setChecked(!checked);
					setHover(false);
				}}
				checked={checked}
				{...props}
			/>
			<span>
				{checked ? (
					<Icon icon="CheckBoxActive" />
				) : hover ? (
					<Icon icon="CheckBox" />
				) : (
					<Icon fill={theme.color.gray} icon="CheckBox" />
				)}
			</span>
		</label>
	);
};
export default CheckBox;
