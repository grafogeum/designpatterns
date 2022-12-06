import React from 'react';
import { IconContainer } from '../IconContainer';
import { Description } from './Description';

export const DescriptionWithIcons = ({ species, name, gender }) => {
	return (
		<div>
			<Description species={species} name={name} gender={gender}>
				{IconContainer}
			</Description>
		</div>
	);
};
