const newman = require('newman');
 
newman.run({
    collection: require("./collection/dmoney-transaction.json"),
    //collection:'https://api.postman.com/collections/16794323-b463ed8c-4ac0-4af2-9de7-65d9cf2fcb42?access_key=PMAT-01H1QWMFBATSEW2NC6ZWXF9AQZ',
    //environment:require('./collection/dmo'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});