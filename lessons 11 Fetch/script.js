const btn = document.querySelector('j-btn');

fetch('https://picsum.photos/v2/list/?limit=5')
.then((response) =>{
    console.log('response', response);

    const result = response.json();
    console.log('result', result);
    return result;
})
.then((data) =>{

    console.log(data);
})
.catch(() =>{
    { console.log('error')}
});