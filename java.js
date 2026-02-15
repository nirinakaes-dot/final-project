 
// adding variables to access the textarea and button elements in the HTML document
const entryDiary = document.getElementById("Entry");
const addEntry = document.getElementById("addEntry"); 

//assign an event listener to the addEntry button
addEntry.addEventListener("click", addNewEntry);

const newEntry =JSON.parse(localStorage.getItem("newEntry")) || [];

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
const Mood =document.getElementsByName("Mood").value;
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
    const searchItem = document.getElementById("Search").value;
    const entries= JSON.parse(localStorage.getItem("newEntry")) 
    //filter entry using mood
    const filterEntries = entries.filter(entry => entry.Mood.toLowerCase().includes(searchItem))

 }

//display entry
function displayEntry(){
    const container=document.getElementById("Entriescont")
    const entries= JSON.parse(localStorage.getItem("newEntry"));
    entries.forEach((entry) =>{
        const entryDiv= document.createElement("div");
        entryDiv.innerHTML= getEntryHTML(entry);
        container.appendChild(entryDiv);

    })};

 //function delete entry
 if(confirm("Are you sure you want to delete this entry?"))
   {let entries= JSON.parse(localStorage.getItem("newEntry"));} 
  
 displayEntry();

 //add event listener to the search button
 document.getElementById("Searchbutton").addEventListener("click", searchEntry);

 //Validation
 if(Title===""|| Date===""|| Mood===""|| Entry==="")
 {alert("Please fill in all the fields");}

//get entry HTML
function getEntryHTML(entry){
    return `h2>${entry.Title}</h2>
    <p>Date: ${entry.Date}</p>
    <p>Mood: ${entry.Mood}</p>
    <p>${entry.Entry}</p>
    <button onclick="deleteEntry(${entry.Title})">Delete</button>`;
}
 //update count
 function entryCount(){
    const count=document.getElementById("entryCount")
    if(count){
        const entries= JSON.parse(localStorage.getItem("newEntry"));
        count.textContent=`Total Entries: ${entries.length}`;
    } }
    entryCount();