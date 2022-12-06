// icons = ['🎉', '🚀', '🧨', '🔥'],
// label = 'label'

import styled from '@emotion/styled';

const IconContainerStyled = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	width: 100%;
`;

export const IconContainer = (
	<IconContainerStyled>
		<span role="img" aria-label="rocket">
			&#128640;
		</span>
		<span role="img" aria-label="dynamit">
			&#128163;
		</span>
		<span role="img" aria-label="fire">
			&#128293;
		</span>
		<span role="img" aria-label="party">
			&#127881;
		</span>
	</IconContainerStyled>
);
