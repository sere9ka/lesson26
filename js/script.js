'use strict'

const sendData = (url, data) => {
    return fetch(url, {
        method: 'POST',
        body: data,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
    }).then(response => response.json())

};

const getData = () => {
    return fetch('../db.json')
        .then(response => response.json())
        .then(data => {
            return data
        })
};

sendData('https://jsonplaceholder.typicode.com/posts', JSON.stringify(getData().data))
    .then(data => {
        console.log(data);
    })

