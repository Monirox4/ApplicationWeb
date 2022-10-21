var newItemCounter =1;
var ourList  =document.getElementById("our-list");
var ourButton = document.getElementById("our-button");
var ourHeadLine =document.getElementById("our-headline");
var listItems=ourList.getElementsByTagName("li")

ourList.addEventListener("click",activateItem);

function activateItem(e){
    if(e.target.nodeName == "LI"){
        ourHeadLine.innerHTML = e.target.innerHTML;
        for(i=0;i<e.target.parentNode.children.length;i++){
            e.target.parentNode.children.remove("active");     
        }
        e.target.add("active");
    }
}
ourButton.addEventListener("click",createNewItem);

function createNewItem() {
    ourList.innerHTML +="<li>Something new" + newItemCounter +
    "</li>";
    newItemCounter++;
}