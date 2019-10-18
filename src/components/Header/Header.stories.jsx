import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Header from './Header';

storiesOf('Page header', module)
  .addDecorator(withKnobs)
  .addParameters({
    backgrounds: [
      { name: 'day', value: '#fff', default: true },
      { name: 'night', value: '#121212' },
    ],
  })
  .add('Simple', () => (
    <Header
      title="Title"
      subtitle="Subtitle"
      shareUrl="https://twitter.com"
      shareText="tweet!"
      logo="https://s3-us-west-2.amazonaws.com/s.cdpn.io/827672/ca_logo.svg"
    />
  ))
  .add('custom', () => (
    <Header
      title={text('Title', 'Title')}
      subtitle={text('Subtitle', 'Subtitle')}
      shareUrl={text('Share url', 'https://twitter.com')}
      shareText={text('Share label', 'tweet!')}
      logo={text('logo src', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/827672/ca_logo.svg')}
    />
  ));
