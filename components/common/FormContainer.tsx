/* eslint-disable import/no-extraneous-dependencies */

import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import {
  useForm,
  FormProvider,
  SubmitHandler,
  FieldValues,
  DefaultValues,
} from 'react-hook-form';
import { ZodSchema } from 'zod';

interface FormContainerProps<TFormData extends FieldValues> {
  children: React.ReactNode;
  onSubmit: SubmitHandler<TFormData>;
  formSchema: ZodSchema<TFormData>;
  defaultValues: DefaultValues<TFormData>;
}

const FormContainer = <TFormData extends FieldValues>({
  children,
  onSubmit,
  formSchema,
  defaultValues,
}: FormContainerProps<TFormData>) => {
  const methods = useForm<TFormData>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default FormContainer;
