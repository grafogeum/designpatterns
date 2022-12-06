import styled from '@emotion/styled';
import { Avatar } from './Avatar';
import { Description } from './Description/Description';
import { DescriptionWithIcons } from './Description/DescriptionWithIcons';

const CardBodyStyled = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	width: 100%;
	height: 100%;

	& h2,
	p {
		margin: 0.5rem;
	}
`;

export const ProfileRow = ({ children }) => (
	<CardBodyStyled>{children}</CardBodyStyled>
);
