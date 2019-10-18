import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = (props) => {
  const {
    title, subtitle, logo, shareUrl, shareText,
  } = props;
  return (
    <section className="info">
      <a href="http://codingartist.io/">
        <img className="logo" src={logo} alt="logo" />
      </a>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <a
        className="twitter-share-button"
        href={shareUrl}
        data-size="large"
      >
        {shareText}
      </a>
    </section>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  shareUrl: PropTypes.string.isRequired,
  shareText: PropTypes.string.isRequired,
};

export default Header;
