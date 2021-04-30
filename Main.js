var database;

function setup(){
    createCanvas(400,400);

    //step 1: 
    database = firebase.database(); 
    readData();
    //Challenging part is how to read, write data

    //createButton
    myButton = createButton('ClickMe')
    myButton.mousePressed(writeData());
}

function draw(){

}


function readData(){
    //step1: ref()

    var dbRef = database.ref();

    //on("value", function(data))
    //val:store the information from the database
    dbRef.on("value", function(siddhu){
        details = siddhu.val();
        console.log(details);
    })

}

function writeData(){
    var dbRef = database.ref();

    //2 options: set and update
    //set: delete the old data and write the new data
    //update; will not delete the old data and update the new data


    //dbRef.set({'Hobby':'Programming' , 'Skill' :'Javascript'});

    dbRef.update({'Hobby':'Playing' , 'Skill' :'Sleeping','Interest':'Coding'});
}
//core concepts
//on()--read(listener)
//ref()--refer the database
//set()--
//update()--
//val()--store the data from the daabsese

