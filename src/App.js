import React from 'react';
import { RickAndMortyCharactersCards } from './containers/RickAndMortyCharactersCards';
import styled from '@emotion/styled';

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
			<RickAndMortyCharactersCards />
		</AppStyles>
	);
};

export default App;
