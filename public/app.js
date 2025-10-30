// classes
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `$${this.client} owes £${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
//now lets print them in the console
console.log(invoices);
// html element references
//called all the form children
const form = document.querySelector('.new-item-form');
//now lets access the input fields
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// now lets get the input values on form submit
form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent the page from reloading on form submit
    console.log(type.value, // selected option from dropdown
    tofrom.value, // text from "To/From" input
    details.value, // text from "Details" input
    amount.valueAsNumber // number from "Amount" input
    );
});
export {};
