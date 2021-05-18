import React from 'react';

interface GobackProps {
  onClick?: () => void;
}

export const Goback = ({ onClick }: GobackProps): JSX.Element => {
  return (
    <svg width="38" height="12" viewBox="0 0 38 12" fill="none" onClick={onClick}>
      <path
        d="M6.10986 11.21L0.999863 6.32L6.10986 1"
        stroke="#313848"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinejoin="round"
      />
      <path
        d="M37.4697 6.10156H1.32973"
        stroke="#313848"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Goback;
