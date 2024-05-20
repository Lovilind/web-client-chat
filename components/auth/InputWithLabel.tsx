import React from 'react';
import Input, { InputProps } from './Input';

interface InputWithLabelProps extends InputProps {
  labeText: string;
}

const InputWithLabel = ({
  labeText,
  type = 'text',
  id,
  addInputClassName,
  placeholder,
  register,
  maxLength,
  errorMsg,
  isReadOnly,
  children,
}: InputWithLabelProps) => {
  return (
    <div className="w-full">
      <label className="mb-1 block text-gray-500" htmlFor={id}>
        {labeText}
      </label>
      <Input
        type={type}
        placeholder={placeholder}
        id="email"
        register={register}
        errorMsg={errorMsg}
        addInputClassName={addInputClassName}
        maxLength={maxLength}
        isReadOnly={isReadOnly}
      >
        {children}
      </Input>
    </div>
  );
};

export default InputWithLabel;
