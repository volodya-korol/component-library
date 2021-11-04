import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, UserItem } from '../src';

export default {
  title: 'User/UserItem',
  component: UserItem
} as Meta;

export let Item = () => {
  return (
    <UserItem
      description="10 mutual friends"
      name="Mary Olsen"
      line="long"
      avatar={{
        model: 'stories',
        shape: 'circle',
        size: 36,
        img: 'https://pngimg.com/uploads/pokemon/pokemon_PNG129.png',
      }}
    >
      <Button model="primary" size={{ type: 'small' }} shape="circle">
        Follow
      </Button>
    </UserItem>
  );
};
