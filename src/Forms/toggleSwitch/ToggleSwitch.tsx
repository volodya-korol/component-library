import React, { useState } from "react";
import styled from "styled-components";

import { theme } from "../../theme";

interface Props {
	id: string;
	blocked?: boolean;
	activeDefault?: boolean;
	activeColor?: string;
	disabledColor?: string;
	size?: "small" | "medium" | "large";
}

type resolverSizes = {
	width: number;
	height: number;
	pointSize: number;
	pointMargin: number;
	pointStretch: number;
};

const S = {
	Label: styled.label(({}),({disabledColor,blocked,size}:{ disabledColor: string; blocked: boolean; size: resolverSizes }) => ({
		cursor: 'pointer',
		textIndent: '-9999px',
		width: size.width,
		height: size.height,
		background: blocked ? disabledColor + "99": disabledColor,
		display: 'block',
		borderRadius: '20px',
		position: 'relative',
		'&:after': {
			content: '""',
			position: 'absolute',
			top: size.pointMargin,
			left: size.pointMargin,
			width: size.pointSize,
			height: size.pointSize,
			background: '#fff',
			borderRadius: '16px',
			transition: '0.3s',
		},
		'&:active:after': {
			width: size.pointStretch,
		}

	})),
	Input: styled.input.attrs({ type: "checkbox" })<{ activeColor: string; blocked: boolean }>`
		display: none;
		&:checked + label {
			background: ${(props) => (props.blocked ? props.activeColor + "99" : props.activeColor)};
		}
		&:checked + label:after {
			left: calc(100% - 2px);
			transform: translateX(-100%);
		}
	`,
};

const ToggleSwitch = ({
	id,
	size,
	activeDefault = false,
	activeColor = theme.color.primary,
	disabledColor = theme.color.light,
	blocked = false,
}: Props) => {
	const resolveSize = (size: Props["size"]) => {
		const sizeAliasToValue: {
			[key: string]: resolverSizes;
		} = {
			small: { width: 40, height: 24, pointSize: 20.8, pointMargin:1.6 , pointStretch: 24 },
			medium: { width: 50, height: 30, pointSize: 26, pointMargin: 2, pointStretch: 30 },
			large: { width: 60, height: 36, pointSize: 31.2, pointMargin: 2.4, pointStretch: 36 },
		};
		return sizeAliasToValue[size || "medium"];
	};

	const [isToggled, setIsToggled] = useState(activeDefault);
	const onToggle = () => setIsToggled((pastIsToggled) => (blocked ? pastIsToggled : !pastIsToggled));
	
	return (
		<div style={{ display: "block" }}>
			<S.Input
				blocked={blocked}
				checked={isToggled}
				onChange={onToggle}
				activeColor={activeColor}
				type="checkbox"
				id={id}
			/>
			<S.Label size={resolveSize(size)} blocked={blocked} disabledColor={disabledColor} htmlFor={id} />
		</div>
	);
};

export default ToggleSwitch