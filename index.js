

const myName = "Ishwar Joshi"

const myNameElement= document.getElementById("name");


let letter = ""
let letter2 =""
let index  = 0;

(function typing(){
    letter  = myName.slice(0,++index);
    
    if(index=== myName.length)
    {
        // index = 0;
       // console.log(myName)
        myNameElement.textContent = myName;
    }else
    {
        myNameElement.textContent = letter + "_"
        setTimeout(typing,200)
    }
    


})()


