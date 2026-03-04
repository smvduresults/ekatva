async function getCareer(){

let prompt = "Suggest best tech career and upcoming events for hobbies: " + hobbies.join(",")

let response = await fetch(
"https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key="AIzaSyBuKI4ZrPkiEywqe-qhY5ifLriSCVSuPiM",
{
method:"POST",
headers:{ "Content-Type":"application/json" },

body:JSON.stringify({

contents:[
{
parts:[{text:prompt}]
}
]

})

})

let data = await response.json()

let text = data.candidates[0].content.parts[0].text

document.getElementById("result").innerHTML = text


}


