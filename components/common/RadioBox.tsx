import { UseFormRegisterReturn } from 'react-hook-form';

interface RadioBoxProps {
  register: UseFormRegisterReturn;
  isDisabled?: boolean;
  radioList: { id: string; value: string; labelText: string }[];
}
const RadioBox = ({ register, isDisabled, radioList }: RadioBoxProps) => {
  return (
    <>
      {radioList?.map((radio) => (
        <label className="radio flex cursor-pointer " key={radio.value}>
          <input
            className="my-auto scale-125 transform"
            id={radio.id}
            type="radio"
            value={radio.value}
            disabled={isDisabled}
            {...register}
          />
          <div className="title px-2">{radio.labelText}</div>
        </label>
      ))}
    </>
  );
};

export default RadioBox;
