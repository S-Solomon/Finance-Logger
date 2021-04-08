// interface isPerson {
//     name: string;
//     age: number;
//     speak(a: string):void;
//     spend(a: number):number;
// }
// const me: isPerson = {
//     name: 'shun',
//     age: 30,
//     speak(text: string):void {
//         console.log(text);
//     },
//     spend(amount: number):number {
//         console.log(' I spent', amount);
//         return amount
//     }
// }
// const greetPerson = (person: isPerson) => {
//     console.log('hello', person.name)
// }
// greetPerson(me)
// let someone: isPerson;
// console.log(me);
import { Invoice } from './classes/invoice.js';
import { payment } from './classes/payment.js';
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice('yoshi', 'web work', 250);
// docTwo = new payment('mario', 'plumbing work', 200);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs)
// const invOne = new Invoice('mario', 'work on the mario website', 250);
// const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
// let invoices: Invoice[] = [];
// invoices.push(invOne)
// invoices.push(invTwo)
// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format())
// })
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
