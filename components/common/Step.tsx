import React from 'react';

interface StepProps {
  currentStep: string;
  stepList: string[];
  handleCurrentStep: (stepName: string) => void;
}

const Step = ({ currentStep, stepList, handleCurrentStep }: StepProps) => {
  return (
    <ul className="flex w-full gap-2">
      {stepList.map((step) => (
        <li
          key={step}
          onClick={() => handleCurrentStep(step)}
          className={`min-h-1 flex-1 cursor-pointer ${
            currentStep === step ? 'bg-[#38CCDD]' : 'bg-gray-500'
          }`}
        ></li>
      ))}
    </ul>
  );
};

export default React.memo(Step);
