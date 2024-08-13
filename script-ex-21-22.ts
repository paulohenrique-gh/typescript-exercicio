
// Exercício 21
function appendText(text: string): void {
  let htmlBody: HTMLElement = document.body;
  let newDiv: HTMLElement = document.createElement("div");
  newDiv.innerText = text;
  htmlBody.appendChild(newDiv);
}

appendText("This is the new div!!");

// Exercício 22
function addItemsToList(itemsText: string[]): void {
  let ul: HTMLElement = document.querySelector(".ex-22-list") as HTMLElement;

  itemsText.forEach(text => {
    let li: HTMLElement = document.createElement("li");
    li.innerText = text;
    ul.append(li);
  });
}

addItemsToList(["element 1", "element 2", "element 3"]);