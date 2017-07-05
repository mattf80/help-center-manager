var functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.addExpiryFlag = functions.database.ref('/esolhelpdesk1380528590/new-articles')
    .onWrite(event => {
        const original = event.data.val();
        const copy = original;
        copy.expiryDate = '123'

        return event.data.ref.set(original);
    });

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
