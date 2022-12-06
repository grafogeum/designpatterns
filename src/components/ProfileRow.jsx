import styled from "@emotion/styled";
import { Avatar } from "./Avatar";
import { Description } from "./Description";

const CardBodyStyled = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	width: 100%;
	height: 100%;
	margin-left: 20px;
	& h2,
	p {
		margin: 0.5rem;
	}
`;

export const ProfileRow = ({ name, species, gender, image }) => (
	<CardBodyStyled>
		<Avatar image={image} name={name} />
		<Description name={name} species={species} gender={gender} />
	</CardBodyStyled>
);
