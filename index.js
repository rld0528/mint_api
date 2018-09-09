const express = require('express');
const contentful = require('contentful');
const app = express();

const contentfulClient = contentful.createClient({
    space: 'i153drybp3rl',
    accessToken: '25582a407547da85620001827b486bf3184651bfc298d010077346a1dbc9a3f5'
});

app.get('/', (req, res) => {
    //res.send('OK');
    contentfulClient.getEntries().then(result => {
        res.send(result);
});
});

app.listen(3000, () => console.log('listening to port 3000'));
