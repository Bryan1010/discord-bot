var db = require('diskdb');

db.connect('records', ['scanningHooks'])

var webhookInfo ={
    hookID: '750202706961891358',
    hookToken: 'fBCDDo_6MczggVHsb-B5hTNXhdqLZ_taiLByjNb73ruAsJ7_glhTPterOp7yOysIrN1x',
    websiteToScan: 'https://h3turing.cs.hbg.psu.edu/cmpsc472/',
    hash: ''
}

db.scanningHooks.save(webhookInfo);