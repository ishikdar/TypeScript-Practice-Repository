//now lets import the Invoice class, payment class and HasFormatter interface
import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
// html element references
//called all the form children
const form = document.querySelector('.new-item-form');
//now lets access the input fields
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//so we need to call ul from html
const ul = document.querySelector('.item-list');
const list = new ListTemplate(ul);
// now lets get the input values on form submit
form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent the page from reloading on form submit
    //now lets log the input values
    let inputValue;
    //now lets create a new instance based on the type value
    if (type.value === 'invoice' /*this value comes from html value syntax*/) {
        inputValue = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        inputValue = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(inputValue, type.value, "end");
});
