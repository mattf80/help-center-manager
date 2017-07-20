const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors')({ origin: true });
const zendesk = require('./zendesk');
const sendgrid = require('sendgrid')('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');
var helper = require('sendgrid').mail;


const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const app = express();

const authenticate = (req, res, next) => {
    console.log('Checking if request has a Firebase token attached...')
    if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) {
        console.error('No token attached.');
        res.status(403).send('Unauthorized');
        return;
    }
    let idToken;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
        console.log('Authorization header found.');
        idToken = req.headers.authorization.split('Bearer ')[1];

        admin.auth().verifyIdToken(idToken).then(decodedIdToken => {
            console.log('ID Token correctly decoded', decodedIdToken);
            req.user = decodedIdToken;
            next();
        }).catch(error => {
            console.error('Error while verifying Firebase ID token:', error);
            res.status(403).send('Unauthorized, bad token.');
        });
    }
};

app.use(cors);
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
            res.status(200).send({ "results": articles });
        })
        .catch(err => {
            res.status(400).send(err.message)
        });
});


exports.sendMail = functions.https.onRequest((req, res) => {
    var fromEmail = new helper.Email('orgenduser@gmail.com');
    var toEmail = new helper.Email('mattfrowe@gmail.com');
    var subject = 'One of your Help Center articles is about to expire';
    var content = new helper.Content('text/plain', 'This is the article, yo');
    var mail = new helper.Mail(fromEmail, subject, toEmail, content);

    var request = sendgrid.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: mail.toJSON()
    });

    return sendgrid.API(request).then(() => {
        res.send('Email sent!')
    })
        .catch(err => {
            res.send(err);
        });
})

exports.addTask = functions.https.onRequest((req, res) => {
    let tasksRef = admin.database().ref('esolhelpdesk1380528590/tasks');

    let task = {
        user: {
            name: 'Terry',
            email: 'knox.t@cambridgeenglish.org'
        },
        article: {
            id: 123456,
            title: 'Draft Linguaskill Tech Support article'
        },
        taskType: 'review',
        dueDate: '21/07/2017'
    }

    tasksRef.push(task).then(result => {
        console.log(result);
    })
        .catch(err => console.log(err));
})


exports.addExpiryFlag = functions.database.ref('/esolhelpdesk1380528590/new-articles')
    .onWrite(event => {
        const original = event.data.val();
        const copy = original;
        copy.expiryDate = '123'

        return event.data.ref.set(original);
    });


exports.api = functions.https.onRequest(app);