import { useLayoutEffect, useState } from 'react';
import { IconArrow } from '../icons';

interface DropdownProps {
  initialValue?: string;
  dropdownList: readonly string[] | string[];
  getTargetValue: (target: string) => void;
}

const Dropdown = ({
  initialValue,
  dropdownList,
  getTargetValue,
}: DropdownProps) => {
  const [valueText, setValueText] = useState<string>('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const onClickDropdownItem = (target: string) => {
    console.log(target);
    getTargetValue(target);
    setValueText(target);
    setIsDropdownOpen(false);
  };
  useLayoutEffect(() => {
    if (initialValue) {
      setValueText(initialValue);
    }
  }, [initialValue]);
  return (
    <div className="group relative w-full">
      <button
        type="button"
        onClick={handleDropdown}
        className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-100 "
      >
        <span className="mr-2 flex-1 text-start">
          {!valueText ? '선택 해주세요.' : valueText}
        </span>
        <i className="h-6 w-6">
          <IconArrow className="fill-black" />
        </i>
      </button>

      <ul
        className={`absolute mt-2 max-h-[300px] w-full space-y-1 overflow-y-auto rounded-md bg-white p-1 shadow-lg ring-1 ring-black ring-opacity-5 ${isDropdownOpen ? 'block' : 'hidden'}`}
      >
        {dropdownList.map((item, index) => {
          return (
            <li
              onClick={() => onClickDropdownItem(item)}
              key={index}
              className={`block cursor-pointer rounded-md px-4 py-2 text-start text-gray-700 hover:bg-gray-100 active:bg-blue-100 ${item === valueText ? 'bg-gray-100' : ''}`}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dropdown;
