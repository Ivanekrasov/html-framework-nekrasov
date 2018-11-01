const fetch = require('node-fetch');

var api_url = 'https://api.nytimes.com/svc/books/v3/lists/overview.json';
const api_key = 'e1cf0b6bd5774d6080146e5f35f61a2f';
const publish_date = '2017-03-10';
api_url +='?api-key=' + api_key + '&published_date=' + publish_date;

fetch(api_url)
    .then(response => response.json())
    .then(response => {
        response.results.lists.forEach(list => {
            console.log(`name: ${list.display_name}, bookLength=${list.books.length}`);
        });
    })
    .catch(console.error);