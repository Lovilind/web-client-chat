'use client';

import FormContainer from '@/components/common/FormContainer';
import { userFormSchema } from '@/constants/Schema';
import MbtiBox from './MbtiBox';

export type UserFormValues = {
  mbti: string;
};

const UserFormWrapper = () => {
  const submitForm = (data: UserFormValues) => {
    console.log(data);
  };
  return (
    <FormContainer
      onSubmit={submitForm}
      formSchema={userFormSchema}
      defaultValues={{ mbti: '' }}
    >
      <MbtiBox />
      <button type="submit">test</button>
    </FormContainer>
  );
};

export default UserFormWrapper;
