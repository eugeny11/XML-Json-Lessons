const parser = new DOMParser();

const xmlString = `
<book category = "CHILDREN">
<title lang = "en">Harry Potter</title>
<author>J. K. Rowling</author>
<year>2005</year>
<price>29.99</price>
</book>
`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const bookNode = xmlDOM.querySelector("book");
const titleNode = xmlDOM.querySelector("title");
const authorNode = xmlDOM.querySelector("author");
const yearNode = xmlDOM.querySelector("year");
const priceNode = xmlDOM.querySelector("price");

const categoryAttr = bookNode.getAttribute('category');
const langAttr = titleNode.getAttribute('lang');

const result = {
    category: categoryAttr,
    lang: langAttr,
    title: titleNode.textContent,
    author: authorNode.textContent,
    year: Number(yearNode.textContent),
    price: Number(priceNode.textContent),
}

console.log('result',result);