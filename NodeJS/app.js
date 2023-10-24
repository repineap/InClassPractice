const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');
const msg = notes.getNotes();
const greenMsg = chalk.green.bold(msg);
const argv = yargs.argv;
yargs.command({command: 'add',
describe: 'Adding a new note',
builder: {
    title: {
       describe:'Note title',
       demandOption:true,
       type:'string'
    },
    body: {
        describe:'Note body',
        demandOption:true,
        type:'string'
    }
},
handler: function() {
    console.log('Adding a new note');
    // console.log(`Title: ${argv.title}`);
    // console.log(`Body: ${argv.body}`);
    notes.addNote(argv.title, argv.body);
}});
yargs.command({command: 'remove',
describe: 'Removing a new note',
builder: {
    title: {
       describe:'Note title',
       demandOption:true,
       type:'string'
    },
    body: {
        describe:'Note body',
        demandOption:true,
        type:'string'
    }
},
handler: function() {
    console.log('Removing a new note');
    console.log(`Title: ${argv.title}`);
    console.log(`Body: ${argv.body}`);
}});
yargs.command({command: 'list',
describe: 'Listing all notes',
builder: {
    title: {
       describe:'Note title',
       demandOption:true,
       type:'string'
    },
    body: {
        describe:'Note body',
        demandOption:true,
        type:'string'
    }
},
handler: function() {
    console.log('Listing all notes');
    // console.log(`Title: ${argv.title}`);
    // console.log(`Body: ${argv.body}`);
}});
yargs.command({command: 'read',
describe: 'Reading your note',
builder: {
    title: {
       describe:'Note title',
       demandOption:true,
       type:'string'
    },
    body: {
        describe:'Note body',
        demandOption:true,
        type:'string'
    }
},
handler: function() {
    console.log('Reading a note');
}});
yargs.parse();