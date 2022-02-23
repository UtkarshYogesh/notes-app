console.log("Notes aapp")
shownotes();
// adding note to your local storage
let btn = document.getElementById("addbtn")
btn.addEventListener("click", function(e) {
    let addNote = document.getElementById("text")
    let notes = localStorage.getItem("notes")
    if (notes == null) {
        notesObj = []
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addNote.value);
    localStorage.setItem("notes", JSON.stringify(notesObj))
    addNote.value = " ";
    console.log(notesObj);
    shownotes();


})

function shownotes() {
    let notes = localStorage.getItem("notes")
    if (notes == null) {
        notesObj = []
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element, index) {
        html += `<div class="notes my-3 mx-3" style="width: 18rem;">
                    <div class="card-body" style="border: 3px solid black">
                        <h5 class="card-title"> Note ${index+1}</h5>
                         <p class="card-text">${element}</p>
                         <button id="${index}" onclick="deletebtn(this.id)" class="btn btn-primary" id="DeleteBtn">Delete Note</button>
                     </div>
                </div>
            `


    });

    let notesElm = document.getElementById("notes")
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `Nothing to show! Click on "Add note" to add note`
    }

}

//function to delete the note
function deletebtn(index) {
    console.log("I am deleting note number", index)
    let notes = localStorage.getItem("notes")
    if (notes == null) {
        notesObj = []
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    shownotes();

}

let search = document.getElementById("searchtxt")
search.addEventListener("input", function() {
    let inputval = search.value;
    console.log("Input event is fired", inputval)
    let notecard = document.getElementsByClassName("notes");
    Array.from(notecard).forEach(function(element) {
        let cardText = element.getElementsByTagName("p")[0].innerText;
        if (cardText.includes(inputval)) {
            element.style.display = "block"
        } else {
            element.style.display = "none"
        }
        //console.log(cardText)
    })
})

/* further featers
 1. Add title
 2. Mark note as imp
 */