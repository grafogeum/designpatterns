import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper/Paper';

const styles = (theme) => ({
	label: {
		display: 'flex',
		alignItems: 'center',
		height: 50,
		color: theme.palette.text.secondary,
		backgroundColor: theme.palette.background.default
	}
});

const Label = ({ name, classes }) => (
	<Paper square elevation={0} className={classes.label}>
		<Typography variant="h6">{name || 'name'}</Typography>
	</Paper>
);

Label.propTypes = {
	text: PropTypes.string,
	classes: PropTypes.object
};

export default withStyles(styles, { withTheme: true })(Label);
