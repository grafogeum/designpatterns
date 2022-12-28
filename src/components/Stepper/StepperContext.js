import { createContext } from 'react';
export const defaultValue = {
	activeStep: 0
};

export const StepperContext = createContext(defaultValue);
