import { ForwardedRef, forwardRef } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface CheckboxWithLabelProps {
  inputId: string;
  labelText: string;
  defaultChecked?: boolean;
  register?: UseFormRegisterReturn; // react-hook-form사용할경우
}

const CheckboxWithLabel = forwardRef<HTMLInputElement, CheckboxWithLabelProps>(
  (
    {
      inputId,
      labelText,
      defaultChecked = false,
      register,
    }: CheckboxWithLabelProps,
    ref?: ForwardedRef<HTMLInputElement>, // ref사용할경우
  ) => {
    return (
      <div className="flex">
        <div className="flex h-5 items-center">
          <input
            id={inputId}
            defaultChecked={defaultChecked}
            type="checkbox"
            className="focus:ring-3 h-4 w-4 cursor-pointer rounded border-gray-300 bg-gray-50"
            ref={ref}
            {...register}
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor={inputId} className="font-medium text-gray-700">
            {labelText}
          </label>
        </div>
      </div>
    );
  },
);

CheckboxWithLabel.displayName = 'CheckboxWithLabel';

export default CheckboxWithLabel;
