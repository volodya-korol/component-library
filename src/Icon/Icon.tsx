import React from 'react';
import styled from 'styled-components';
import { theme } from '..';

import { icons } from '../icons';

type Props = {
  icon: keyof typeof icons;
  fill?: string;
  style?: React.CSSProperties;
  size?: 'small' | 'medium' | 'large' | number;
  label?: [string | number, React.CSSProperties];
  onClick?: () => void;
};

const S = {
  Wraper: styled.div({}, ({}) => ({
    display: 'flex;',
    alignItems: 'center',
  })),
  Svg: styled.svg<{ size: number }>(
    {
      verticalAlign: 'middle',
      shapeRendering: 'inherit',
      margin: '0 5px',
    },
    ({ size }) => ({
      width: size,
      height: size,
    })
  ),
  Label: styled.span<{ color: string }>(
    {
      fontFamily: 'SF Pro Text',
      fontSize: '16px',
      lineHeight: '21px',
      letterSpacing: '-0.32px',
    },
    ({ color }) => ({
      color: color,
    })
  ),
};

const Icon: React.FC<React.HTMLAttributes<HTMLDivElement> & Props> = ({
  icon,
  size = 'medium',
  fill = theme.color.primary,
  style,
  label,
  onClick = () => {},
  ...props
}) => {
  const resolveSize = (size: 'small' | 'medium' | 'large' | number) => {
    const sizeAliasToValue: { [key: string]: number } = {
      small: 16,
      medium: 24,
      large: 32,
    };
    return sizeAliasToValue[size] ?? size;
  };

  const [labelText, labelStyle] = label || ['', {}];
  const cursor = style?.cursor || 'default';

  return (
    <S.Wraper {...props}>
      <S.Svg
        style={style}
        fill={fill}
        size={resolveSize(size)}
        clipRule={icons[icon].clipRule}
        fillRule={icons[icon].fillRule}
        onClick={() => onClick()}
        viewBox="0 0 26 26"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={icons[icon]['d']} />
      </S.Svg>
      {label && (
        <S.Label
          onClick={() => onClick()}
          color={fill}
          style={{ cursor: cursor, ...labelStyle }}
        >
          {labelText}
        </S.Label>
      )}
    </S.Wraper>
  );
};

export default Icon;
