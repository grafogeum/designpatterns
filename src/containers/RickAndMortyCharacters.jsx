import { useState, useEffect } from 'react';

const API_URL = 'https://rickandmortyapi.com/api/character/';

export const RickAndMortyCharacters = ({ children }) => {
	const [characters, setCharacters] = useState({
		data: [],
		loading: true,
		error: null
	});

	useEffect(() => {
		const getCharacters = async () => {
			const response = await fetch(API_URL).catch((error) => {
				setCharacters({
					characters: [],
					loading: false,
					error: error
				});
			});

			const { results } = await response.json();

			setCharacters({
				data: results,
				loading: false,
				error: null
			});
		};

		getCharacters();
	}, []);

	const { data, loading, error } = characters;
	return <>{children({ data, loading, error })}</>;
};
