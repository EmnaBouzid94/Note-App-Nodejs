const yargs = require('yargs')
const Note= require('./Note.js')
const fs=require('fs')

const title = yargs.argv.title 
const body = yargs.argv.body
const command =yargs.argv._[0]

 if(command ==='add') {
    if (title && body)
     {console.log("New note is added")
     Note.add(title,body)}
     else {console.log(fs.readFileSync('OptionsAdd.txt').toString())}
 }
 else if (command === 'remove'){
     if (title)
    {console.log("Note was removed")
    Note.remove(title)}
    else {console.log(fs.readFileSync('OptionsR.txt').toString())}
 }
 else if (command === 'read'){
     if (title)
    {console.log("Note found")
    Note.read(title)}
    else { console.log(fs.readFileSync('OptionsR.txt').toString())}
 }
 else if(command==='list'){
    Note.list()
 }



