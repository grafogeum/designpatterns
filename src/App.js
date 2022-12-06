import React from 'react';
import css from '@emotion/styled';
import { RickAndMortyCharactersCards } from './containers/RickAndMortyCharactersCards';

const AppStyles = css`
	text-align: center;
	background-color: #282c34;
	flex-wrap: 'wrap';
	justify-content: 'center';
	flex-direction: column;
	align-items: 'center';
	width: 100;
`;

const App = () => {
	return (
		<div className={AppStyles}>
			<RickAndMortyCharactersCards />
		</div>
	);
};

export default App;
