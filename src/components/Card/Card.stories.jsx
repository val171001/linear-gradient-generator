import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, color } from '@storybook/addon-knobs';
import { withActions, action } from '@storybook/addon-actions';
import Card from './Card';

storiesOf('Gradient card', module)
  .addDecorator(withKnobs)
  .addDecorator(withActions('click'))
  .addParameters({
    backgrounds: [
      { name: 'day', value: '#fff', default: true },
      { name: 'night', value: '#121212' },
    ],
  })
  .add('simple', () => <Card color1="#30496B" color2="#30B8D2" />)
  .add('With custom angle', () => <Card color1="#FBCA88" color2="#EF69AD" angle={number('angle', 45)} />)
  .add('With custom color', () => <Card color1={color('color 1', '#7062F0')} color2={color('color 2', '#ABE5E6')} angle={number('angle', 45)} />)
  .add('Custom on click action', () => <Card color1="#30496B" color2="#30B8D2" onClick={action('button-click')} />);
