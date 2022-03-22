
export function shuffle<T>(arr: T[]) {
	const copy = arr.slice();
	const result = [] as T[];
	let n = arr.length;
	let i: number,
		e: T;

	do {
		i = Math.floor(Math.random() * n);
		e = copy.copyWithin(-1, i).pop()!;
		[e] = copy.splice(i, 1);
		result.unshift(e);
	} while (n-- > 0);

	return result;
}
