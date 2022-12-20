import { React, useState, useEffect } from 'react';

import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const CardStyled = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	border: 2px solid #a5e9ad;
	width: 80vw;
	max-width: 400px;
	height: 170px;
	border-radius: 10px;
	margin: 0 auto;
	margin-bottom: 20px;
`;

const CardCheckboxContainerStyle = {
	position: 'relative',
	border: '1px solid #a5e9ad'
};

const CardCheckbox = styled.input`
	width: 35px;
	height: 35px;
	border-radius: 50%;
	vertical-align: middle;
	appearance: none;
	-webkit-appearance: none;
	cursor: pointer;
	&:checked {
		appearance: auto;
		clip-path: circle(45% at 50% 50%);
	}
`;

const CardCheckboxContainer = ({ children, premium }) => {
	return (
		<>
			<CardCheckbox
				type="checkbox"
				name="character"
				style={CardCheckboxContainerStyle}
				defaultChecked={premium}
			/>
			{children}
		</>
	);
};

export const CharacterCard = ({ children, getChecked, showNumbers, i }) => {
	const [checked, setChecked] = useState(false);
	const [numbers, setNumbers] = useState([]);

	useEffect(() => {
		const numArray = Array.from({ length: i }).map((_, index) => index);
		setNumbers(numArray);
		showNumbers(numArray);
		// console.log('numbers', numArray);
	}, [i]);

	const handleChecked = () => {
		setChecked(!checked);
		getChecked(!checked);
	};

	return (
		<CardStyled>
			<CardCheckbox
				type="checkbox"
				name="character"
				style={CardCheckboxContainerStyle}
				onChange={handleChecked}
			/>
			{children}
			<div>Num:{i}</div>
		</CardStyled>
	);
};

CharacterCard.propTypes = {
	image: PropTypes.string,
	name: PropTypes.string
};
