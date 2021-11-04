import * as React from 'react';
import { ComponentMeta } from '@storybook/react';

import { FormField } from '../src';

export default {
  title: 'Form/FormField',
  component: FormField,
} as ComponentMeta<typeof FormField>;

export const Text = () => {
  return (
    <>
      <div
        style={{
          height: 600,
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          width: '100%',
          backgroundSize: 'cover',
          backgroundImage:
            'url(http://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg)',
        }}
      >
        <FormField type="email" />
        <FormField type="password" />
        <FormField type="tel" />
        <FormField type="text" />
      </div>
    </>
  );
};
