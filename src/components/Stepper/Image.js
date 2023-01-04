import { useContext } from 'react';
import { StepperContext } from './StepperContext';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {
	img: {
		height: 300,
		maxWidth: 300,
		overflow: 'hidden',
		display: 'block',
		width: '100%'
	}
};

const Image = () => {
	const { path, alt, classes } = useContext(StepperContext);
	return <img className={classes?.img} src={path} alt={alt} />;
};

Image.propTypes = {
	path: PropTypes.string,
	alt: PropTypes.string,
	classes: PropTypes.object
};

export default withStyles(styles)(Image);
