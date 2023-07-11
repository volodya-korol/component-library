import React, { InputHTMLAttributes, useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../..';
import { icons } from '../../icons';

const S = {
  Field: styled.div`
    position: relative;
    width: 100%;
    height: 48px;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.100147);
  `,
  Input: styled.input`
    width: 100%;
    height: 100%;
    border: none;
    font-size: 13px;
    color: #ffffff;
    padding-left: 54px;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(28.7149px);
    border-radius: 8px;
    &:focus {
      outline: none;
    }
    &::placeholder {
      font-size: 13px;
    }
  `,
  Icon: {
    position: 'absolute',
    top: '50%',
    transform: 'translate(0, -50%)',
    marginLeft: 23,
    zIndex: 1,
  } as React.CSSProperties,
};

type Props = InputHTMLAttributes<HTMLInputElement> & {
  type: 'password' | 'tel' | 'text' | 'email';
  inputClass?: string;
  icon?: keyof typeof icons;
  color?: string;
};

const FormField = React.forwardRef<HTMLInputElement, Props>(
  ({ type, color, icon, inputClass, ...inputProps }, ref) => {
    const iconResolver = () => {
      switch (type) {
        case 'password':
          return 'lock';
        case 'tel':
          return 'mobile';
        case 'text':
          return 'user';
        case 'email':
          return 'message';
        default:
          return 'user';
      }
    };
    const [lock, setLock] = useState(true);

    return (
      <S.Field>
        <Icon
          size={20}
          fill={color}
          style={{
            position: 'absolute',
            top: '50%',
            transform: 'translate(0, -50%)',
            marginLeft: 23,
            zIndex: 1,
            cursor: type === 'password' ? 'pointer' : 'default',
          }}
          icon={
            icon || (type === 'password' && !lock ? 'unlock' : iconResolver())
          }
          onClick={() => type === 'password' && setLock(!lock)}
        />
        <S.Input
          ref={ref}
          className={inputClass}
          type={lock ? type : 'text'}
          {...inputProps}
        />
      </S.Field>
    );
  }
);

export default FormField;
