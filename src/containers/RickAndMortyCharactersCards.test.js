// import React from "react";
// import { render, cleanup, screen } from "@testing-library/react";
// import { RickAndMortyCharactersCards } from "./RickAndMortyCharactersCards";

// jest.mock("react", () => {
// 	const originalModule = jest.requireActual("react");

// 	return {
// 		...originalModule,
// 		useState: (initialState) => [initialState, jest.fn()],
// 		useEffect: (cb) => cb()
// 	};
// });

// describe("RickAndMortyCharactersCards", () => {
// 	afterEach(cleanup);

// 	it("should render a list of character cards", async () => {
// 		let characters;
// 		jest.spyOn(global, "fetch").mockImplementationOnce(() => {
// 			return Promise.resolve({
// 				json: () => Promise.resolve({ results: characters })
// 			});
// 		});

// 		characters = [
// 			{
// 				name: "Rick Sanchez",
// 				image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
// 			},
// 			{
// 				name: "Morty Smith",
// 				image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
// 			}
// 		];

// 		const { getByTestId } = render(<RickAndMortyCharactersCards />);
// 		const characterCards = screen.getByTestId("character-cards");

// 		expect(characterCards).toHaveTextContent("Rick Sanchez");
// 		expect(characterCards).toHaveTextContent("Morty Smith");
// 	});
// });
