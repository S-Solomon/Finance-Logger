import { Invoice } from './classes/invoice.js';
import { ListTemplate } from './classes/ListTemplates.js';
import { payment } from './classes/payment.js';
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new payment(...values);
    }
    list.render(doc, type.value, 'end');
});
// TUPLES
let arr = ['ryu', 25, true];
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];
let tup = ['ryu', 25, true];
tup[0] = 'ken';
tup[1] = 30;
let student;
student = ['chun-li', 2];
// GENERICS
// const addUID = <T extends {name: string}> (obj: T) => {
//     let uid = Math.floor(Math.random() * 100);
//     return {...obj, uid}
// }
// let docOne = addUID({name: 'yoshi', age: 40});
// let docTwo = addUID('hello)
// console.log(docOne.age);
// with Interfaces
// interface Resource<T> {
//     uid: number;
//     resourceName: string;
//     data: T;
// }
// const docThree: Resource<object> = {
//     uid: 1,
//     resourceName: 'person',
//     data: { name: 'shaun'}
// }
// const docFour: Resource<string[]> = {
//     uid: 2,
//     resourceName: 'shoppingList',
//     data: ['bread', 'milk', 'toilet roll']
// }
// console.log(docThree, docFour);
// ENUMS
// enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON}
// interface Resource<T> {
//     uid: number;
//     resourceType: ResourceType;
//     data: T;
// }
// const docThree: Resource<object> = {
//     uid: 1,
//     resourceType: ResourceType.PERSON,
//     data: { name: 'shaun'}
// }
// const docFour: Resource<string[]> = {
//     uid: 2,
//     resourceType: ResourceType.BOOK,
//     data: ['bread', 'milk', 'toilet roll']
// }
// console.log(docThree, docFour)
