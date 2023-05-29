const screendisplay = document.querySelector('.screen')
const buttons = document.querySelectorAll('button')

let calculation = []
let accummulativecalculation

function calculate(button){
  const value = button.textcontent

  if (value === "CLEAR"){
    calculation = []
    screendisplay.textcontent = '.'
  }
  else if (value === "="){
      console.log(accummulativecalculation)
    screendisplay.textcontent = eval(accummulativecalculation)
  }
  else { 
  
  calculation.push(value)
  accummulativecalculation = calculation.join('')
  screendisplay.textcontent = accummulativecalculation
    
  }
  
}

buttons.foreach(button => button.addeventlistner('click', () => calculate(button)))