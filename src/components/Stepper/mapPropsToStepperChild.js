import { cloneElement } from 'react';

const isChildTypeNameEqualTo = (child, name) =>
	child.type.name === name || child.type.displayName === `WithStyles(${name})`;
const mapPropsToStepperChild = (
	child,
	activeStep,
	maxSteps,
	characters,
	handleNext,
	handleBack
) =>
	(isChildTypeNameEqualTo(child, 'Progress') &&
		cloneElement(child, {
			activeStep,
			maxSteps,
			handleNext,
			handleBack
		})) ||
	(isChildTypeNameEqualTo(child, 'Image') &&
		cloneElement(child, {
			path: characters[activeStep]['image'],
			alt: characters[activeStep]['name']
		})) ||
	(isChildTypeNameEqualTo(child, 'Label') &&
		cloneElement(child, {
			name:
				child.props['type'] === 'species'
					? characters[activeStep]['species']
					: characters[activeStep]['name']
		})) ||
	cloneElement(child, null);

export default mapPropsToStepperChild;

// Learning purposes
// Learning purposes
// if (isChildTypeNameEqualTo(child, 'Progress')) {
// 	return cloneElement(child, {
// 		activeStep,
// 		maxSteps,
// 		handleNext: handleNext,
// 		handleBack: handleBack
// 	});
// } else if (isChildTypeNameEqualTo(child, 'Label')) {
// 	return cloneElement(child, {
// 		text: characters[activeStep]['name']
// 	});
// } else if (isChildTypeNameEqualTo(child, 'Image'))
// 	return cloneElement(child, {
// 		path: characters[activeStep]['image'],
// 		alt: characters[activeStep]['name']
// 	});
// else {
// 	return cloneElement(child, null);
// }
