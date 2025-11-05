// Using 'type' keyword for type-only import (required when verbatimModuleSyntax is enabled)
// This imports only the type information, not runtime code
import type {HasFormatter} from '../Interfaces/HasFormatterFile.js';

// classes
export class Invoice implements HasFormatter {
    constructor(
        private client: string, 
        private details: string, 
        private amount: number) {}

    format() {
        const formattedAmount = this.amount.toLocaleString('en-US')
        return `${this.client} owes $${formattedAmount} for ${this.details}`;
    }
}