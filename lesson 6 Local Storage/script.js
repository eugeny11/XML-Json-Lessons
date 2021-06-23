let myKey = localStorage.getItem('myKey');

console.log('1. myKey', myKey);

localStorage.setItem('myKey','myValue');

const jsonString = `
{
    "book" : "Harry Potter"
}
`;

localStorage.setItem('myJSON',jsonString);

myKey = localStorage.getItem('myKey');
console.log('2. myKey', myKey);

const myJSON = localStorage.getItem('myJSON');
console.log('3. myJSON', JSON.parse(myJSON));

localStorage.removeItem('myJSON');

console.log('4. myKey', localStorage.getItem('myKey'));
console.log('5. myJSON', localStorage.getItem('myJSON'));

localStorage.clear();

console.log('6. myKey', localStorage.getItem('myKey'));
console.log('7. myJSON', localStorage.getItem('myJSON'));