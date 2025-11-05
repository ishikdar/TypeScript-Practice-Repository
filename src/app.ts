//now lets import the Invoice class, payment class and HasFormatter interface
import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
import type { HasFormatter } from './Interfaces/HasFormatterFile.js';

// html element references
//called all the form children
const form = document.querySelector('.new-item-form') as HTMLFormElement;

//now lets access the input fields
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//so we need to call ul from html
const ul = document.querySelector('.item-list') as HTMLUListElement;
const list = new ListTemplate(ul);


// now lets get the input values on form submit
form.addEventListener('submit', (e: Event) => {
    e.preventDefault(); // prevent the page from reloading on form submit

    //now lets log the input values
    let inputValue: HasFormatter;

    //now lets create a new instance based on the type value
    if (type.value==='invoice'/*this value comes from html value syntax*/){
        inputValue = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    } else {
        inputValue = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }

    list.render(inputValue,type.value, "end")
});

