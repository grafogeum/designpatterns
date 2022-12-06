import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const CardStyled = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border: 2px solid #a5e9ad;
	width: 80vw;
	max-width: 400px;
	height: 170px;
	border-radius: 10px;
	margin: 0 auto;
	margin-bottom: 20px;
`;

export const CharacterCard = ({ children }) => {
	return <CardStyled>{children}</CardStyled>;
};

CharacterCard.propTypes = {
	image: PropTypes.string,
	name: PropTypes.string
};
