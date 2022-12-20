import batman from './batman.png';
import premiumAvatar from './premiumAvatar.jpeg';

export const PremiumAvatar = ({ premium }) => (
	<svg width="100" height="100">
		{premium ? (
			<image href={premiumAvatar} x="0" y="0" width="100" height="100" />
		) : (
			<image href={batman} x="0" y="0" width="100" height="100" />
		)}
	</svg>
);
