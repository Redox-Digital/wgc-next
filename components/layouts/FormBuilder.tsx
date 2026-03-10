import { useState } from 'react';
import css from './FormBuilder.module.scss';
import PageTitle from '../content/PageTitle';
import Button from '../navigation/Button';
import ProgressBar from '../content/ProgressBar';

type Props = {
  confirmationUrl: string;
  steps: FormStep[];
};

/**
 * Form Builder building multi-steps forms. Use it in a <form> tag.
 */
export default function FormBuilder({ steps, confirmationUrl }: Props) {
  const [currentStep, setStep] = useState<number>(0);

  const nextStep = () => setStep(currentStep + 1);
  const prevStep = () => setStep(currentStep - 1);

  console.log('Active step: ', currentStep);

  return (
    <>
      {steps.map((formStep, key) => (
        <FormStep key={key} step={formStep} currentStep={currentStep} />
      ))}

      <FormNav
        steps={steps.length}
        currentStep={currentStep}
        confirmationUrl={confirmationUrl}
        nextStep={nextStep}
        prevStep={prevStep}
      />
    </>
  );
}

type FormStepProps = {
  step: FormStep;
  currentStep: number;
};

function FormStep({ step, currentStep }: FormStepProps) {
  return (
    <>
      <PageTitle title={step.title} className={currentStep !== step.id ? css.hideTitle : ''}>
        <p>{step.description}</p>
      </PageTitle>
      <section className={`${css.formStep} ${currentStep === step.id ? css.show : ''}`}>
        <fieldset>{step.body}</fieldset>
      </section>
    </>
  );
}

type NavProps = {
  prevStep: () => void;
  nextStep: () => void;
  confirmationUrl: string;
  steps: number;
  currentStep: number;
};

function FormNav({ steps, currentStep, confirmationUrl, prevStep, nextStep }: NavProps) {
  // DEV: Animate steps when switching
  return (
    <div className={css.formNav}>
      {currentStep === 0 ? (
        <Button outline>Cancel</Button>
      ) : (
        <Button outline onClick={prevStep}>
          Previous
        </Button>
      )}

      {currentStep + 1 === steps ? (
        // Replace this with a input:submit to send and validate the form.
        <Button href={confirmationUrl}>Create</Button>
      ) : (
        <Button onClick={nextStep}>Continue</Button>
      )}
      <ProgressBar
        labels={[`Step ${currentStep + 1} of ${steps}`]}
        totalScore={steps}
        currentScore={currentStep}
      />
    </div>
  );
}
