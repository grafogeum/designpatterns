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
			value={{
				activeStep,
				maxSteps,
				handleNext,
				handleBack,
				characters
			}}
		>
			{children}
		</StepperContext.Provider>
	);
};
