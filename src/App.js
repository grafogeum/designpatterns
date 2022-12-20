import React from 'react';
import { RickAndMortyCharacters } from './containers/RickAndMortyCharacters';
import styled from '@emotion/styled';
import CharacterCards from './components/CharacterCards';
import { CharactersTable } from './components/CharactersTable/CharactersTable';

const AppStyles = styled.div`
	text-align: center;
	background-color: #282c34;
	flex-wrap: 'wrap';
	justify-content: 'center';
	flex-direction: column;
	align-items: 'center';
	width: 100%;
`;

const App = () => {
	return (
		<AppStyles>
			<RickAndMortyCharacters>
				{({ data, loading, error }) => (
					<>
						<CharactersTable characters={data} />
						<CharacterCards characters={data} loading={loading} error={error} />
					</>
				)}
			</RickAndMortyCharacters>
		</AppStyles>
	);
};

export default App;
