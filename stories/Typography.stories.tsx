import { ComponentStory } from "@storybook/react";

import { theme } from "../";
export default {
	title: "General/Typography",
	argTypes: {
		position: {
			control: {
				type: "select",
			},
			options: ["left", "center", "right"],
		},
		weight: {
			control: {
				type: "select",
			},
			options: Object.keys(theme.fontWeights),
		},
	},
	parameters:{
		previewTabs: {
			'storybook/docs/panel': {
			  hidden: true,
			},
		  },
	}
};
const Typographyy: React.FC<{
	title: string;
	position: "left" | "center" | "right";
	weight: keyof typeof theme.fontWeights;
}> = ({ title, position, weight }) => {
	return (
		<div style={{ margin: "50px 100px", padding: 10 }}>
			<div style={{ display: "flex", flexDirection: "column", margin: "0 0 14px 0" }}>
				<h1 style={{ fontSize: "32px", paddingBottom: " 10px" }}>Typography</h1>
				<p style={{ fontSize: "14px", padding: "14px 0" }}>
					<strong>Font: </strong>
					<span style={{ color: "rgba(51, 51, 51, 0.6)" }}>SF Pro Text</span>
				</p>
				<p style={{ fontSize: "14px" }}>
					<strong>Weight: </strong>
					<span style={{ color: "rgba(51, 51, 51, 0.6)" }}>
						{Object.entries(theme.fontWeights).map((m) => `${m[0]} (${m[1]}), `)}
					</span>
				</p>
			</div>
			<div style={{ padding: 10, border: "1px solid rgba(0, 0, 0, 0.1)" }}>
				{Object.entries(theme.fontSizes)
					.reverse()
					.map((m) => {
						return (
							<div key={m[1]} style={{ paddingBottom: 15, display: "flex", alignItems: "center" }}>
								<div
									style={{
										width: "20px",
										marginRight: "30px",
										fontSize: "12px",
										color: "rgba(51, 51, 51, 0.6)",
									}}>
									{m[0]}
								</div>
								<div
									style={{
										width: "20px",
										marginRight: "50px",
										fontSize: "12px",
										color: "rgba(51, 51, 51, 0.6)",
									}}>
									{m[1]}
								</div>
								<div
									style={{
										width: "100%",
										fontSize: m[1],
										fontWeight: theme.fontWeights[weight],
										textAlign: position,
									}}>
									<div>{title}</div>
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
};

const Template: ComponentStory<typeof Typographyy> = (args) => <Typographyy {...args} />;

export const Typography = Template.bind({});
Typography.args = {
	title: "Was he a beast if music could move him so?",
	position: "left",
	weight: "medium",
};
