import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = (props) => {
  const {
    color1, color2, angle, clickAction,
  } = props;
  const gradient = `linear-gradient(${angle}deg, ${color1}, ${color2})`;
  const hook = () => clickAction(gradient);
  return (
    <div className="card" onClick={hook} onKeyPress={hook} role="button" tabIndex="0">
      <div className="gradient" style={{ background: gradient }} />
      <div className="card-info">
        <div className="color-1" style={{ color: color1 }}>
          {color1}
        </div>
        <div className="color-2" style={{ color: color2 }}>
          {color2}
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  color1: PropTypes.string.isRequired,
  color2: PropTypes.string.isRequired,
  angle: PropTypes.number,
  clickAction: PropTypes.func,
};

Card.defaultProps = {
  angle: 45,
  clickAction: (text) => {
    navigator.clipboard.writeText(text);
  },
};

export default Card;
