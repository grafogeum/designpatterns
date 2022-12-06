import PropTypes from 'prop-types';
import { CharacterCard } from './CharacterCard';
import { ProfileRow } from './ProfileRow';
import { Avatar } from './Avatar';
import { DescriptionWithIcons } from './Description/DescriptionWithIcons';

export const CharacterCards = ({ characters }) => (
	<>
		<h1>Characters</h1>
		{characters.slice(0, 10).map(({ image, name, gender, species }) => (
			<CharacterCard key={name}>
				<ProfileRow>
					<Avatar image={image} name={name} />
					<DescriptionWithIcons name={name} species={species} gender={gender} />
				</ProfileRow>
			</CharacterCard>
		))}
	</>
);

CharacterCards.propTypes = {
	image: PropTypes.string,
	name: PropTypes.string
};
