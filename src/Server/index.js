import express from 'express';
import cors from 'cors';
import { renderToString } from 'react-dom/server';
import React from 'react';
import serialize from 'serialize-javascript';

import App from '../shared/App';
import { fetchPopularRepos } from '../shared/api';

const app = express();
app.use(cors());

app.use(express.static('public'));

app.get('*', (req, res, next) => {
    fetchPopularRepos().then(response => {

        const markup = renderToString(<App data={response} />);
    
        res.send(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>React with SSR</title>
                <script src="bundle.js" defer></script>
            </head>
            <body>
                <div id="root">${markup}</div>
            </body>
        </html>
        `);
    })
});

app.listen(3000, () => {
    console.log('server is listening');
});