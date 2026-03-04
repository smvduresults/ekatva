let selected=[]

let cards=document.querySelectorAll(".card")

cards.forEach(card=>{

card.addEventListener("click",()=>{

card.classList.toggle("selected")

let hobby=card.innerText

if(selected.includes(hobby)){

selected=selected.filter(h=>h!=hobby)

}else{

selected.push(hobby)

}

})

})

function nextPage(){

localStorage.setItem("hobbies",JSON.stringify(selected))

window.location="feedback.html"

}