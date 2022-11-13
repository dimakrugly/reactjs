//Template literals

const user = 'Bob';
const num = 17;
const txt = 'Hello, ' + user + ' you have ' + num + ' new letters';

console.log(txt)

const template = `Hello, ${user} you have ${num} new letters`;

console.log(template)

//functions in template literals

console.log(`Today is ${Date.now()}`);


//HTML
//ecma 5
const html =
    '<ul>' +
    '<li>Shenima</li>' +
    '<li>Item Two</li>' +
    '</ul>';

console.log(html);


//ecma6
const tea = 'Greenfield';

const htmlTemplate = `
<ul>
    <li>Shenima</li>
    <li>${tea}</li>
    </ul>
    `;
console.log(htmlTemplate)