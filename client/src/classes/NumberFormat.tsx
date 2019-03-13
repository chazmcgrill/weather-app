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

    get mphToKph() {
        const mph = this.val;
        return mph * 1.60934;
    }

    get kph() {
        return `${this.mphToKph}kph`;
    }

    get mph() {
        return `${this.integer}mph`;
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