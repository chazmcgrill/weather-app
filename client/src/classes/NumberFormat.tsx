export default class NumberFormat {
    public val: number;

    constructor(val: number) {
        this.val = val;
    }

    static from(val: number) {
        return new NumberFormat(val);
    }

    get farenheitToCelcius() {
        const f = this.val;
        return Math.round((f - 32) * 5 / 9);
    }

    get integer() {
        return Math.round(this.val);
    }

    get degreesC() {
        return `${this.farenheitToCelcius}°C`;
    }

    get degreesF() {
        return `${this.integer}°F`;
    }
}