

const fs =require('fs') 

const fetch=()=> {
   try {
    return   JSON.parse(fs.readFileSync("log.txt"))
   }
    
   catch {return[]}
}

const add=(title,body)=>{

    const note = {
        title:title , 
        body : body
    }
     const notes = fetch()
     notes.push(note)
     fs.writeFileSync('log.txt',JSON.stringify(notes))
     console.log(notes)

}
const remove=(title)=>{

    
     const notes = fetch().filter(el=>el.title!==title)
     fs.writeFileSync('log.txt',JSON.stringify(notes))
     console.log(notes)

}
const read=(title)=>{
    const notes = fetch()
     console.log(notes.filter(el=>el.title===title))
}
const list=()=>{
    const notes=fetch()
    const l=notes.length
    console.log('Printing '+l+' note(s).')
}


module.exports ={add,remove,read,list}


