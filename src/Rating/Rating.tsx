import React, { useState } from "react";

import { theme } from "../theme";
import { icons } from "../icons";
import  Icon  from "../Icon/Icon";

interface Props {
	rating?: 0 | 1 | 2 | 3 | 4 | 5;
	icon?: keyof typeof icons;
	activeColor?: string;
	defaultColor?: string;
	hoverColor?: string;
	size?: "small" | "medium" | "large" | number;
	onClick?: (index: number) => void;
}

const Rating = ({
	hoverColor,
	onClick,
	rating = 0,
	icon = "star",
	size = "large",
	activeColor = theme.color.primary,
	defaultColor = theme.color.light,
}: Props) => {
	const [ratingValue, setRatingValue] = useState(Number(rating));
	const [hoverValue, setHoverValue] = useState(0);
	return (
		<>
			{Array.from({ length: 5 }, (_, i) => (
				<span
					key={i}
					style={{ cursor: "pointer", width: size, height: size }}
					onClick={() => {
						onClick && onClick(i + 1);
						setRatingValue(i + 1);
						setHoverValue(0)
					}}
					onMouseEnter={() => setHoverValue(i + 1)}
					onMouseLeave={() => setHoverValue(0)}>
					<Icon
						icon={icon}
						size={size}
						fill={
							hoverValue && hoverValue > i
								? hoverColor || activeColor + "99"
								: !hoverValue && ratingValue > i
								? activeColor
								: defaultColor
						}
					/>
				</span>
			))}
		</>
	);
};

export default Rating