// classes
export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        const formattedAmount = this.amount.toLocaleString('en-US');
        return `${this.client} owes $${formattedAmount} for ${this.details}`;
    }
}
