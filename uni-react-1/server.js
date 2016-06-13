import express from 'express';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import http from 'http';
import logger from 'morgan';
import bodyParser from 'body-parser';

import { routes } from './routes';

const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');
//default path resolving
app.get('/', (req, res)=>{
  //route matche and pass props;
//    const markup = renderToString(<RouterContext {...props} />);
//    res.render('index', { markup });
match({ routes, location: req.url }, (err, redirectLocation, props) => {
  if (err) {
    // something went badly wrong, so 500 with a message
    res.status(500).send(err.message);
  } else if (redirectLocation) {
    // we matched a ReactRouter redirect, so redirect from the server
    console.log('if 1')
    res.redirect(302, redirectLocation.pathname + redirectLocation.search);
  } else if (props) {
    // if we got props, that means we found a valid component to render
    // for the given route
    console.log('if 2')
    const markup = renderToString(<RouterContext {...props} />);

    // render `index.ejs`, but pass in the markup we want it to display
    res.render('index', { markup })

  } else {
    // no route match, so 404. In a real app you might render a custom
    // 404 view here
    res.sendStatus(404);
  }
  });
});
//all routed web path resolving
app.get('/web/*', (req, res)=>{
  //route matche and pass props;
//    const markup = renderToString(<RouterContext {...props} />);
//    res.render('index', { markup });
match({ routes, location: req.url }, (err, redirectLocation, props) => {
  if (err) {
    // something went badly wrong, so 500 with a message
    res.status(500).send(err.message);
  } else if (redirectLocation) {
    // we matched a ReactRouter redirect, so redirect from the server
    console.log('if 2.1')
    res.redirect(302, redirectLocation.pathname + redirectLocation.search);
  } else if (props) {
    // if we got props, that means we found a valid component to render
    // for the given route
    console.log('if 2.2')
    const markup = renderToString(<RouterContext {...props} />);

    // render `index.ejs`, but pass in the markup we want it to display
    res.render('index', { markup })

  } else {
    // no route match, so 404. In a real app you might render a custom
    // 404 view here
    res.sendStatus(404);
  }
  });
});
//apis are listed below:
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));
app.get('/api', function(req, res, next) {
  res.send('please select a collection, e.g., /collections/messages')
});

///*
const server = http.createServer(app);

server.listen(3003);
server.on('listening', () => {
  console.log('Listening on 3003... sama')
});
//*/
/*
app.listen(3003, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:3003');
});
*/
