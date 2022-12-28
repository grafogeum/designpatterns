import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

const Progress = ({ activeStep, handleNext, handleBack, maxSteps }) => {
	const theme = useTheme();

	return (
		<MobileStepper
			variant="progress"
			steps={maxSteps}
			position="static"
			activeStep={activeStep}
			sx={{ maxWidth: 400, flexGrow: 1 }}
			nextButton={
				<Button
					size="small"
					onClick={handleNext}
					disabled={activeStep === maxSteps - 1}
				>
					Next
					{theme.direction === 'rtl' ? (
						<KeyboardArrowLeft />
					) : (
						<KeyboardArrowRight />
					)}
				</Button>
			}
			backButton={
				<Button size="small" onClick={handleBack} disabled={activeStep === 0}>
					{theme.direction === 'rtl' ? (
						<KeyboardArrowRight />
					) : (
						<KeyboardArrowLeft />
					)}
					Back
				</Button>
			}
		/>
	);
};

Progress.propTypes = {
	maxStep: PropTypes.number,
	activeStep: PropTypes.number,
	theme: PropTypes.object,
	handleNext: PropTypes.func,
	handleBack: PropTypes.func
};

export default withStyles(null, { withTheme: true })(Progress);
