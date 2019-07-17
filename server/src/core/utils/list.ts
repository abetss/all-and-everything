export interface PaginationParams {
	after: any;
	pageSize: number;
	results: any;
	getCursor?: (item: any) => any;
}

interface Paginable<T> {
	cursor?: T;
}

export const paginateResults = <T, M>(
	results: Array<T & Paginable<M>>,
	after: M,
	pageSize = 20,
	getCursor: (item: T) => M | null = () => null
): Array<T & Paginable<M>> => {
	if (pageSize < 1) return [];

	const withCursor = results.map(item => ({
		...item,
		cursor: item.cursor ? item.cursor : getCursor(item)
	}));

	const cursor = after;

	if (!cursor) return withCursor.slice(0, pageSize);

	const cursorIndex = withCursor.findIndex(item => item.cursor === cursor);

	return cursorIndex >= 0
		? cursorIndex === withCursor.length - 1 // don't let us overflow
			? []
			: withCursor.slice(
					cursorIndex + 1,
					Math.min(withCursor.length, cursorIndex + 1 + pageSize)
			  )
		: results.slice(0, pageSize);
};
