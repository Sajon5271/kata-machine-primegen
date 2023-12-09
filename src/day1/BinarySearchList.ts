export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0,
        hi = haystack.length;
    // Bad code
    // Out of index access
    if (haystack[lo] === needle || haystack[hi] === needle) return true;

    while (lo < hi) {
        const mid = Math.floor(lo + (hi - lo) / 2);
        if (haystack[mid] === needle) {
            return true;
        } else if (haystack[mid] < needle) {
            lo = mid;
        } else {
            hi = mid;
        }
    }

    return false;
}
