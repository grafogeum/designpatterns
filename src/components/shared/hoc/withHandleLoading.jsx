import { LoadingSpinner } from '../LoadingSpinner';

export const withHandleLoading = (WrappedComponent) => {
	const withHandleLoadingHOC = ({ loading, ...passThroughProps }) => {
		if (loading) return <LoadingSpinner />;
		return <WrappedComponent {...passThroughProps} />;
	};

	withHandleLoadingHOC.displayName = `withHandleLoading(${
		WrappedComponent.displayName || WrappedComponent.name || 'Component'
	})`;

	return withHandleLoadingHOC;
};
