const display=document.getElementById("display")
const dis=document.getElementById("sin")
function appendToDisplay(inp) {

    display.value=display.value+inp
 
}
function clearDisplay() {
    display.value=""  
    
}

function calculate() {
    
  try{
   
   display.value=eval(display.value)  
   

  } 
  catch(eror){
  display.value="Error"
}
}
function clearing() {
    display.value=(display.value.slice(0,-1)) 
}



