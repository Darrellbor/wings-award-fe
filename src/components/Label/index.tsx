import React from 'react';

interface LabelProps {
  children: React.ReactNode;
}

const Label = (props: LabelProps): JSX.Element => {
  return <label className="label">{props.children}</label>;
};

export default Label;
