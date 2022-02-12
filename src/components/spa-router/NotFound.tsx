import React from 'react';

const notFoundStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 64,
  width: '100%',
  height: '100%',
};

const NotFound = () => {
  return <div style={notFoundStyle}>404</div>;
};

export default NotFound;
