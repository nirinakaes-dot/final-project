
// adding variables to access the textarea and button elements in the HTML document
const entryDiary = document.getElementById("Entry");
const addEntry = document.getElementById("AddEntry"); 

//assign an event listener to the addEntry button
addEntry.addEventListener("click", addNewEntry);

const newEntry =[];

//create a constructor for the entries//
function Journal(Title,Date,Mood,Entry)

{   this.Title=Title;
    this.Date=Date;
    this.Mood=Mood;
    this.Entry=Entry;
}


//function to add the entry to the array
function addNewEntry(){ 
const Title =document.getElementById("Title").value
const Date =document.getElementById("Date").value;
const Mood =document.getElementById("Mood").value;
const Entry =document.getElementById("Entry").value;

//new entry object
const entry= new Journal( Title,Date,Mood,Entry);

//pushing the entry to the array
newEntry.push(entry);

//save on local storage
localStorage.setItem("newEntry", JSON.stringify(newEntry));

//clear form
document.getElementById ("Title").value =""
document.getElementById("Date").value=""
document.getElementById("Mood").value=""
document.getElementById("Entry").value=""
}

 //Search entry
 function searchEntry(){
    const searchItem = document.getElementById("search").value;
    const entries= JSON.parse(localStorage.getItem("newEntry")) 
    //filter entry using mood
    const filteredEntries = entries.filteredEntries((entry)) => entry.Mood.tolowerCase().includes(searchItem.)
    tolowerCase(());
 }



 