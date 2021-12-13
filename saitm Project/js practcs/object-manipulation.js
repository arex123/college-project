const fs = require('fs');

fs.readFile('data.json',(err,dat)=>{
    if(err) throw err;
    let students = JSON.parse(dat);
    
    let sem = 7;
    let Branch = "cse";
    let course = "Btech";

    let obj = students.course.Branch.sem.theory;

    
    for(const key in obj) {
        console.log(`${key}`); // `${key}: ${user[key]}
    }


})
