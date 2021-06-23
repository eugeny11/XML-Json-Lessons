function useRequest(url,callback){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function(){
        if (xhr.status != 200){
            console.log('Статус - ', status);
        }

        else {
            const result = JSON.parse(xhr.response);
            if (callback){
                callback(result);
            }
        }
    };

    xhr.error = function(){
        console.log('Ошибка! Статус - ', status);
    };

    xhr.send();
};

const btnRequestNode = document.querySelector('.j-btn-request');
const btnClearNode = document.querySelector('.j-btn-clear');

btnRequestNode.addEventListener('click', () => {
    const myJSON = localStorage.getItem('myJSON');

    if (myJSON){
        console.log('localStorage JSON', JSON.parse(myJSON));
    } else {
        useRequest('https://picsum.photos/v2/list/?limit=1', (json) => {
        console.log('request JSON', json);
        localStorage.setItem('myJSON',JSON.stringify(json));
        });
    }
});

btnClearNode.addEventListener('click',() =>{
    localStorage.clear();
    console.log('Данные из localStorage удалены');
});