import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

const Modal = (props) => {
  const {
    text, background, color, hide,
  } = props;
  return (!hide
    ? (
      <div id="note" v-if="showNote" style={{ background, color }}>
        <i className="icon fa fa-thumbs-o-up" aria-hidden="true" />
        {' '}
        {text}
      </div>
    ) : null
  );
};

Modal.propTypes = {
  text: PropTypes.string.isRequired,
  background: PropTypes.string,
  color: PropTypes.string,
  hide: PropTypes.bool,
};

Modal.defaultProps = {
  background: '#1ABC9C',
  color: 'white',
  hide: false,
};
export default Modal;
