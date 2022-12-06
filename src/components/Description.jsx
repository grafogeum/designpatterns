import styled from "@emotion/styled";

const CardDescription = styled.div`
	display: flex;
	width: 100px;
	height: 100px;
	flex-direction: column;
`;

export const Description = ({ species, name, gender }) => {
	return (
		<CardDescription>
			<h2>{name}</h2>
			<p>species:{species}</p>
			<p>gender{gender}</p>
		</CardDescription>
	);
};
