const { app, BrowserWindow } = require('electron');
const fs = require('fs');
const path = require('path');

var btnCreate = document.getElementById('btnCreate');
var btnRead = document.getElementById('btnRead');
var btnDelete = document.getElementById('btnDelete');
var movieName = document.getElementById('movieName');
var year = document.getElementById('year');
var actors = document.getElementById('actors');

let pathName = path.join(__dirname, 'Files');

btnCreate.addEventListener('click', function(){
    let file = path.join(pathName, movieName.value);
    let contents = `Year: ${year.value}\nActors: ${actors.value}`;

    fs.writeFile(file, contents, function(err){
        if(err){
            return console.log(err);
        }
        var movie = document.getElementById("movieName").value;
        alert(`${movie} text file was created`);
        console.log("The file was created");
    });
});

btnRead.addEventListener('click', function(){
    let file = path.join(pathName, movieName.value);

    fs.readFile(file, 'utf8', function(err, data){
        if(err){
            return console.log(err);
        }
        let lines = data.split('\n');
        year.value = lines[0].split(':')[1].trim();
        actors.value = lines[1].split(':')[1].trim();
        console.log("The file was read!");
    });
});

btnDelete.addEventListener('click', function(){
    let file = path.join(pathName, movieName.value);

    fs.unlink(file, function(err){
        if(err){
            return console.log(err);
        }
        movieName.value = "";
        year.value = "";
        actors.value = "";
        console.log("The file was deleted!");
    });
});
