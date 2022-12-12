import PropTypes from 'prop-types';
import { CharacterCard } from './CharacterCard';
import { ProfileRow } from './ProfileRow';
import { Avatar } from './Avatar';
import { DescriptionWithIcons } from './Description/DescriptionWithIcons';
import { compose } from 'recompose';
import { withHandleLoading } from './shared/hoc/withHandleLoading';
import { withHandleError } from './shared/hoc/withHandleError';

const CharacterCards = ({ characters }) => {
	return (
		<>
			<h1>Characters</h1>
			{characters.slice(0, 10).map(({ image, name, gender, species }) => (
				<CharacterCard key={name}>
					<ProfileRow>
						<Avatar image={image} name={name} />
						<DescriptionWithIcons
							name={name}
							species={species}
							gender={gender}
						/>
					</ProfileRow>
				</CharacterCard>
			))}
		</>
	);
};

export default compose(withHandleLoading, withHandleError)(CharacterCards);

CharacterCards.propTypes = {
	image: PropTypes.string,
	name: PropTypes.string
};
