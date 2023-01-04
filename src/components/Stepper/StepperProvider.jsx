import { useState } from 'react';
import {
	defaultValue as defaultContextValue,
	StepperContext
} from './StepperContext';

export const StepperProvider = ({ children, characters }) => {
	const state = defaultContextValue;
	const [activeStep, setActiveStep] = useState(state.activeStep);
	const maxSteps = characters.length;

	const handleNext = () =>
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	const handleBack = () =>
		setActiveStep((prevActiveStep) => prevActiveStep - 1);

	return (
		<StepperContext.Provider
			value={
				characters.length > 1
					? {
							characters,
							activeStep,
							activeStepData: characters[activeStep],
							maxSteps,
							handleNext,
							handleBack,
							name: characters[activeStep]['name'],
							species: characters[activeStep]['species'],
							classes: {},
							path: characters[activeStep]['image'],
							alt: characters[activeStep]['name']
					  }
					: state
			}
		>
			{children}
		</StepperContext.Provider>
	);
};
