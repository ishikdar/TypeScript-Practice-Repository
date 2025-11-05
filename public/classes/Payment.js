// classes
export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        const formattedAmount = this.amount.toLocaleString('en-US');
        return `${this.recipient} got paid $${formattedAmount} for ${this.details}`;
    }
}
