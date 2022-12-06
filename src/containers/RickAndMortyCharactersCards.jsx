import { useState, useEffect } from 'react';
import { CharacterCards } from '../components/CharacterCards';

const API_URL = 'https://rickandmortyapi.com/api/character/';

export const RickAndMortyCharactersCards = () => {
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		const getCharacters = async () => {
			const response = await fetch(API_URL);
			const data = await response.json();
			setCharacters(data.results);
		};

		getCharacters();
	}, []);

	return (
		<>
			<CharacterCards characters={characters} />
		</>
	);
};
