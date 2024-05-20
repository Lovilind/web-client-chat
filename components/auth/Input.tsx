/* eslint-disable import/no-extraneous-dependencies */
import { UseFormRegisterReturn } from 'react-hook-form';

export interface InputProps {
  type: 'text' | 'password' | 'number' | 'email';
  id: string;
  addInputClassName?: string;
  placeholder?: string;
  register?: UseFormRegisterReturn;
  maxLength?: number;
  errorMsg?: string;
  isReadOnly?: boolean;
  children?: React.ReactNode;
}

const Input = ({
  type = 'text',
  id,
  addInputClassName,
  placeholder,
  register,
  maxLength,
  errorMsg,
  isReadOnly,
  children,
}: InputProps) => {
  return (
    <>
      <div className="relative mt-2">
        <input
          className={`w-full rounded-lg border px-4 py-3 text-gray-700 focus:border-[#38CCDD] focus:outline-none ${addInputClassName}`}
          id={id}
          type={type}
          maxLength={maxLength}
          placeholder={placeholder}
          readOnly={isReadOnly}
          {...register}
        />
        {children}
      </div>
      {errorMsg && <p className="text-red-600">{errorMsg}</p>}
    </>
  );
};

export default Input;
