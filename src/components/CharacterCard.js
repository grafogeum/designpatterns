import styled from "@emotion/styled";
import { ProfileRow } from "./ProfileRow";
import PropTypes from "prop-types";

const CardStyled = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border: 2px solid #a5e9ad;
	width: 400px;
	height: 170px;
	border-radius: 10px;
	margin: 0 auto;
	margin-bottom: 20px;
`;

export const CharacterCard = ({
	image = "dupa",
	name = "",
	gender,
	species
}) => {
	return (
		<CardStyled>
			<ProfileRow
				name={name || ""}
				image={image || ""}
				species={species}
				gender={gender}
			/>
		</CardStyled>
	);
};

CharacterCard.propTypes = {
	image: PropTypes.string,
	name: PropTypes.string
};
