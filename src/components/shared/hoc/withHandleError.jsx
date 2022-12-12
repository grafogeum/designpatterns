import { FetchError } from '../FetchError';

export const withHandleError = (WrappedComponent) => {
	const withHandleErrorHOC = ({ error, ...passThroughProps }) => {
		if (error) return <FetchError />;
		return <WrappedComponent {...passThroughProps} />;
	};

	withHandleErrorHOC.displayName = `withHandleError(${
		WrappedComponent.displayName || WrappedComponent.name || 'Component'
	})`;

	return withHandleErrorHOC;
};
