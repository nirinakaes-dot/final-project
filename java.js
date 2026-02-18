 
const newEntry =JSON.parse(localStorage.getItem("newEntry")) || [];

// adding variables to access the textarea and button elements in the HTML document
const entryDiary = document.getElementById("Entry");
const addEntry = document.getElementById("addEntry"); 


function Journal(Title,Date,Mood,Entry){
this.Title=Title;
    this.Date=Date;
    this.Mood=Mood;
    this.Entry=Entry;
}


//function to add the entry to the array
function addNewEntry(){ 
const Title = document.getElementById("Title").value
const Date = document.getElementById("Date").value;
const Entry = document.getElementById("Entry").value;
const boxMood = Array.from (document.getElementsByName("Mood"));


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
    if(!document.getElementById("Entriescont")) return;

    const selectedMood = document.getElementById("FilterMood").value.toLowerCase();
    const searchItem = document.getElementById("Search").value;
    const entries= JSON.parse(localStorage.getItem("newEntry")) || [];
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
        
        return matchesMood && matchesSearch;

    });

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
    });}

    //display entry
function displayEntry(){
    const container=document.getElementById("Entriescont")
    if(!container) return;
    container.innerHTML="";
    const entries= JSON.parse(localStorage.getItem("newEntry")) ||[];
  
  //message if no entries are found
        if(entries.length ===0){
            container.innerHTML= "<p> No entries found. Please add a new entry.</P>"
         return;}

    entries.forEach((entry, index) =>{
        const entryDiv= document.createElement("div");
        entryDiv.innerHTML= getEntryHTML(entry, index);
        container.appendChild(entryDiv);
});}


      
 if(document.getElementById("Entriescont")){displayEntry();}


 //get entry HTML
function getEntryHTML(entry, index){
    const isFav =entry.favorite=== true
    return `<h2>${entry.Title}</h2>
    <p>Date: ${entry.Date}</p>
    <p>Mood: ${entry.Mood}</p>
    <p>${entry.Entry}</p>
   <button onclick="toggleFavorite(${index})">${isFav ? '★ Unfavorite' : '☆ Favorite'}</button>
    <button onclick="deleteEntry(${index})">Delete</button>`


}
//favorite
function toggleFavorite(index){
    let entries= JSON.parse(localStorage.getItem("newEntry")) || []
    entries[index].favorite = !entries[index].favorite;
    localStorage.setItem("newEntry", JSON.stringify(entries));
    displayEntry();
}
//function to display favorites
function displayFavorites(){
    const container = document.getElementById("favcont")
    if(!container) return;
    const entries =JSON.parse(localStorage.getItem("newEntry")) || []
    const favorites = entries.filter(entry=> entry.favorite=== true);
    container.innerHTML="";

    if(favorites.length===0){
        container.innerHTML="<p>No favorite entries listed</p>";
        return;
    }
    favorites.forEach((entry, index) => {
        const actualIndex = entries.findIndex(e =>
            e.Title === entry.Title &&
            e.Date === entry.Date &&
            e.Entry === entry.Entry
        );
        const div = document.createElement("div");
        div.innerHTML = getEntryHTML(entry, actualIndex);
        container.appendChild(div);
    });
}

if(document.getElementById("favcont")){ displayFavorites(); }



   
 //update count
 function entryCount(){
    const count=document.getElementById("entryCount")
    if(count){
        const entries= JSON.parse(localStorage.getItem("newEntry")) ||[];
        count.textContent=`Total Entries: ${entries.length}`;
    } }
    entryCount();

    //delete function
function deleteEntry(index){

    //delete entry confirmation
        if(confirm("Are you sure you want to delete this entry?")){
   
    let entries= JSON.parse(localStorage.getItem("newEntry"));
    entries= entries.filter((entry, i) => i !== index);
    localStorage.setItem("newEntry", JSON.stringify(entries));
    displayEntry();
    entryCount();
}
}



//mood filter
const moodFilter= document.getElementById("FilterMood");

if (moodFilter) 
    {moodFilter.addEventListener("change", searchEntry);}
    

//assign an event listener to the addEntry button
if (addEntry){addEntry.addEventListener("click", addNewEntry);}  


//add event listener to the search button
 const searchButton =document.getElementById("Searchbutton");
 if (searchButton){
    searchButton.addEventListener("click", searchEntry);
 }