import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

import { theme } from '../../theme';
import Icon from '../../Icon/Icon';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  iconFill: string;
  onClickSearch: () => void;
  onClickMicro: () => void;
};

const S = {
  Search: styled.div`
    position: relative;
    width: 100%;
    height: 36px;
  `,
  Input: styled.input`
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 10px;
    padding: 0 32px;
    background-color: ${theme.color.light};
    &,
    &::placeholder {
      font-size: 17px;
      line-height: 22px;
      color: ${theme.color.dark};
    }
    &:focus {
      outline: none;
      color: ${theme.color.darker};
      box-shadow: 0px 2px 5px rgba(44, 44, 44, 0.03);
    }
  `,
  Icon: {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
  } as React.CSSProperties,
};

const Search = ({
  iconFill,
  onClickSearch = () => {},
  onClickMicro = () => {},
  ...inputProps
}: Props) => {
  return (
    <S.Search>
      <Icon
        fill={iconFill || theme.color.primary}
        onClick={() => {
          onClickSearch();
        }}
        style={{ ...S.Icon, marginLeft: 10, cursor: 'pointer' }}
        icon="search"
        size={16}
      />
      <Icon
        fill={iconFill || theme.color.primary}
        onClick={() => {
          onClickMicro();
        }}
        style={{ ...S.Icon, right: 0, marginRight: 8, cursor: 'pointer' }}
        icon="mic"
        size={18}
      />
      <S.Input type="text" placeholder={'search'} {...inputProps} />
    </S.Search>
  );
};

export default Search;
