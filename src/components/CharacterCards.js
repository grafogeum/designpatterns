import PropTypes from "prop-types";
import { CharacterCard } from "./CharacterCard";

export const CharacterCards = ({ characters }) => (
	<>
		<h1>Characters</h1>
		{characters
			.slice(0, 10)
			.map(({ image = "", name = "", gender, species }) => (
				<CharacterCard
					name={name || ""}
					image={image || ""}
					gender={gender}
					species={species}
					key={name}
				/>
			))}
	</>
);

CharacterCards.propTypes = {
	image: PropTypes.string,
	name: PropTypes.string
};
