import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CharacterCard } from './CharacterCard';
import { ProfileRow } from './ProfileRow';
import { Avatar } from './Avatar';
import { DescriptionWithIcons } from './Description/DescriptionWithIcons';
import { compose } from 'recompose';
import { withHandleLoading } from './shared/hoc/withHandleLoading';
import { withHandleError } from './shared/hoc/withHandleError';

const CharacterCards = ({ characters }) => {
	const [query, setQuery] = useState(false);
	const [showNumbers, setShowNumbers] = useState([]);

	useEffect(() => {
		console.log('charactersquery', query);
		console.log('showNumbers', showNumbers);
	}, [query, showNumbers]);

	return (
		<>
			<h1>Characters</h1>
			{characters.slice(0, 10).map(({ image, name, gender, species }, i) => (
				<CharacterCard
					key={name}
					getChecked={(checked) => setQuery(checked)}
					showNumbers={(showNumbers) => setShowNumbers(showNumbers)}
					i={i}
				>
					<ProfileRow>
						<Avatar image={image} name={name} premium={query} />
						{query[i] ? <p>premium</p> : <p>not premium</p>}
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
