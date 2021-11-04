import * as React from 'react';
import styled from 'styled-components';

import { theme } from '../theme';
import { Icon } from '../index';

interface Props {
  img?: string;
  model: 'online' | 'stories' | 'avatar' | 'new';
  shape: 'default' | 'circle';
  size: number;
};

const S = {
  Avatar: styled.div<{
    img?: string;
    size: number;
    shape?: Props['shape'];
    model?: Props['model'];
  }>({}, ({ shape, model, img, size }) => ({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: shape === 'circle' ? '50%' : '16%',
    width: size,
    height: size,
    border:
      model === 'stories'
        ? ((((size * 10) / 48) * 2) / 10) * 2 + 'px solid white'
        : 'none',

    backgroundColor: theme.color.light,
    background: img && `url(${img})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundClip: 'content-box',
    '&::after':
      model === 'online'
        ? {
            content: "' '",
            position: 'absolute',
            right: 0,
            top: 0,
            width: (size * 10) / 48,
            height: (size * 10) / 48,
            border: (((size * 10) / 48) * 2) / 10 + 'px solid white',
            borderRadius: '50%',
            backgroundColor: theme.color.green,
          }
        : model === 'stories'
        ? {
            content: "' '",
            position: 'absolute',
            boxSizing: 'border-box',
            width: size,
            height: size,
            border: (((size * 10) / 48) * 2) / 10 + 'px solid orange' || 'none',
            borderRadius: shape === 'circle' ? '50%' : '16%',
          }
        : '',
  })),
};

const Avatar = ({ img, model, size = 480, shape }: Props) => {
  return model === 'new' ? (
    <S.Avatar shape={shape} size={size}>
      <Icon size={size - 10} fill={theme.color.dark} icon="plus" />
    </S.Avatar>
  ) : (
    <S.Avatar model={model} shape={shape} img={img} size={size} />
  );
};
export default Avatar;
