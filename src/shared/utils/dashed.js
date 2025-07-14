export function dashed(string) {
	return string.toLowerCase().replace(/[: ]/g, '-').replace(/--+/g, '-');
}
