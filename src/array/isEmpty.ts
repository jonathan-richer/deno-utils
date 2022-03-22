

export function isEmpty(arr: unknown[]): boolean;
export function isEmpty(arr: unknown[], _ = arr.length): _ is 0 {
	return _ === 0;
}
