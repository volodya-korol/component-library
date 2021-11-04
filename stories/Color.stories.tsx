import React from 'react';
import { Story, Meta } from '@storybook/react';
import { theme } from '../';

export default {
  title: 'General/Color',
  parameters: {
    previewTabs: {
      'storybook/docs/panel': {
        hidden: true,
      },
    },
	},
};

export const Color = () => {
  return (
    <div style={{ padding: '50px 100px' }}>
      <h1 style={{ marginBottom: 60 }}>Colors</h1>
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        {Object.entries(theme.color).map(m => {
          return (
            <div style={{ display: 'flex' }} key={m[0]}>
              <div
                style={{
                  width: '400px',
                  height: '100px',
                  fontSize: theme.fontSizes.m3,
                  fontWeight: 300
                }}
              >
                <p>theme.color.{m[0]}</p>
                <p>{m[1]}</p>
              </div>
              <div
                style={{
                  width: '100%',
                  height: '40px',
                  background: m[1],
                  border: '1px solid black',
                }}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
