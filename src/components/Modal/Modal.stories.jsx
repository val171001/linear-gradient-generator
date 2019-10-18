import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, color, boolean } from '@storybook/addon-knobs';
import Modal from './Modal';

storiesOf('Modal', module)
  .addDecorator(withKnobs)
  .add('Simple', () => <Modal text="👍 Linear gradient copied to clipboard." />)
  .add('With bg color', () => <Modal background={color('bg color', '#7062F0')} text="👍 Linear gradient copied to clipboard." />)
  .add('With text color', () => <Modal background={color('bg color', '#7062F0')} color={color('txt color', '#fff')} text="👍 Linear gradient copied to clipboard." />)
  .add('Hide', () => <Modal hide={boolean('hide', false)} text="👍 Linear gradient copied to clipboard." />);
