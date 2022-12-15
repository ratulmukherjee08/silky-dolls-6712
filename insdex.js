
// navbar

let locate=document.getElementById("location")
let arrow=document.getElementById("arrow")
let list=document.getElementById("list")
let text=document.getElementById("text");
locate.addEventListener("click",function (){
    list.classList.toggle("showing")
    arrow.classList.toggle("rotate")
})
function myFunction(output){
    text.innerHTML=output
}

let Eng=document.querySelector("#eng")
let Change = document.querySelector(".change")
let lang=document.querySelector(".language")
let arrow2=document.getElementById("arrow2")
    lang.addEventListener("click",function change(){
        Change.classList.toggle("display");
        arrow2.classList.toggle("rotate2")
    })
    function changeLang(x){
        Eng.innerHTML=x
    }

    let image=document.getElementById("imgId")
    let dropdown=document.getElementById("dropDownid")

    image.addEventListener("click",()=>{
        dropdown.classList.toggle("showProfile")
    })

