export default function linear_search(
    haystack: number[],
    needle: number,
): boolean {
    for (let a = 0; a < haystack.length; a++) {
        if (haystack[a] === needle) {
            return true;
        }
    }
    return false;
}
