import React from 'react';
import Input, { InputProps } from './Input';

interface InputWithLabelProps extends InputProps {
  labelText: string;
}

const InputWithLabel = ({
  labelText,
  children,
  ...props
}: InputWithLabelProps) => {
  return (
    <div className="w-full">
      <label className="mb-1 block text-gray-500" htmlFor={props.id}>
        {labelText}
      </label>
      <Input {...props}>{children}</Input>
    </div>
  );
};

export default InputWithLabel;
