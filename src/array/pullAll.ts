import * as mod from '../../mod.ts';

/**
 * Pull all values from arr that is in the exceptions array.
 * @param arr The array to change
 * @param exceptions The exceptions array
 * @param iteratee A mapping function
 * @returns The mutated array
 */
export function pullAllBy<T, V = T>(
	arr: T[],
	exceptions: T[],
	iteratee: (v: T) => V =
		mod.identity as mod.IdentityFunction<T, V>
): T[] {
	for (let i = arr.length - 1; i >= 0; i--) {
		if (exceptions.includes(arr[i]))
			arr.splice(i, 1);
	}
	return arr;
}

/**
 * Pull all values from arr that is in the exceptions array.
 * @param arr The array to change
 * @param exceptions The exceptions array
 * @param iteratee A mapping function
 * @returns The mutated array
 */
export function pullAll<T>(arr: T[], exceptions: T[]): T[] {
	return pullAllBy(arr, exceptions);
}
