
const newEntry =JSON.parse(localStorage.getItem("newEntry")) || [];

{   this.Title=Title;
    this.Date=Date;
    this.Mood=Mood;
    this.Entry=Entry;
}


//function to add the entry to the array
function addNewEntry(){ 
const Title =document.getElementById("Title").value
const Date =document.getElementById("Date").value;
const Entry =document.getElementById("Entry").value;
const boxMood=Array.from (document.getElementsByName("Mood"));


//defining an array to store the selected moods
let Mood=[];

boxMood.forEach((box) =>{
    if(box.checked)
        Mood.push(box.value);
 });

 //Validation
 if(Title===""|| Date===""|| Mood.length === 0|| Entry==="")
 {alert("Please fill in all the fields")
    ;
return;
}

//new entry object
const entry= new Journal( Title,Date,Mood,Entry);

//pushing the entry to the array
newEntry.push(entry);

//save on local storage
localStorage.setItem("newEntry", JSON.stringify(newEntry));

//clear form
document.getElementById ("Title").value =""
document.getElementById("Date").value=""
boxMood.forEach(box => box.checked = false);
document.getElementById("Entry").value=""

//confirmation message
alert("Your entry has been added successfully!");

}

//Search entry
 function searchEntry(){
    const searchItem = document.getElementById("Search").value;
    const entries= JSON.parse(localStorage.getItem("newEntry")) 
    const filteredEntries= entries.filter(entry => entry.Title.toLowerCase().includes(searchItem.toLowerCase()));
    const container=document.getElementById("Entriescont");
    container.innerHTML="";

   // Filter entries
    const filteredEntries = entries.filter(entry => {
        const matchesSearch = searchItem === "" || 
            entry.Title.toLowerCase().includes(searchItem) ||
            entry.Entry.toLowerCase().includes(searchItem);
        
        const matchesMood = selectedMood === "" || 
            (Array.isArray(entry.Mood) ? 
                entry.Mood.some(m => m.toLowerCase() === selectedMood) : 
                entry.Mood.toLowerCase() === selectedMood);
        
        return;
    });
    }
    // Display results
    container.innerHTML = "";
    if (filteredEntries.length === 0) {
        container.innerHTML = "<p>No matching entries found.</p>";
        return;
    }

    filteredEntries.forEach((entry) => {
        const actualIndex = entries.findIndex(e => 
            e.Title === entry.Title && 
            e.Date === entry.Date && 
            e.Entry === entry.Entry
        );
        const entryDiv = document.createElement("div");
        entryDiv.innerHTML = getEntryHTML(entry, actualIndex);
        container.appendChild(entryDiv);
    });

    //display entry
function displayEntry(){
    const container=document.getElementById("Entriescont")
    container.innerHTML="";
    const entries= JSON.parse(localStorage.getItem("newEntry"));
  
  //message if no entries are found
        if(entries.length ===0){
            container.innerHTML= "<p> No entries found. Please add a new entry.</P>";
  
    entries.forEach((entry) =>{
        const entryDiv= document.createElement("div");
        entryDiv.innerHTML= getEntryHTML(entry);
        container.appendChild(entryDiv);

        }
      
    )}};


      
 displayEntry();

 //get entry HTML
function getEntryHTML(entry, index){

    return `<h2>${entry.Title}</h2>
    <p>Date: ${entry.Date}</p>
    <p>Mood: ${entry.Mood}</p>
    <p>${entry.Entry}</p>
    <button onclick="deleteEntry('${index}')">Delete</button>`;}

   
 //update count
 function entryCount(){
    const count=document.getElementById("entryCount")
    if(count){
        const entries= JSON.parse(localStorage.getItem("newEntry"));
        count.textContent=`Total Entries: ${entries.length}`;
    } }
    entryCount();




//mood filter
const moodFilter= document.getElementById("FilterMood");
if(moodFilter.value)
{moodFilter.addEventListener("mood Filter", searchEntry)}
    




//assign an event listener to the addEntry button
addEntry.addEventListener("click", addNewEntry);

const newEntry =JSON.parse(localStorage.getItem("newEntry")) || [];





 //add event listener to the search button
 document.getElementById("Searchbutton").addEventListener("click", searchEntry);




    //delete function
function deleteEntry(title){

    //delete entry confirmation
        if(confirm("Are you sure you want to delete this entry?"))
   
    let entries= JSON.parse(localStorage.getItem("newEntry"));
    entries= entries.filter(entry => entry.Title !== title);
    localStorage.setItem("newEntry", JSON.stringify(entries));
    displayEntry();
    entryCount();
}

// adding variables to access the textarea and button elements in the HTML document
const entryDiary = document.getElementById("Entry");
const addEntry = document.getElementById("addEntry"); 
