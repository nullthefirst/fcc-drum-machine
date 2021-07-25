import React from 'react';

function DisplayText(props) {
  return (
    <div>
      <p style={{ color: '#f0f0f0', textAlign: 'center' }}>{props.title}</p>
    </div>
  );
}

export default DisplayText;
