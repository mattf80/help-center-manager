var zendesk = require('node-zendesk');
//var config = require('./config/zendesk.config');
var functions = require('firebase-functions');

var hc_client = zendesk.createClient({
    username: functions.config().zendesk.username,
    token: functions.config().zendesk.apikey,
    remoteUri: functions.config().zendesk.hc_url,
    helpcenter: true,
});

var client = zendesk.createClient({
    username: functions.config().zendesk.username,
    token: functions.config().zendesk.apikey,
    remoteUri: functions.config().zendesk.hc_url
});

exports.articleRefresh = function (starttime) {
    return new Promise((resolve, reject) => {

        hc_client.articles.listSinceStartTime(starttime, function (err, req, results) {
            if (err) {
                return reject(err);
            } else {
                console.log('Getting articles...');
                results.forEach(function (article) {
                    var toDelete = ["body"];
                    delete article[toDelete];
                }, this);
                return resolve(results);
            }
        });
    });
}

exports.getArticle = function (articleId) {
    return new Promise((resolve, reject) => {
        hc_client.articles.show(articleId, function (err, req, results) {
            if (err) {
                return reject(err);
            } else {
                return resolve(results);
            }
        })
    });
}