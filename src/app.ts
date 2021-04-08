interface isPerson {
    name: string;
    age: number;

    speak(a: string):void;
    spend(a: number):number;
}

const me: isPerson = {
    name: 'shun',
    age: 30,
    speak(text: string):void {
        console.log(text);
    },
    spend(amount: number):number {
        console.log(' I spent', amount);
        return amount
    }
}

const greetPerson = (person: isPerson) => {
    console.log('hello', person.name)
}

greetPerson(me)

let someone: isPerson;


console.log(me);











import { Invoice } from './classes/invoice.js'

const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

let invoices: Invoice[] = [];
invoices.push(invOne)
invoices.push(invTwo)

invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format())
})







const form = document.querySelector('.new-item-form') as HTMLFormElement;

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault;

    console.log(
        type.value,
        toFrom.value,
        details.value,
        amount.valueAsNumber
    );
})