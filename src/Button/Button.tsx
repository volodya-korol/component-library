import React, { FC } from 'react';
import styled from 'styled-components';
import { theme } from '..';


interface Props {
  model?: 'default' | 'primary' | 'secondary' | 'light' | 'dark';
  shape?: 'default' | 'circle' | 'round';
  size?: { type: 'small' | 'medium' | 'large'; width?: string | number };
  icon?: [React.ReactNode, 'left' | 'right'];
  type?: 'button' | 'submit' | 'reset';
  ghost?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

type resolverSizes = {
  width: string | number;
  height: number;
  fontSize: number;
  fontWeight: number;
};

type resolverTypes = {
  color: string;
  border: string;
  bgColor: string;
};

const S = {
  Button: styled.button<{
    model: resolverTypes;
    shape: Props['shape'];
    size: resolverSizes;
    ghost: Props['ghost'];
    disabled: Props['disabled'];
  }>(
    {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    },
    ({ model, shape, size, ghost, disabled }) => ({
      height: size.height,
      width: shape === 'round' ? size.height : size.width,
      color: model.color,
      backgroundColor: ghost ? 'transparent' : model.bgColor,
      fontSize: size.fontSize + 'px',
      fontWeight: size.fontWeight,
      border: model.border,
      borderRadius:
        shape === 'circle' ? '23px' : shape === 'round' ? '50%' : 'none',
      cursor: disabled ? 'default' : 'pointer',
      '&::before': {
        display: disabled ? 'inline' : 'none',
        content: `' '`,
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '0px',
        left: '0px',
        background: '#ffffff',
        borderRadius: 'inherit',
        opacity: 0.35,
        pointerEvents: 'none',
      },
    })
  ),
};

const Button: FC<Props> = ({
  model,
  shape = 'default',
  size,
  icon,
  type = 'button',
  ghost = false,
  disabled = false,
  onClick = () => {},
  children,
}): JSX.Element => {
  const resolveSize = (size: Props['size']) => {
    const sizeAliasToValue: {
      [key: string]: resolverSizes;
    } = {
      small: {
        width: size?.width ?? 70,
        height: 27,
        fontSize: 11,
        fontWeight: 400,
      },
      medium: {
        width: size?.width ?? 181,
        height: 40,
        fontSize: 13,
        fontWeight: 500,
      },
      large: {
        width: size?.width ?? 300,
        height: 46,
        fontSize: 15,
        fontWeight: 500,
      },
    };
    return sizeAliasToValue[size?.type || 'large'];
  };
  const resolveType = (type: Props['model']) => {
    const typeAliasToValue: {
      [key: string]: resolverTypes;
    } = {
      default: {
        color: theme.color.primary,
        bgColor: 'white',
        border: '1px solid ' + theme.color.primary,
      },
      primary: { color: 'white', bgColor: theme.color.primary, border: 'none' },
      secondary: { color: theme.color.gray, bgColor: theme.color.light, border: 'none' },
      light: { color: 'black', bgColor: 'white', border: 'none' },
      dark: { color: 'white', bgColor: 'black', border: 'none' },
    };
    return typeAliasToValue[type || 'default'];
  };

  const [iconElement, iconSide] = icon ?? ['', ''];
  const leftIcon = iconSide === 'left' && iconElement;
  const rightIcon = iconSide === 'right' && iconElement;

  return (
    <S.Button
      type={type}
      model={resolveType(model)}
      shape={shape}
      ghost={ghost}
      disabled={disabled}
      size={resolveSize(size)}
      onClick={() => onClick()}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </S.Button>
  );
};

export default Button;
