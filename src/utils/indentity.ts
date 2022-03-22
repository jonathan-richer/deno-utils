
/**
 * Returns the first argument passed to the function.
 * @param args arguments
 * @returns The first argument passed to the function
 */
export function identity<T, V = T>(...args: [first: T, ...others: unknown[]]): V {
	return args[0] as unknown as V;
}

export type IdentityFunction<T, V = T> = (...args: [first: T, ...others: unknown[]]) => V;
