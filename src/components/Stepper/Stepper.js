import { useState, Children, memo, useContext } from 'react';
import { StepperContext } from './StepperContext';
import mapPropsToStepperChild from './mapPropsToStepperChild.js';
import Label from './Label';
import Image from './Image';
import Progress from './Progress';

export const Stepper = memo(({ children }) => {
	const { activeStep, maxSteps, handleNext, handleBack, characters } =
		useContext(StepperContext);

	const childrenCloned = maxSteps > 0 && (
		<>
			{Children.map(children, (child) =>
				mapPropsToStepperChild(
					child,
					activeStep,
					maxSteps,
					characters,
					handleNext,
					handleBack
				)
			)}
		</>
	);

	return <>{childrenCloned}</>;
});

Stepper.Label = Label;
Stepper.Image = Image;
Stepper.Progress = Progress;
