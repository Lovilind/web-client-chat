import { mbtiList } from '@/constants/mbti';
import Dropdown from '@/components/common/Dropdown';
import { useFormContext } from 'react-hook-form';

const MbtiBox = () => {
  const { setValue } = useFormContext();
  const getTargetValue = (target: string) => {
    console.log('target', target);
    setValue('mbti', target);
  };
  return (
    <>
      <div className="w-2/3">
        <label>MBTI</label>
        <Dropdown dropdownList={mbtiList} getTargetValue={getTargetValue} />
      </div>
    </>
  );
};
export default MbtiBox;
