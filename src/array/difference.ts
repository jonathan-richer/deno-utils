import * as mod from '../../mod.ts';

export function differenceBy<T, V = T>(
	arr: T[],
	exception: V[],
	iteratee =
		mod.identity as mod.IdentityFunction<T, V>
): T[] {
	const copy = arr.slice();
	return mod.pullAllBy(copy, exception, iteratee);
}

export function difference<T>(arr: T[], exceptions: T[]): T[] {
	return differenceBy(arr, exceptions);
}
