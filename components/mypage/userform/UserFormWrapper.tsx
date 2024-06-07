'use client';

import Dropdown from '@/components/common/Dropdown';
import FormContainer from '@/components/common/FormContainer';
import { userFormSchema } from '@/constants/Schema';
import { mbtiList } from '@/constants/mbti';

export type UserFormValues = {
  test: string;
};

const UserFormWrapper = () => {
  const submitForm = (data: UserFormValues) => {
    console.log(data);
  };
  const getTargetValue = (target: string) => {
    console.log('target', target);
  };
  return (
    <FormContainer
      onSubmit={submitForm}
      formSchema={userFormSchema}
      defaultValues={{ test: '' }}
    >
      <div className="w-2/3">
        <Dropdown
          dropdownList={mbtiList}
          getTargetValue={getTargetValue}
          initialValue={mbtiList[3]}
        />
        {/* <Dropdown dropdownList={mbtiList} getTargetValue={getTargetValue} /> */}
      </div>
      <div>123123</div>
    </FormContainer>
  );
};

export default UserFormWrapper;
