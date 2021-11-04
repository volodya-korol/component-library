import React, { useState } from 'react';

import { theme } from '../../theme';
import Icon from '../../Icon/Icon';

type Props = {
  checked: boolean;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const RadioButton = ({ onChange, checked, value, name = 'radio' }: Props) => {
  const [hover, setHover] = useState(false);
  return (
    <label
      style={{ display: 'inline-block' }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <input
        value={value}
        name={name}
        checked={checked}
        style={{ display: 'none' }}
        type="radio"
        onChange={e => {
          onChange(e);
          setHover(false);
        }}
      />
      <span>
        {checked ? (
          <Icon icon="radioButtonActive" />
        ) : hover ? (
          <Icon icon="radioButton" />
        ) : (
          <Icon fill={theme.color.gray} icon="radioButton" />
        )}
      </span>
    </label>
  );
};

export default RadioButton;
