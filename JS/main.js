var nameInput = document.getElementById("name");
var urlInput = document.getElementById("url");
var addBtn = document.getElementById("addBtn");
var tabalBody = document.getElementById("tableBody")

var  bookMarks = [];
addBtn.onclick = function(){
    var bookMark = {
        name: nameInput.Value,
        url: urlInput.Value
    }
    bookMarks.push(bookMark);
    console.log(bookMarks);
    localStorage.setItem("bookMarks",JOSN.stringify(bookMarks));
}