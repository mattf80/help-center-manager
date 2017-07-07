const functions = require('firebase-functions');
const express = require('express');
const zendesk = require('./zendesk');


const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const app = express();

const authenticate = (req, res, next) => {
    if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) {
        res.status(403).send('Unauthorized');
        return;
    }
    const idToken = req.headers.authorization.split('Bearer ')[1];
    admin.auth().verifyIdToken(idToken).then(decodedIdToken => {
        req.user = decodedIdToken;
        console.log(req.user);
        next();
    }).catch(error => {
        res.status(403).send('Unauthorized, bad token.');
    });
};

app.use(authenticate);

app.get('/test', (req, res) => {
    zendesk.getArticle(200333058)
        .then(article => {
            res.status(200).send(article);
        })
        .catch(err => {
            res.status(400).send(err.message);
        });
});

app.get('/articles/refresh', (req, res) => {
    zendesk.articleRefresh(req.query.start_time)
        .then(articles => {
            res.status(200).send(articles);
        })
        .catch(err => {
            res.status(400).send(err.message)
        });
});

exports.addExpiryFlag = functions.database.ref('/esolhelpdesk1380528590/new-articles')
    .onWrite(event => {
        const original = event.data.val();
        const copy = original;
        copy.expiryDate = '123'

        return event.data.ref.set(original);
    });


exports.api = functions.https.onRequest(app);