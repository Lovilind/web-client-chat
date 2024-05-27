import { memo } from 'react';

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
  accessStepList = [],
}: StepProps) => {
  const onClickStep = (step: string) => {
    if (isAllAccessStep || accessStepList.includes(step)) {
      handleCurrentStep(step);
    }
  };

  return (
    <ul className="flex w-full gap-2">
      {stepList.map((step) => (
        <li
          key={step}
          onClick={() => onClickStep(step)}
          className={`min-h-1 flex-1 ${
            accessStepList.includes(step) || isAllAccessStep
              ? 'cursor-pointer'
              : 'cursor-not-allowed'
          } ${currentStep === step ? 'bg-[#38CCDD]' : accessStepList.includes(step) || isAllAccessStep ? 'bg-gray-500' : 'bg-gray-300'} `}
        ></li>
      ))}
    </ul>
  );
};

export default memo(Step);
