import React, { useState } from "react";
import { Meta } from "@storybook/react";
import styled, { keyframes } from "styled-components";

import { icons } from "../src/icons";
import { Icon } from "../src";
import mdx from "./Icon.mdx";

export default {
	title: "General/Icon",
	component: Icon,
	argTypes: {
		fill: { control: "color" },
		size: { control: "number" },
	},
	parameters: {
		docs: {
			page: mdx,
		},
	},
} as Meta;

const copyPopup = keyframes`
	0% {
		opacity: 0;
	}
	50% {
		opacity: 1;
	}
	100% {
		opacity: 0;
		visibility: hidden;
	}
`;

const S = {
	Title: styled.h1`
		font-style: normal;
		font-weight: 600;
		font-size: 28px;
		line-height: 34px;
		text-align: center;
		letter-spacing: 0.36px;
		color: #22242a;
		margin-bottom: 40px;
	`,
	Icons: styled.div`
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		width: 100%;
	`,

	Icon: styled.div`
		padding: 20px 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		&:hover {
			background-color: #f9f9f9;
			cursor: pointer;
		}
	`,
	IconDescription: styled.span`
		font-weight: 300;
		margin-top: 10px;
	`,
	Copied: styled.div`
		position: fixed;
		bottom: 20px;
		left: 50%;
		transform: translate(-50%, 0);
		padding: 10px 20px;
		background-color: #efeff4;
		border-radius: 20px;
		animation: ${copyPopup} ease 4s forwards;
	`,
};

export const AllIcon = (args: keyof typeof Icon) => {
	const [coping, setCoping] = useState(false);

	let copy = (icon: string) => {
		let { size = "medium", fill = "EE8777", block = false, style = {}, label = ["", {}] } = args;

		const copyString = `<Icon icon='${icon}' size={${size}} fill={'${fill}'}  block={${block}} style={${JSON.stringify(
			style
		)}} label={${JSON.stringify(label)}}  />`;

		navigator.clipboard.writeText(copyString);

		setCoping(true);
		setTimeout(() => {
			setCoping(false);
		}, 4000);
	};

	return (
		<div style={{ padding: 40 }}>
			<S.Title>Icon count {Object.keys(icons).length}</S.Title>
			<S.Icons>
				{Object.keys(icons).map((m) => {
					return (
						<S.Icon  onClick={() => copy(m)} key={m}>
							<Icon size={40} {...args} icon={m as keyof typeof icons} />
							<S.IconDescription>{m}</S.IconDescription>
						</S.Icon>
					);
				})}
			</S.Icons>
			{coping && <S.Copied>Copied</S.Copied>}
		</div>
	);
};

AllIcon.args = {};
