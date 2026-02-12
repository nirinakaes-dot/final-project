
// adding variables to access the textarea and button elements in the HTML document
const entryDiary = document.getElementById("Entry");
const addEntry = document.getElementById("AddEntry"); 

//assign an event listener to the addEntry button
addEntry.addEventListener("click",function(){});

//create a constructor for the entries//
function Entry(Title,Date,Mood,Entry)

{   this.Title=Title;
    this.Date=Date;
    this.Mood=Mood;
    this.Entry=Entry;
}

//array to store the entries
constnewEntry=[Title,Date,Mood,Entry];

//function to add the entry to the array
function addNewEntry(){ constTitle=document.getElementById("Title")
constDate=document.getElementById("Date")
constMood=document.getElementById("Mood")
constEntry=document.getElementByI("Entry") 

//new entry object
const entry= new Entry(Title,Date,Mood,Entry);

//pushing the entry to the array
new Entry.push(entry);

//save on local storage
localStorage.setItem("newEntry", JSON.stringify(newEntry));



 