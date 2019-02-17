export default class NumberFormat {
    public val: number;

    constructor(val: number) {
        this.val = val;
    }

    static from(val: number) {
        return new NumberFormat(val);
    }

    get degreesC() {
        return `${Math.round(this.val)}°C`;
    }

    get degreesF() {
        return `${Math.round(this.val)}°F`;
    }
}