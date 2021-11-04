import * as React from 'react';
import styled from "styled-components";
import { theme } from "../../theme";

type Props = {
	title?: string;
	subTitle?: string;
	bigTitle?: string;
	children?: React.ReactNode;
	background?: string;
}

const S = {
	TopNav: styled.div<{ background: string }>(
		{
			padding: "10px 5px 5px",
			width: "100%",
			minHeight: "55px",
			height: "auto",
			borderBottom: "1px solid #efeff4",
		},
		({ background }) => ({
			background: background,
		})
	),
	Nav: styled.div<{}>({
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
	}),
	TitleWraper: styled.div({
		left: "50%",
		transform: "translate(-50%, 0)",
		position: "absolute",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	}),
	Title: styled.p({
		...theme.variants.text.headline,
		textAlign: "center",
	}),
	TitleWithSubTitle: styled.p({
		fontFamily: "SF Pro Text",
		fontWeight: theme.fontWeights.normal,
		fontSize: theme.fontSizes.m3,
		textAlign: "center",
	}),
	SubTitle: styled.p({
		...theme.variants.text.subtitle,
		color: theme.color.dark,
		textAlign: "center",
	}),
	BigTitle: styled.h1({
		...theme.variants.text.h1,
		margin: "11px 11px 0px",
	}),
};

const Slot: React.FC<{
	side: "left" | "right";
}> = () => null;

const TopNav = ({ title, bigTitle, subTitle, background = "none", children }: Props) => {
	const childrenArray = (children as unknown) as React.ReactElement[];
	const leftActionsSlot = childrenArray.find((child) => child?.props?.side === "left");
	const rightActionsSlot = childrenArray.find((child) => child?.props?.side === "right");

	return (
		<S.TopNav background={background}>
			<S.Nav>
				<div style={{display: "flex", alignItems: 'center'}}>{leftActionsSlot?.props?.children}</div>
				<S.TitleWraper>
					{subTitle ? <S.TitleWithSubTitle>{title}</S.TitleWithSubTitle> : <S.Title>{title}</S.Title>}
					<S.SubTitle>{subTitle}</S.SubTitle>
				</S.TitleWraper>
				<div style={{ display: "flex", gap: "0px 10px", marginRight: 10 }}>{rightActionsSlot?.props?.children}</div>
			</S.Nav>
			<S.BigTitle>{bigTitle}</S.BigTitle>
		</S.TopNav>
	);
};

TopNav.Slot = Slot;

export default TopNav;
