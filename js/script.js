'use strict'

const sendData = (url, data) => {
    return fetch(url, {
        method: 'POST',
        body: data,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(response => response.ok ? response : Promise.reject(response))
        .then(response => response.json())
        .catch(() => console.log('ошибочка вышла'));

};

const getData = () => {
    return fetch('../b.json')
        .then(response => response.json())
        .then(data => {
            return data
        })
        .catch(() => console.log('база не загрузилась'));
};

sendData('https://jsonplaceholder.typicode.com/posts', JSON.stringify(getData().data))
    .then(data => {
        console.log(data);
    })

