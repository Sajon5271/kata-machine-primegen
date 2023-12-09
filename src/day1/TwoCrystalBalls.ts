export default function two_crystal_balls(breaks: boolean[]): number {
    let lo = 0;
    const jmpAmount = Math.floor(Math.sqrt(breaks.length));
    while (!breaks[lo] && lo <= breaks.length) {
        lo += jmpAmount;
    }
    if (lo > breaks.length) return -1;
    lo -= jmpAmount;
    while (!breaks[lo]) {
        lo++;
    }
    return lo;
}
