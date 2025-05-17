import React from 'react';

type Props = React.InputHTMLAttributes<HTMLInputElement>;

const InputField: React.FC<Props> = (props) => {
  return <input type="text" {...props} />;
};

export default InputField;