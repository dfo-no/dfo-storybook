import React from "react";
import PropTypes from "prop-types";

export default function LinkListSymbol({ external, download, light }) {
  const fill = light ? "#ffffff" : "#032b4a";
  if (external) {
    return (
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 22 22"
      >
        <g transform="translate(400 2160)">
          <g>
            <path
              style={{ fill }}
              d="M-400-2142.6v-12.9c0-0.9,0.7-1.6,1.6-1.6h10.8c0.9,0,1.6,0.7,1.6,1.6v4.3c0,0.3-0.2,0.5-0.5,0.5
              c-0.3,0-0.5-0.2-0.5-0.5v-4.3c0-0.3-0.2-0.5-0.5-0.5h-10.8c-0.3,0-0.5,0.2-0.5,0.5v12.9c0,0.3,0.2,0.5,0.5,0.5h10.8
              c0.3,0,0.5-0.2,0.5-0.5v-4.3c0-0.3,0.2-0.5,0.5-0.5c0.3,0,0.5,0.2,0.5,0.5v4.3c0,0.9-0.7,1.6-1.6,1.6h-10.8
              C-399.3-2141-400-2141.7-400-2142.6z"
            />
            <path
              style={{ fill }}
              d="M-382.4-2145.5l3.2-3.2c0.2-0.2,0.2-0.6,0-0.8l-3.2-3.2c-0.2-0.2-0.6-0.2-0.8,0
                c-0.2,0.2-0.2,0.6,0,0.8l2.3,2.3H-393c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5h12.2l-2.3,2.3c-0.1,0.1-0.2,0.2-0.2,0.4
                s0.1,0.3,0.2,0.4C-382.9-2145.3-382.6-2145.3-382.4-2145.5z"
            />
          </g>
        </g>
      </svg>
    );
  }

  if (download) {
    return (
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="22px"
        height="22px"
        viewBox="0 0 22 22"
      >
        <g transform="translate(40 2160)">
          <path
            style={{ fill }}
            d="M-25.1-2149.7c-0.2-0.2-0.5-0.2-0.7,0l-4.1,4.1v-11.3c0-0.3-0.2-0.5-0.5-0.5c-0.3,0-0.5,0.2-0.5,0.5
            v11.3l-4.1-4.1c-0.2-0.2-0.5-0.2-0.7,0c-0.2,0.2-0.2,0.5,0,0.7l5,5c0.1,0.1,0.2,0.1,0.4,0.1c0.1,0,0.3,0,0.4-0.1l5-5
            C-25-2149.2-25-2149.5-25.1-2149.7L-25.1-2149.7z"
          />
          <path
            style={{ fill }}
            d="M-22.5-2140.3h-16c-0.8,0-1.5-0.7-1.5-1.5v-2c0-0.3,0.2-0.5,0.5-0.5c0.3,0,0.5,0.2,0.5,0.5v2
            c0,0.3,0.2,0.5,0.5,0.5h16c0.3,0,0.5-0.2,0.5-0.5v-2c0-0.3,0.2-0.5,0.5-0.5c0.3,0,0.5,0.2,0.5,0.5v2
            C-21-2141-21.7-2140.3-22.5-2140.3z"
          />
        </g>
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
    >
      <g transform="translate(400 2360)">
        <path
          style={{ fill }}
          d="M-381.6-2349.4l-6-6c-0.2-0.2-0.5-0.2-0.7,0c-0.2,0.2-0.2,0.5,0,0.7l5.1,5.1h-16.3
          c-0.3,0-0.5,0.2-0.5,0.5s0.2,0.5,0.5,0.5h16.3l-5.1,5.1c-0.2,0.2-0.2,0.5,0,0.7c0.1,0.1,0.2,0.1,0.4,0.1c0.1,0,0.3,0,0.4-0.1l6-6
          C-381.5-2348.8-381.5-2349.2-381.6-2349.4L-381.6-2349.4z"
        />
      </g>
    </svg>
  );
}

LinkListSymbol.propTypes = {
  light: PropTypes.bool,
  download: PropTypes.bool,
  external: PropTypes.bool
};

LinkListSymbol.defaultProps = {
  light: false,
  download: false,
  external: false
};
