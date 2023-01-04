import React, { memo } from 'react';
import Label from './Label';
import Image from './Image';
import Progress from './Progress';

export const Stepper = memo(({ children }) => {
	return <>{children}</>;
});

Stepper.Label = Label;
Stepper.Image = Image;
Stepper.Progress = Progress;
