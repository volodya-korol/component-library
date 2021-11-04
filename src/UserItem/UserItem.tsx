import React, { FC } from 'react';
import styled from 'styled-components';

import { theme } from '../theme';
import Avatar from '../Avatar/Avatar';

type AvatarT = {
  img?: string;
  model: 'online' | 'stories' | 'avatar' | 'new';
  shape: 'default' | 'circle';
  size: number;
};

type Props = {
  avatar: AvatarT;
  name: string;
  description: string;
  line?: 'short' | 'long';
  children?: React.ReactNode;
};

const S = {
  UserItem: styled.div<{ line?: 'short' | 'long' }>({}, ({ line }) => ({
    width: '100%',
    height: line === "long"?60:70,
    padding: '8px 5px 0px 15px',
    position: 'relative',
    display: 'flex',
    '&::after': {
      content: "' '",
      height: 1,
      position: 'absolute',
      bottom: 0,
      backgroundColor: theme.color.light,
      ...(line === "long"
        ? {
            left: '50%',
            transform: 'translate(-50%, 0)',
            width: '90%',
          }
        : { width: '80.4%', right: 0, marginRight: 12 }),
    },
  })),
  Name: styled.p`
    font-weight: ${theme.fontWeights.semiBold};
    font-size: ${theme.fontSizes.m1};
    color: ${theme.color.black};
  `,
  Description: styled.p`
    font-size: ${theme.fontSizes.s2};
    color: ${theme.color.dark};
  `,
  LastMessage: styled.p<{ isNew: boolean }>({}, ({ isNew }) => ({
    fontWeight: theme.fontWeights[isNew ? 'semiBold' : 'normal'],
    fontSize: theme.fontSizes.s1,
    marginTop: 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    color: '#000000',
  })),
};

const UserItem: FC<Props> = ({ avatar, name, description, line, children }) => {
  

  return (
    <S.UserItem line={line}>
      <Avatar {...avatar} />
      <div style={{ marginLeft: 10 }}>
        <S.Name>{name}</S.Name>
        <S.Description>{description}</S.Description>
      </div>
      <div
        style={{
          display: 'flex',

          order: 999,
          marginLeft: 'auto',
          marginRight: 0,
          marginTop: 8
        }}
      >
        {children}
      </div>
    </S.UserItem>
  );
};
export default UserItem;
