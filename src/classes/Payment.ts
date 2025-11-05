// Using 'type' keyword for type-only import (required when verbatimModuleSyntax is enabled)
// This imports only the type information, not runtime code
import type { HasFormatter } from '../Interfaces/HasFormatterFile.js';

// classes
export class Payment implements HasFormatter {
    constructor(
        private recipient: string,
        private details: string,
        private amount: number) { }

    format() {
        const formattedAmount = this.amount.toLocaleString('en-US')
        return `${this.recipient} got paid $${formattedAmount} for ${this.details}`;
    }
}