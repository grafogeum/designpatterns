import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { PremiumAvatar } from '../images/premiumAvatar/PremiumAvatar';

const CardAvatar = styled.div`
	display: flex;
	width: 100px;
	height: 100px;
	& img {
		border-radius: 50%;
		border: 1px solid #a5e9ad;
	}
`;

export const Avatar = ({ children, premium }) => {
	// console.log('Avatar', [premium]);
	return (
		<CardAvatar>
			<PremiumAvatar premium={premium} />
		</CardAvatar>
	);
};

CardAvatar.propTypes = {
	image: PropTypes.string,
	name: PropTypes.string
};
