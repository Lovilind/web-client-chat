import React from 'react';

interface StepProps {
  currentStep: string;
  stepList: string[];
  handleCurrentStep: (stepName: string) => void;
  isAllAccessStep: boolean;
  accessStepList?: string[];
}

const Step = ({
  currentStep,
  stepList,
  handleCurrentStep,
  isAllAccessStep,
  accessStepList,
}: StepProps) => {
  const onClickStep = (step: string) => {
    if (isAllAccessStep) {
      handleCurrentStep(step);
      return;
    }
    if (!accessStepList?.includes(step)) {
      return;
    }
    handleCurrentStep(step);
  };
  return (
    <ul className="flex w-full gap-2">
      {stepList.map((step) => (
        <li
          key={step}
          onClick={() => onClickStep(step)}
          className={`min-h-1 flex-1 cursor-pointer ${
            currentStep === step ? 'bg-[#38CCDD]' : 'bg-gray-500'
          }`}
        ></li>
      ))}
    </ul>
  );
};

export default React.memo(Step);
