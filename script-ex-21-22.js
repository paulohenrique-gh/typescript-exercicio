"use strict";
// Exercício 21
function appendText(text) {
    let htmlBody = document.body;
    let newDiv = document.createElement("div");
    newDiv.innerText = text;
    htmlBody.appendChild(newDiv);
}
appendText("This is the new div!!");
// Exercício 22
function addItemsToList(itemsText) {
    let ul = document.querySelector(".ex-22-list");
    itemsText.forEach(text => {
        let li = document.createElement("li");
        li.innerText = text;
        ul.append(li);
    });
}
addItemsToList(["element 1", "element 2", "element 3"]);
