import React, { InputHTMLAttributes, useState } from "react";
import styled from "styled-components";

import Icon from "../../Icon/Icon";

type Props  = InputHTMLAttributes<HTMLInputElement> & {
	type: "password" | "tel" | "text" | "email";
	label?: [string, React.CSSProperties];
	icon?: keyof typeof Icon;
	onBlur?: () => void;
}

const S = {
	Field: styled.div`
		position: relative;
		width: 100%;
		height: 48px;
	`,
	Input: styled.input`
		width: 100%;
		height: 100%;
		border: none;
		font-size: 13px;
		color: #ffffff;
		padding-left: 54px;
		background: rgba(255, 255, 255, 0.2);
		backdrop-filter: blur(28.7149px);
		border-radius: 8px;
		&:focus {
			outline: none;
		}
	`,
	Icon: {
		position: "absolute",
		top: "50%",
		transform: "translate(0, -50%)",
		marginLeft: 23,
		zIndex: 1,
	} as React.CSSProperties,
};

const FormField = ({ type, icon, label, onBlur = () => {}, ...inputProps }: Props) => {
	const iconResolver = () => {
		switch (type) {
			case "password":
				return "lock";
			case "tel":
				return "mobile";
			case "text":
				return "user";
			case "email":
				return "message";
			default:
				return "user"
		}
	};
	const [labelText, labelStyle] = label || ["", {}];
	const [lock, setLock] = useState(true);
	return (
		<>
			<S.Field>
				<Icon
					size={20}
					style={{ ...S.Icon, cursor: type === "password" ? "pointer" : "default" }}
					icon={icon || (type === "password" && !lock ? "unlock" : iconResolver())}
					onClick={() => type === "password" && setLock(!lock)}
				/>
				<S.Input type={lock ? type : "text"} style={labelStyle} placeholder={labelText} {...inputProps} />
			</S.Field>
		</>
	);
};

export default FormField