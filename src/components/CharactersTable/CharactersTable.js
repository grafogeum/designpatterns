export const CharactersTable = ({ characters }) => {
	return characters ? (
		<table width={'100%'}>
			<thead>
				<tr>
					<th>Name</th>
					<th>Species</th>
					<th>Status</th>
				</tr>
			</thead>
			<tbody>
				{characters.map(({ id, name, species, status }) => (
					<tr key={id}>
						<td>{name}</td>
						<td>{species}</td>
						<td>{status}</td>
					</tr>
				))}
			</tbody>
		</table>
	) : null;
};
