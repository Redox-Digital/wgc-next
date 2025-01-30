import { useState } from 'react';
import css from './FormBuilder.module.scss';
import PageTitle from '../content/PageTitle';
import Button from '../navigation/Button';

type Props = {
  steps: FormStep[];
};

/**
 * Form Builder building multi-steps forms. Use it in a <form> tag.
 */
export default function FormBuilder({ steps }: Props) {
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

type ProgressType = {
  steps: number;
  currentStep: number;
};

function ProgressBar({ steps, currentStep }: ProgressType) {
  return (
    <div className={css.progressBar}>
      <span className={css.bar}>
        <span className={css.progress} style={{ width: `${((currentStep + 1) / steps) * 100}%` }} />
      </span>
      <small>
        Step {currentStep + 1} of {steps}
      </small>
    </div>
  );
}

interface NavProps extends ProgressType {
  prevStep: () => void;
  nextStep: () => void;
}

function FormNav({ steps, currentStep, prevStep, nextStep }: NavProps) {
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
        <Button href="/private/success">Create</Button>
      ) : (
        <Button onClick={nextStep}>Continue</Button>
      )}
      <ProgressBar steps={steps} currentStep={currentStep} />
    </div>
  );
}
