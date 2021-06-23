const jsonString = `
{
    "book":{
        "category":"CHILDREN",
        "title":{
            "lang":"en",
            "value":"Harry Potter"
        },
        "author":"J. K. Rowling",
        "year": "2005",
        "price" : 29.99
    }
}
`;

const data = JSON.parse(jsonString);
const book = data.book;

const result = {
    category: book.category,
    title: book.title.value,
    lang: book.title.lang,
    author: book.author,
    year: Number(book.year),
    price: Number(book.price),

};

console.log('result',result);