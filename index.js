

const myName = "Ishwar Joshi"
const upcoming = "Wait !!! Writing More Code (-)"
const myNameElement= document.getElementById("name");
const upcomingElement = document.querySelector(".upcoming")
const ABOUTME = "ABOUT ME"

let letter = ""
let letter_upcoming =""
let index  = 0;
let index2 = 0;
function typing_name(){
    letter  = myName.slice(0,++index);
   
    if(index=== myName.length)
    {
        // index = 0;
       // console.log(myName)
        myNameElement.textContent = myName;
    }else
    {
        myNameElement.textContent = letter + "_"
       
        setTimeout(typing_name,200)
    }
    

   


}

typing_name()





function alwaysTyping(){
    letter_upcoming = upcoming.slice(0,++index2)
    
    upcomingElement.textContent = letter_upcoming +'_'
    if(index2 == upcoming.length)
    {
        index2 = 0;
    }
    setTimeout(alwaysTyping,200)
}


alwaysTyping()
