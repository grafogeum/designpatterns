import styled from "@emotion/styled";

import PropTypes from "prop-types";

const CardAvatar = styled.div`
	display: flex;
	width: 100px;
	height: 100px;
	& img {
		border-radius: 50%;
		border: 1px solid #a5e9ad;
	}
`;

export const Avatar = ({ image, name }) => (
	<CardAvatar>
		<img src={image} alt={`avatar-name-${name}`} />
	</CardAvatar>
);

CardAvatar.propTypes = {
	image: PropTypes.string,
	name: PropTypes.string
};
