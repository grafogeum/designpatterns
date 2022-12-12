import { useState, useEffect } from 'react';
import CharacterCards from '../components/CharacterCards';

const API_URL = 'https://rickandmortyapi.com/api/character/';

export const RickAndMortyCharactersCards = () => {
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
	return <CharacterCards characters={data} loading={loading} error={error} />;
};
