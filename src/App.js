import React from 'react';
import { RickAndMortyCharacters } from './containers/RickAndMortyCharacters';
import styled from '@emotion/styled';
import { Stepper } from './components/Stepper/Stepper';
import { StepperProvider } from './components/Stepper/StepperProvider';

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
			<RickAndMortyCharacters
				render={({ data }) => (
					<StepperProvider characters={data}>
						<Stepper>
							<Stepper.Label />
							<Stepper.Image />
							<Stepper.Label type="species" />
							<Stepper.Progress />
						</Stepper>
					</StepperProvider>
				)}
			/>
		</AppStyles>
	);
};

export default App;
