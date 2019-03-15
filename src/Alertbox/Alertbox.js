import React from 'react';
import PropTypes from 'prop-types';

import './Alertbox.scss';

// the img 👇is a url-encoded version of alert.svg
export default function Alertbox({ children = [] }) {
  return children.length > 0 ? (
    <div className="dfo-alertbox">
      <img
        className="dfo-alertbox__icon"
        src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 43 40' style='enable-background:new 0 0 43 40;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23FFFFFF;%7D%0A%3C/style%3E%3Cg%3E%3Cpath class='st0' d='M28.9,13.6c-1.8-1.8-4.3-2.9-6.9-2.9c-2.6,0-5.1,1-6.9,2.9c-1.8,1.8-2.9,4.3-2.9,6.9c0,2.6,1,5.1,2.9,6.9 c1.8,1.8,4.3,2.9,6.9,2.9c2.6,0,5.1-1,6.9-2.9c1.8-1.8,2.9-4.3,2.9-6.9C31.8,17.9,30.7,15.4,28.9,13.6z M22,28.8 c-4.5,0-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2S26.5,28.8,22,28.8z'/%3E%3Cpath class='st0' d='M22,13.8c-0.4,0-1,0.3-1,0.8v8c0,0.4,0.6,0.8,1,0.8s1-0.3,1-0.8v-8C23,14.1,22.4,13.8,22,13.8z'/%3E%3C/g%3E%3Cpath class='st0' d='M22,24.8c-0.4,0-1,0.3-1,0.8v1c0,0.4,0.6,0.8,1,0.8s1-0.3,1-0.8v-1C23,25.1,22.4,24.8,22,24.8z'/%3E%3C/svg%3E%0A"
        alt="varsel icon"
      />
      <div className="dfo-alertbox__content">{children}</div>
    </div>
  ) : null;
}

Alertbox.propTypes = {
  children: PropTypes.any.isRequired,
};
