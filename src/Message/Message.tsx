import React from 'react';
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
  from: string;
  time: string;
  isNew: boolean;
  newCount?: number;
};

const S = {
  Message: styled.div`
    width: 100%;
    height: 60px;
    padding: 8px 5px 12px 5px;
    position: relative;
    display: grid;
    grid-template-columns: 65px 1fr;
  `,
  Constent: styled.div`
    position: relative;
    padding: 7px 5px 15px 0px;
    display: grid;
    grid-template-columns: 1fr 60px;
    border-bottom: 1px solid #efeff4;
    text-decoration: none;
  `,
  Name: styled.p`
    font-weight: ${theme.fontWeights.semiBold};
    font-size: ${theme.fontSizes.s1};
    color: ${theme.color.primary};
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
  Inform: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  `,
  Date: styled.p`
    font-size: ${theme.fontSizes.s3};
    text-align: center;
    color: #8a8a8f;
  `,
  NewMessageCount: styled.div`
    margin-top: 7px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${theme.color.primary};
    display: grid;
    place-items: center;
    font-size: ${theme.fontSizes.s3};
    text-align: center;
    color: ${theme.color.white};
  `,
};

const Message = ({ from, avatar, time, isNew, newCount }: Props) => {
  return (
    <S.Message>
      <div>
        <Avatar {...avatar} />
      </div>
      <S.Constent>
        <div>
          <S.Name>{from}</S.Name>
          <S.LastMessage isNew={isNew}>
            You know, I’ve had some beers just sitting in my fridou know, I’ve
            had some beers just sitting in my fridge.
          </S.LastMessage>
        </div>
        <S.Inform>
          <S.Date>{time}</S.Date>
          {isNew && (
            <S.NewMessageCount>
              {newCount}
            </S.NewMessageCount>
          )}
        </S.Inform>
      </S.Constent>
    </S.Message>
  );
};
export default Message;
